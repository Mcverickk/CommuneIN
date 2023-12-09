import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import AppButton from "./AppButton";

const HomeNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <img className={styles.logo} src="logo.png" />
      </Link>
      <ul className={styles.navlist}>
        <li className={styles.navlistitem}></li>
        <li className={styles.navlistitem}>
          <a
            className={styles.navText}
            href="https://github.com/Mcverickk/box-protocol-contracts"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li className={styles.navlistitem}>
          <AppButton text="Launch App" />
        </li>
      </ul>
    </nav>
  );
};

export default HomeNavbar;