import styles from "../styles/Dashboard.module.css";
import DashboardNavbar from "../components/DashboardNavbar";
import  '../styles/voting.css';
import VotingCard from "../components/VotingCard";
export default function Votings() {
  return(
    <div className={styles.background}>
      <DashboardNavbar/>
      <div className={'body'}>
      <VotingCard title="StartUp India Grants" info="Indian Central Govt fund which provides funding and incubation to boost tech startups in India." timeLeft="5 days" tag="Entreprenuership" disabled={false}/>
      <VotingCard title="Karnataka Flood Relief" info="Karnataka Flood Relief is a philanthropic initiative assisting flood victims in Karnataka." timeLeft="2hrs" tag="Disaster" disabled={true}/>
        </div>
    </div>
  )
}