import { useEffect, useState } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import AadharLogin from "../components/AadharLogin";
import PasskeyLogin from "../components/PasskeyLogin";


// Use the Country Identity hook to get the status of the user.
export default function Home() {
  const {LogInWithAnonAadhaar, aadhaarVerified} = AadharLogin();
  const {RegisterPasskeyButton, VerifyPasskeyButton, verifyPasskey, passkeyRegistered, passkeyVerified} = PasskeyLogin();

  return (
    <>
      <div>
        <ConnectButton />
        <LogInWithAnonAadhaar />
      </div>
      {aadhaarVerified && <RegisterPasskeyButton/>}
      <br />
      {passkeyRegistered && <VerifyPasskeyButton/>}
      <br/>
      {passkeyVerified && <p>Verified Passkey ✅</p>}
    </>
  );
}