import React, { useState } from 'react';
import styles from '../styles/LoginModal.module.css'; // Import the CSS file
import { ConnectButton } from '@rainbow-me/rainbowkit';
import AadharLogin from "./AadharLogin";
import PasskeyLogin from "./PasskeyLogin";


const LoginModal = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const {LogInWithAnonAadhaar, aadhaarVerified} = AadharLogin();
  const {RegisterPasskeyButton, VerifyPasskeyButton, verifyPasskey, passkeyRegistered, passkeyVerified} = PasskeyLogin();

  return (<>
    <ConnectButton showBalance={false} chainStatus="none"/>
    <br />
    {!passkeyRegistered && <LogInWithAnonAadhaar />}
    <br />
    {aadhaarVerified && !passkeyRegistered && <RegisterPasskeyButton/>}
    <br />
    {passkeyRegistered && <VerifyPasskeyButton/>}
    <br/>
    {passkeyVerified && <p>Verified Passkey ✅</p>}
  </>)
};

export default LoginModal;
