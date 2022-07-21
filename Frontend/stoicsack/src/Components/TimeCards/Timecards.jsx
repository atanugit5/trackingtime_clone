import React from 'react'
import styles from './Timecards.module.css';
import Navbar from "../Navbar/Navbar";
const Timecards = () => {
  return (
    <div>
    <div><Navbar/></div>
    <div className={styles.heading}>Timecards</div>
    </div>
  )
}

export default Timecards