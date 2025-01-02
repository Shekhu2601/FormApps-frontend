import { useState, useEffect } from "react";
import styles from "./Folder.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";
import { MdDelete } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import Swal from 'sweetalert2'

export default function Folder({ handleToggle , Close }) {
  const navigate = useNavigate();
  const params = useParams();
 

  const [formData, setFormData] = useState({
    FolderName: "",
  });

  const closs = () => {
    navigate("/dashboard");
    Close();
  };

  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copySFormdata = { ...formData };
    copySFormdata[name] = value;
    setFormData(copySFormdata);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const { FolderName } = formData;
    if (!FolderName) {
      return handleError("name, is required");
    }
    try {
      const response = await fetch(`https://form-apps-backend.vercel.app/folder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: ` ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        
       
        Close()
        navigate("/dashboard");
        setTimeout(() => {
          window.location.reload()
        },2000 );
         
      } 
    
      else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
      console.log(result);
    } catch (err) {
      handleError(err);
    }
  };
  return (
    <>
      <div onClick={Close} className={styles.wrapar}></div>
      <div className={styles.dateP}></div>
      <div className={handleToggle?styles.dark:styles.container}>
        <form onSubmit={handleCreate}>
          <label className={styles.titlelabel} htmlFor="Create New Folder">
            Create New Folder
          </label>
          <br />
          <input
            className={styles.inputTitle}
            value={formData.FolderName}
            onChange={handleChange}
            name="FolderName"
            type="text"
          />

          <div className={styles.btndiv}>
            <button type="submit" className={styles.save}>
              Done
            </button>

            <RxDividerVertical className={styles.diveder} />
            <button onClick={closs} className={styles.cancle}>
              Cancel
            </button>
          </div>
        </form>
        
      </div>
    </>
  );
}
