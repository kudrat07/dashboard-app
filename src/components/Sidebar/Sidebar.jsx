import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import rating from "../../assets/Notifications.png"
import { fetchUserData } from "../../apis/auth";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getInfo = async() => {
      try {
        const data =  await fetchUserData();
        setUserInfo(data)
      } catch (error) {
        console.log(error);
      }
    }
    getInfo();
  }, [])

      const handleLogout = () =>{
        localStorage.clear()
        navigate("/")
      }


  return (
      <div className={styles.sidebar}>
        <div className={styles.profileWrapper}>
          <figure className={styles.figure}>
            <img  src={userInfo.avatar} alt="user-img" className={styles.avatar}/>
            <img src={rating} alt="" className={styles.rating}/>
          </figure>
          <h2 className={styles.username}>{`${userInfo.first_name}${userInfo.last_name}`}</h2>
          <p className={styles.email}>{userInfo.email}</p>
        </div>

        <div className={styles.btnWrapper}>
            <button className={styles.btn}>Dashboard</button>
            <button className={`${styles.btn} ${styles.btnActive}`}>Expenses</button>
            <button className={styles.btn}>Wallets</button>
            <button className={styles.btn}>Summary</button>
            <button className={styles.btn}>Settings</button>
            <button
             className={styles.btnLogout}
             onClick={handleLogout}
             >
             Logout
             </button>
        </div>

      </div>
  );
};

export default Sidebar;
