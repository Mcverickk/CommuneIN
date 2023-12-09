import styles from "../styles/DasboardNavbar.module.css";
import Link from "next/link";
import AppButton from "./AppButton";

const DashboardNavbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        
      </div>
      <div className={styles.boxCenter}>
        <span className={styles.navText}>Launchpad</span>
        <span className={styles.navText}>Grants</span>
        <span className={styles.navText}>Fund Distribution</span>
      </div>
      <div className={styles.boxRight}>
        <AppButton text="Launch App" />
      </div>
    </div>
  );
};

export default DashboardNavbar;