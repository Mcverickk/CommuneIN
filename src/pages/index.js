import React, { useEffect, useState } from 'react';
import HomeNavbar from "../components/HomeNavbar";
import styles from "../styles/Home.module.css";
import GlowingButton from "../components/GlowingButton";
import AadharLogin from "../components/AadharLogin";
import PasskeyLogin from "../components/PasskeyLogin";


export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const {LogInWithAnonAadhaar, aadhaarVerified} = AadharLogin();
  const {RegisterPasskeyButton, VerifyPasskeyButton, verifyPasskey, passkeyRegistered, passkeyVerified} = PasskeyLogin();

  useEffect(() => {
    if(passkeyVerified){
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }

  },[passkeyVerified])

  return (
    <>
      <div className={styles.background}>
        <HomeNavbar />
        <div className={styles.body}>
          <div className={styles.textArea}>
            <h4 className={styles.maintext}>
              Invest in Web3 ideas,
              <br />
              with Box Protocol.
            </h4>
            <p className={styles.detailText}>
              Get in on the Web3 revolution with our easy, self-custodial way
              <br /> to invest in boxes representing the hottest ideas and
              sectors in Web3!
            </p>
            <GlowingButton />
          </div>
          <div className={styles.imgArea}>
            <div className={styles.card}>
              <h2>Sign Up</h2>
              <br />
              <h3>Step 1: Verify your Aadhar</h3>
              <LogInWithAnonAadhaar />
              <br />
              <h3>Step 2: Register your passkey</h3>
              <RegisterPasskeyButton />
              <br />
              {passkeyVerified && <p>Verified Passkey ✅</p>}
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <p className={styles.footerText}>
            Copyright &copy; 2023 Box Protocol
          </p>
        </footer>
      </div>
    </>
  );
}