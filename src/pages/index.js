import { useEffect, useState } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import LoginModal from "../components/LoginModal";


// Use the Country Identity hook to get the status of the user.
export default function Home() {

  return (
    <>
      <LoginModal/>
    </>
  );
}