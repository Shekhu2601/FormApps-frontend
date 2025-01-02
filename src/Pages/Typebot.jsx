import { useState, useEffect } from "react";
import styles from "./Folder.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";
import { MdDelete } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import Swal from 'sweetalert2'



export default function Typebot({ handleToggle , CloseT }) {
  const navigate = useNavigate();
  const params = useParams();
 

  const [formData, setFormData] = useState({
    Name: "",
  });

  const closs = () => {
    navigate("/dashboard");
    CloseT();
  };

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copySFormdata = { ...formData };
    copySFormdata[name] = value;
    setFormData(copySFormdata);
  };
  const token = localStorage.getItem("token");
  const handleCreate = async (e) => {
    e.preventDefault();
    const { Name } = formData;
    if (!Name) {
      return handleError("name, is required");
    }
    try {
      const response = await fetch(`https://form-apps-backend.vercel.app/typebot`, {
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
        
       
        CloseT()
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
      <div onClick={CloseT} className={styles.wrapar}></div>
      <div className={styles.dateP}></div>
      <div className={handleToggle?styles.dark:styles.container}>
        <form onSubmit={handleCreate}>
          <label className={styles.titlelabel} htmlFor="Create New Typebot">
            Create New Typebot
          </label>
          <br />
          <input
            className={styles.inputTitle}
            value={formData.Name}
            onChange={handleChange}
            name="Name"
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
