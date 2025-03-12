import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import userImg from "../../assets/Profile.png";
import rating from "../../assets/Notifications.png"
import { fetchUserData } from "../../apis/auth";

const Sidebar = () => {
  const [userInfo, setUserInfo] = useState({});

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


  return (
      <div className={styles.sidebar}>
        <div className={styles.profileWrapper}>
          <figure className={styles.figure}>
            <img className={styles.userImg} src={userInfo.avatar} alt="user-img" className={styles.avatar}/>
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
            <button className={styles.btn}>Accounts</button>
            <button className={styles.btn}>Settings</button>
        </div>

      </div>
  );
};

export default Sidebar;
