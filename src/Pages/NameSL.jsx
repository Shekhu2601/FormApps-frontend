import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './NameSL.module.css'
const NameSL = () => {
    const navigate=useNavigate();
    const logout =()=>{
        localStorage.removeItem("token");
        alert("you are logged out")
        navigate("/login")
        
    }
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
            Settings
            </li>
            <li className={styles.option} onClick={logout}>
            Log Out
            </li>
           
          </ul>
        </div>
      )}
    </div>
  );
};

export default NameSL;
