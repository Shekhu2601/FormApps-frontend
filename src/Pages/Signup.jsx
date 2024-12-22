
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import styles from './Signup.module.css'
import icon from '../logo/GoogleIcon.png'
import iconB from '../logo/Ellipse.png'
import yt from '../logo/yt.png'
import ep from '../logo/EllipseP.png'
import ey from '../logo/EllipseY.png'
import { BsArrowLeftShort } from "react-icons/bs";


export default function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
       
        password: ''
    })

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;
        if (!name || !email || !password) {
            return handleError('name, email, and password are required')
        }
        try {
            
            const response = await fetch(`https://form-apps-backend.vercel.app/auth/signup`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });
            const result = await response.json();
            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login')
                }, 1000)
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
            console.log(result);
        } catch (err) {
            handleError(err);
        }
    }
    return (
        <>
        <div className={styles.container}>
            
            <div className={styles.main}>
                <Link className={styles.arro} to='/home'> <BsArrowLeftShort /></Link>


               <img className={styles.yt} src={yt} alt="" />
               <img className={styles.ep} src={ep} alt="" />
               <img className={styles.ey} src={ey} alt="" />
            <form onSubmit={handleSignup}>
                <div className={styles.infi} >
                    <label htmlFor='name'>Username</label>
                    <input className={styles.inputs}
                        onChange={handleChange}
                        type='text'
                        name='name'
                        autoFocus
                        placeholder='Enter your name...'
                        value={signupInfo.name}
                    />
                </div>
                
                <div  className={styles.infi}>
                    <label htmlFor='email'>Email</label>
                    <input className={styles.inputs}
                        onChange={handleChange}
                        type='email'
                        name='email'
                        placeholder='Enter your email...'
                        value={signupInfo.email}
                    />
                </div>
                <div  className={styles.infi}>
                    <label htmlFor='password'>Password</label>
                    <input className={styles.inputs}
                        onChange={handleChange}
                        type='password'
                        name='password'
                        placeholder='At least 8 characters'
                        value={signupInfo.password}
                    />
                </div >
                <button className={styles.Signupbtn} type='submit'>Sign Up</button> <br />
                <div className={styles.subH}>OR</div>
                <p className={styles.Signupbtn2} > 
                <img  src={iconB} className={styles.icon2} alt="" />  <img className={styles.icon} src={icon} alt="" /> Sign Up with Google </p> <br />
                <span className={styles.subH}>Already have an account ? 
                    <Link className={styles.links} to="/login">&nbsp; Login</Link>
                </span>
            </form>
            <ToastContainer /></div>
           
           
        </div>
         
         </>
    )
}
