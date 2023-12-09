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
       
        <NftComponent pic="./communein.jpeg" info="NFTs for the exclusive Indian community." name="CommuneIN" price="0.01 mMATIC" timeLeft="3 hrs" disabled={false}/>
        <div className="listErc">
        <ErcComponent pic="/bharatbox.jpeg" name="$BHARATBOX" info="Tokens to be used to buy land on Bharat Box platform." sold="$1030 /" totalSupply="$40000" timeLeft="2 days" basketSize="20" disabled= {true}/>
        <ErcComponent pic="/metro.png" name="$METRO" info="Reward token for travelling in Delhi Metro." sold="$2230 /" totalSupply="$5000" timeLeft="1 day" basketSize="100" disabled= {true}/>
        </div>
        <NftComponent pic="./mrgadget.jpeg" info="A collection of fun retro gadget NFTs." name="Mr.Gadget" price="2 mMATIC" timeLeft="3 days" disabled= {true}/>
        </div>
    </div>
  )
}