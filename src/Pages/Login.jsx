import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
import styles from "./Login.module.css";
import icon from '../logo/GoogleIcon.png'
import iconB from '../logo/Ellipse.png'
import yt from '../logo/yt.png'
import ep from '../logo/EllipseP.png'
import ey from '../logo/EllipseY.png'
import { BsArrowLeftShort } from "react-icons/bs";

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("email and password are required");
    }
    try {
      const response = await fetch(
        `https://form-apps-backend-sekher-namdevs-projects.vercel.app/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        }
      );
      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
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
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <Link className={styles.arro} to="/home">
            <BsArrowLeftShort />
          </Link>

          <img className={styles.yt} src={yt} alt="" />
          <img className={styles.ep} src={ep} alt="" />
          <img className={styles.ey} src={ey} alt="" />

          <form onSubmit={handleLogin}>
            <div className={styles.infi}>
              <label htmlFor="email">Email</label>
              <input
                className={styles.inputs}
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Enter your email..."
                value={loginInfo.email}
              />
            </div>
            <div className={styles.infi}>
              <label htmlFor="password">Password</label>
              <input
                className={styles.inputs}
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="At least 8 characters"
                value={loginInfo.password}
              />
            </div>
            <button className={styles.loginbtn} type="submit">
              Log in
            </button>
            <br />
            <div className={styles.subH}>OR</div>
            <p className={styles.Loginbtn2}>
              <img src={iconB} className={styles.icon2} alt="" />
              <img className={styles.icon} src={icon} alt="" /> Sign In with
              Google
            </p>
            <br />
            <span className={styles.subH}>
              Does't have an account ?
              <Link className={styles.links} to="/signup">
              &nbsp; Register now
              </Link>
            </span>
          </form>
          <ToastContainer />
        </div>
        <div className={styles.right}></div>
      </div>
    </>
  );
}
