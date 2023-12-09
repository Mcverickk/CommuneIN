import styles from "../styles/GlowingButton.module.css";
import Link from "next/link";
import { useRouter } from 'next/router';
import PasskeyLogin from "../components/PasskeyLogin";

const GlowingButton = () => {
  const router = useRouter();
  const {verifyPasskey} = PasskeyLogin();


  const handleLaunch = async () => {
    const verify = await verifyPasskey();
    if(verify){
      router.push('/launchpad');
    } else {
      alert("Verification Failed!")
    }
  }

  return (
    <div className={styles.root}>
      <button className={styles.glowingBtn} onClick={handleLaunch}>
        <span className={styles.glowingTxt}>Launch App</span>
      </button>
    </div>
  );
};

export default GlowingButton;