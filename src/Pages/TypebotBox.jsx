import React, { useEffect, useState } from "react";
import { getAllTypebot, deleteTypebot, isView } from "../services/GetData";
import { decodeToken } from "react-jwt";
import styles from "./TypebotBox.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

export default function Typebotlist() {
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
        deleteTypebot(id).then(() => {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });

          setTypebots((prev) => prev.filter((typebot) => typebot._id !== id));
        });
      }
    });
  };

  return (
    <div className={styles.container}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        typebots.map((typebot, idx) => {
          const isViewable = isView(typebot.creator);

          return (
            <p key={idx}>
              <div>
                <div className={isViewable ? styles.typebotO : styles.typebotC}>
                  {isViewable ? <button>Show</button> : null}
                </div>
                <div className={styles.fname}>
                  {typebot.Name}
                  <button
                    className={styles.edbtn}
                    onClick={() => handleDelete(typebot._id)}
                  >
                    <RiDeleteBin6Line className={styles.del} />
                  </button>
                </div>
              </div>
            </p>
          );
        })
      )}
    </div>
  );
}
