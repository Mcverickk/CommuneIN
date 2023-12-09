import styles from "../styles/Dashboard.module.css";
import DashboardNavbar from "../components/DashboardNavbar";
import  '../styles/voting.css';
import VotingCard from "../components/VotingCard";
export default function Votings() {
  return(
    <div className={styles.background}>
      <DashboardNavbar/>
      <div className={'body'}>
      {[1,2,3].map(data=>(
        <VotingCard key={data} data={data}/>
      )) } 
        </div>
    </div>
  )
}