import styles from "../styles/Dashboard.module.css";
import DashboardNavbar from "../components/DashboardNavbar";
import  '../styles/voting.css';
import VotingCard from "../components/VotingCard";
export default function Votings() {
  return(
    <div className={styles.background}>
      <DashboardNavbar/>
      <div className={'body'}>
      {/* {[1,2,3].map(data=>(
        <VotingCard key={data} data={data} title="Title" info="nbkiwcbuiwebuciuwbeciuwub" startDate="" />
      )) }  */}
      <VotingCard title="Title" info="nbkiwcbuiwebuciuwbeciuwub" timeLeft="5 days" tag="Development"/>
      <VotingCard title="Title" info="nbkiwcbuiwebuciuwbeciuwub" timeLeft="2hrs" tag="Research"/>
      <VotingCard title="Title" info="nbkiwcbuiwebuciuwbeciuwub" timeLeft="2 weeks" tag="Research"/>
        </div>
    </div>
  )
}