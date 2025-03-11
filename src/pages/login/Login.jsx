import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import toast from "react-hot-toast";
import { validateError } from "../../utils/services";
import { loginUser } from "../../apis/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(()=> {
    const token = localStorage.getItem("token")
    if(token) navigate("/dashboard")
  }, [])

  const [formData, SetFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const inputHandler = (e) => {
    SetFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validateError(formData)) {
      try {
        setLoading(true);
        const data = await loginUser(formData);
        localStorage.setItem("token", data.token)
        toast.success("Login successfully");
        navigate("/dashboard");
      } catch (error) {
        console.error(error.message);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.bgDots}></div>
        <div className={styles.bgDots}></div>
        <div className={styles.bgDots}></div>
        <div className={styles.bgDots}></div>
        <div className={styles.bgDots}></div>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Login</h1>
          <form noValidate className={styles.form}>
            <div className={styles.inputContainer}>
              <input
                type="email"
                name="email"
                value={formData.email}
                className={styles.input}
                onChange={inputHandler}
                placeholder="Email id"
              />
            </div>

            <div className={styles.inputContainer}>
              <input
                type="password"
                name="password"
                value={formData.password}
                className={styles.input}
                onChange={inputHandler}
                placeholder="Password"
              />
            </div>

            <button
              onClick={handleLogin}
              className={`${styles.btn} ${loading ? styles.btnDisabled : ""}`}
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
