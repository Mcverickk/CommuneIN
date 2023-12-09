import styles from "../styles/DasboardNavbar.module.css";
import Link from "next/link";
import AppButton from "./AppButton";
import { useRouter } from "next/router";

const navBar = [
  {
    name: "LaunchPad",
    to: "/launchpad",
  },
  {
    name: "Fund Distribution",
    to: "/funds",
  },
  {
    name: "Voting",
    to: "/voting",
    disableText: "coming soon",
  },
];
const DashboardNavbar = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className={styles.navbar}>
      <div></div>
      <div className={styles.boxCenter}>
        {navBar.map((nav) => (
          <Link
            key={nav.to}
            href={nav.to}
            className={
              router.pathname === nav.to ? "navText navTextActive" : "navText"
            }
            style={nav.disableText?{opacity:'0.8',cursor:'default',pointerEvents:'none'}:{}}
            
          >
            {nav.name} {' '}
            {nav.disableText && <span style={{
              opacity:'0.6'
            }}>({nav.disableText})</span>}
          </Link>
        ))}
      </div>
      <div className={styles.boxRight}>
        <AppButton text="Launch App" />
      </div>
    </div>
  );
};

export default DashboardNavbar;
