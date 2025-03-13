import React, { useEffect, useState } from "react";
import styles from "./Content.module.css";
import plusIcon from "../../assets/plus-icon.png";
import userLogo from "../../assets/users-logo.png";
import dotIcon from "../../assets/three-dot.png";
import BarChart from "../BarChart/BarChart";
import ProgressChart from "../ProgressChart/ProgressChart";
import { fetchExpenses, fetchBarData, fetchTipsData, fetchHeaderData} from "../../apis/auth";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";

const Content = () => {
  const [todayExpenses, setTodayExpenses] = useState([]);
  const [previousExpenses, setPreviousExpenses] = useState([]);
  const [barData, setBarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tips, setTips] = useState([])
  const [headerData, setHeaderData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [expenses, barDataRes, tipsRes, headerRes] = await Promise.all([
          fetchExpenses(),
          fetchBarData(),
          fetchTipsData(),
          fetchHeaderData()
        ])
        const data = expenses;
        const newData = data.slice(0, 3);
        const prevData = data.slice(3, 5);
        setTodayExpenses(newData);
        setPreviousExpenses(prevData);
        setBarData(barDataRes);
        setTips(tipsRes);
        setHeaderData(headerRes);
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
              <h1 className={styles.title}>{headerData[0].title}</h1>
              <div className={styles.logoWrapper}>
                <div className={styles.logos}>
                  <img src={headerData[0].userLogo} alt="" />
                </div>
                <img src={headerData[0].plusIcon} alt="" className={styles.plusIcon} />
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
                  src={tips[0].imgFirst}
                  alt="illustration"
                  className={styles.illustration}
                />
                <img src={tips[0].imgSecond} alt="leaf" className={styles.leafLogo} />
                <div className={styles.rectangleText}>
                  <p className={styles.para}>{tips[0].title}</p>
                  <p className={styles.description}>
                    {tips[0].description}
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
