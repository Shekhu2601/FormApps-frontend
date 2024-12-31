import React from "react";
import { getAllFolder, deleteFolder } from "../services/GetData";
import { useEffect, useState } from "react";

import styles from "./FolderBox.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";

import Swal from "sweetalert2"; // This does not expose `Swal.fire`.

export default function Folderlist({ handleToggle }) {
  const [folders, setFolders] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);
  const getFolder = () => {
    getAllFolder().then((res) => {
      setFolders(res.data);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    getFolder();
  }, []);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        deleteFolder(id);
      }
    });

    setTimeout(() => {
      window.location.reload();
    }, 4000);
  };

  return (
    <>
      <div className={styles.container}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          folders.map((folder, idx) => (
            <p key={idx}>
              <div>
                <div className={handleDelete ? styles.main : styles.fname}>
                  {folder.FolderName}{" "}
                  <button
                    className={styles.edbtn}
                    onClick={(e) => handleDelete(folder._id)}
                  >
                    <RiDeleteBin6Line className={styles.del} />
                  </button>{" "}
                </div>
              </div>
            </p>
          ))
        )}
      </div>
    </>
  );
}
