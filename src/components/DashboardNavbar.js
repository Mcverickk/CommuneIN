import styles from "../styles/DasboardNavbar.module.css";
import Link from "next/link";
import AppButton from "./AppButton";

const DashboardNavbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        
      </div>
      <div className={styles.boxCenter}>
        <Link href="/launchpad" className={styles.navText}>Launchpad</Link>
        <Link href='/grants' className={styles.navText}>Grants</Link>
        <Link href='/fund' className={styles.navText}>Fund Distribution</Link>
      </div>
      <div className={styles.boxRight}>
        <AppButton text="Launch App" />
      </div>
    </div>
  );
};

export default DashboardNavbar;