import styles from "../styles/LaunchPad.module.css";
import DashboardNavbar from "../components/DashboardNavbar";
import '../styles/launchpad.css'
import NftComponent from "../components/NftComponent";
import { ErcComponent } from "../components/ErcComponent";

export default function Launchpad() {
  return(
    <div className={styles.background}>
      <DashboardNavbar/>
      <div className={styles.body}>
       
        <NftComponent/>
        <div className="listErc">
        <ErcComponent/>
        <ErcComponent/>
        </div>
        <NftComponent/>

        </div>
    </div>
  )
}