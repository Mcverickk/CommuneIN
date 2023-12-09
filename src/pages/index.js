import React, { useEffect, useState } from 'react';
import HomeNavbar from "../components/HomeNavbar";
import styles from "../styles/Home.module.css";
import GlowingButton from "../components/GlowingButton";
import AadharLogin from "../components/AadharLogin";
import PasskeyLogin from "../components/PasskeyLogin";


export default function Home() {
  const {LogInWithAnonAadhaar, aadhaarVerified} = AadharLogin();
  const {RegisterPasskeyButton, passkeyRegistered} = PasskeyLogin();


  return (
    <>
      <div className={styles.background}>
        <HomeNavbar />
        <div className={styles.body}>
          <div className={styles.textArea}>
            <h4 className={styles.maintext}>
              CommuneIN <br/>
            </h4>
            {/* <p className={styles.detailText}>India's Premier Community for ICOs, Grants and Fund Distribution</p> */}
            <p className={styles.detailText}>
            Welcome to an exclusive community tailored for Indian citizens,<br/> a vibrant launchpad propelling you into cutting-edge Web3 opportunities.
            </p>
            <GlowingButton />
          </div>
          <div className={styles.imgArea}>
            <div className={styles.card}>
              <h2 className={styles.signup}>Sign Up with Aadhar</h2>
              <br />
              <h3 className={styles.steps}>Step 1: Verify your Aadhar</h3>
              <LogInWithAnonAadhaar />
              <br />
              <h3 className={styles.steps}>Step 2: Register your Passkey</h3>
              <RegisterPasskeyButton aadhaarVerified={aadhaarVerified}/>
              <br />
              {aadhaarVerified && passkeyRegistered && <p>Registered Passkey ✅</p>}
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <p className={styles.footerText}>
            Made with passion & 🎧
          </p>
        </footer>
      </div>
    </>
  );
}