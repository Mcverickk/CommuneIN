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
       
        <NftComponent pic="./communein.jpeg" info="NFTs for the exclusive Indian community." name="CommuneIN" price="0.01 mMATIC" timeLeft="3 hrs"/>
        <div className="listErc">
        <ErcComponent/>
        <ErcComponent/>
        </div>
        <NftComponent pic="./mrgadget.jpeg" info="A fun retro gadget collection." name="Mr.Gadget" price="2 mMATIC" timeLeft="3 days" disabled= {true}/>
        </div>
    </div>
  )
}