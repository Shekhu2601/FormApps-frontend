import React from "react";
import { getAllTypebot, deleteTypebot } from "../services/GetData";
import { useEffect, useState } from "react";

import styles from "./TypebotBox.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";

import Swal from "sweetalert2"; // This does not expose `Swal.fire`.

export default function Typebotlist({ handleToggle }) {
  const [typebots, setTypebots] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);
  const getTypebot = () => {
    getAllTypebot().then((res) => {
      setTypebots(res.data);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    getTypebot();
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
        deleteTypebot(id);
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
          typebots.map((typebot, idx) => (
            <p key={idx}>
              <div>
                <div className={styles.fname}>
                  {typebot.Name}
                  <button
                    className={styles.edbtn}
                    onClick={(e) => handleDelete(typebot._id)}
                  >
                    <RiDeleteBin6Line className={styles.del} />
                  </button>
                </div>
              </div>
            </p>
          ))
        )}
      </div>
    </>
  );
}
