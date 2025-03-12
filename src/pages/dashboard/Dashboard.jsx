import React from 'react'
import styles from "./Dashboard.module.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import Content from '../../components/Content/Content'

const Dashboard = () => {
  return (
    <>
    <div className={styles.container}>
      <Sidebar />
      <Content />
    </div>
    </>
  )
}

export default Dashboard