import styles from "../styles/Dashboard.module.css";
import DashboardNavbar from "../components/DashboardNavbar";

export default function Dashboard() {
  return(
    <div className={styles.background}>
      <DashboardNavbar/>
      <div className={styles.body}>
        <div lassName={styles.card}>
          
        </div>
          
        </div>
    </div>
  )
}