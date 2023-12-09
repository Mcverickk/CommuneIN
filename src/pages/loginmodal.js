import React, { useState } from 'react';
import styles from '../styles/LoginModal.module.css'; // Import the CSS file
import { ConnectButton } from '@rainbow-me/rainbowkit';


const LoginModal = () => {

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Connect your wallet</h2>
        <ConnectButton/>
        {/* <button className={styles.connectWallet}>Connect Wallet</button> */}
      </div>
    </div>
  );
};

export default LoginModal;
