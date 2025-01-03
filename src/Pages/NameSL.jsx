import React, { useState } from "react";
import { useNavigate ,Link } from "react-router-dom";
import styles from './NameSL.module.css'
import Swal from "sweetalert2";
const NameSL = () => {
    const navigate=useNavigate();
    const logout =()=>{
        localStorage.removeItem("token");
       
        navigate("/login")
        
        
    }
     const handleLogout = () => {
        Swal.fire({
          title: "Are you sure logout ?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Logout it !",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Logout!",
              text: "You are logout.",
              icon: "success"
            });
           logout()
          }
        
        });
      };
  const [isOpen, setIsOpen] = useState(false);

  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const uname= localStorage.getItem("loggedInUser")
  return (
    <div className={styles.container} >
      
      <button onClick={toggleDropdown} className={styles.name}>
      {uname}'s Workspace
      </button>

      
      {isOpen && (
        <div className={styles.main}
         
        >
          <ul className={styles.UlM} >
            <li className={styles.option}  >
           <Link style={{
            textDecoration:"none",
            color:"white"
           }} to="/settings"> Settings</Link>
            </li>
            <li className={styles.option} onClick={handleLogout}>
            Log Out
            </li>
           
          </ul>
        </div>
      )}
    </div>
  );
};

export default NameSL;
