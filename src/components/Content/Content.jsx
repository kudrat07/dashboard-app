import React, { useEffect, useState } from "react";
import styles from "./Content.module.css";
import plusIcon from "../../assets/plus-icon.png";
import userLogo from "../../assets/users-logo.png";
import dotIcon from "../../assets/three-dot.png";
import BarChart from "../BarChart/BarChart";
import ProgressChart from "../ProgressChart/ProgressChart";
import illustration from "../../assets/illustration.png";
import leaf from "../../assets/illustration-leaf.png";
import { fetchExpenses, fetchBarData } from "../../apis/auth";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";

const Content = () => {
  const [todayExpenses, setTodayExpenses] = useState([]);
  const [previousExpenses, setPreviousExpenses] = useState([]);
  const [barData, setBarData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [expenses, barDataRes] = await Promise.all([
          fetchExpenses(),
          fetchBarData()
        ])
        const data = expenses;
        const newData = data.slice(0, 3);
        const prevData = data.slice(3, 5);
        setTodayExpenses(newData);
        setPreviousExpenses(prevData);
        setBarData(barDataRes)
      } catch (error) {
        console.error(error.message);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getPreviousDate = (daysAgo) => {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const previousDate = getPreviousDate(1);

  return (
    <div className={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.content}>
          <div className={styles.sectionFirst}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>Expenses</h1>
              <div className={styles.logoWrapper}>
                <div className={styles.logos}>
                  <img src={userLogo} alt="" />
                </div>
                <img src={plusIcon} alt="" className={styles.plusIcon} />
              </div>
            </div>
            <p className={styles.dateRange}>01 - 25 March, 2020</p>
            <div className={styles.chartContainer}>
              <BarChart />
            </div>
            <div className={styles.itemContainer}>
              <div className={styles.itemTitleWrapper}>
                <p className={styles.itemDate}>Today</p>
                <img src={dotIcon} alt="icon" />
              </div>
            </div>
            <div className={styles.border}></div>
            <div className={styles.items}>
              {todayExpenses.map((data) => (
                <div className={styles.item} key={data.id}>
                  <div className={styles.itemCategory}>
                    <img
                      src={data.avatar}
                      alt="item logo"
                      className={styles.itemIcon}
                    />
                    <div>
                      <p className={styles.category}>{data.name}</p>
                      <p className={styles.time}>{data.substring}</p>
                    </div>
                  </div>
                  <p className={styles.price}>{data.value}</p>
                </div>
              ))}
            </div>
            <div className={styles.itemContainer}>
              <div className={styles.itemTitleWrapper}>
                <p className={styles.itemDate}>{previousDate}</p>
                <img src={dotIcon} alt="icon" />
              </div>
            </div>
            <div className={styles.border}></div>
            <div className={styles.items}>
              {previousExpenses.map((data) => (
                <div className={styles.item} key={data.id}>
                  <div className={styles.itemCategory}>
                    <img
                      src={data.avatar}
                      alt="item logo"
                      className={styles.itemIcon}
                    />
                    <div>
                      <p className={styles.category}>{data.name}</p>
                      <p className={styles.time}>{data.substring}</p>
                    </div>
                  </div>
                  <p className={styles.price}>{data.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.sectionSecond}>
            <div className={styles.wrapper}>
              <h4 className={styles.titleSmall}>Where your money go?</h4>
              <div className={styles.progressChart}>
                <ProgressChart barData = {barData}/>
              </div>
              <div className={styles.rectangle}>
                <img
                  src={illustration}
                  alt="illustration"
                  className={styles.illustration}
                />
                <img src={leaf} alt="leaf" className={styles.leafLogo} />
                <div className={styles.rectangleText}>
                  <p className={styles.para}> Save more money</p>
                  <p className={styles.description}>
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim.
                  </p>
                  <button className={styles.sectionBtn}>VIEW TIPS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
