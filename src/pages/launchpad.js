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
        <ErcComponent name="Token 1" info="NFTs for the exclusive Indian community." sold="$1030" totalSupply="$40000" timeLeft="2 days"/>
        <ErcComponent name="Token 2" info="NFTs for the exclusive Indian community." sold="$2230" totalSupply="$5000" timeLeft="1 day"/>
        </div>
        <NftComponent pic="./mrgadget.jpeg" info="A fun retro gadget collection." name="Mr.Gadget" price="2 mMATIC" timeLeft="3 days" disabled= {true}/>
        </div>
    </div>
  )
}