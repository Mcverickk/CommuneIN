import DashboardNavbar from "../components/DashboardNavbar";
import  '../styles/voting.css';
import VotingCard from "../components/VotingCard";

export default function Votings() {
  return(
    <div className='background'>
      <DashboardNavbar/>
      <div className='body'>
      <VotingCard pic="/startup.png" name="StartUp India Grants" info="Indian Central Govt fund which provides funding and incubation to boost tech startups in India." totalSupply="$4000" sold="" timeLeft="5 days" basketSize="20$" disabled= {false}/>
      <VotingCard pic="/karnataka.png" name="Karnataka Flood Relief" info="Karnataka Flood Relief is a philanthropic initiative assisting flood victims in Karnataka." totalSupply="$50000" sold="" timeLeft="2 hrs" basketSize="100$" disabled= {true}/>
      </div>
    </div>
  )
}