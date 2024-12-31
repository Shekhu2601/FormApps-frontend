import React, { useState } from 'react'
import styles from './Dashboard.module.css'
import './nav.css'; // Import the CSS file
import Folder from './Folder';
import { ToastContainer } from 'react-toastify';
import { HiOutlineFolderAdd } from "react-icons/hi";
import FolderBox from './FolderBox';
import Typebot from './Typebot';
import { FaPlus } from "react-icons/fa6";
import Typebotlist from './TypebotBox';
import { useNavigate } from 'react-router-dom';
import NameSL from './NameSL';






export default function Dashboard() {
    const uname= localStorage.getItem("loggedInUser")
    const [isToggled, setIsToggled] = useState(false);
  const navigate=useNavigate();
      const handleToggle = () => {
        setIsToggled(!isToggled);
      };
      const [open ,setOpen] =useState(false);
      const Close = ()=>{
        setOpen(false)
      }
      const [typebotopen ,setTypebotopen] =useState(false);
      const CloseT = ()=>{
        setTypebotopen(false)
      }
      const logout =()=>{
        localStorage.removeItem("token");
        alert("you are logged out")
        navigate("/login")
        
    }
  return (

    <>
   
    <div className= { isToggled?styles.dark:styles.container }>
    {open && <Folder handleToggle={handleToggle }Close={Close}/>}
    {typebotopen && <Typebot handleToggle={handleToggle }CloseT={CloseT}/>}
     <div className={styles.navbar}>
         
         <NameSL/>
         <div className={styles.btn}> <span>Light</span>
         <div className="toggle-container" onClick={handleToggle}> 
      <div className={`toggle-circle ${isToggled ? '' : 'active'}`}> </div> 
    </div>
    <span>Dark</span>
        <button className={styles.share}>share</button>
         </div>
     </div>

<div className={styles.main}>

<div className={styles.folders}>
<p className={ isToggled?styles.darkF:styles.createF} onClick={()=>setOpen(true)} > < HiOutlineFolderAdd className={styles.createFS} /> 
Create a folder </p>
<FolderBox/>
</div>
<div className={styles.typebot}>
<p className={styles.createT}  onClick={()=>setTypebotopen(true)}>
<FaPlus className={styles.plus} />

Create a typebot
</p>
  <Typebotlist/>
</div>
</div>
    </div>
    <ToastContainer/>
    </>
  )
}
