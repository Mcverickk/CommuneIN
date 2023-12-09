import { useAnonAadhaar, LogInWithAnonAadhaar, AnonAadhaarProof } from "anon-aadhaar-react";
import { useEffect, useState } from "react";

const AadharLogin = () => {
  const [anonAadhaar] = useAnonAadhaar();
  const [aadhaarVerified, setAadhaarVerified] = useState(false);

  useEffect(() => {
    if(anonAadhaar.status === "logged-in"){
      setAadhaarVerified(true);
    } else{
      setAadhaarVerified(false);
    }
  }, [anonAadhaar]);

  return {LogInWithAnonAadhaar, aadhaarVerified}
}

export default AadharLogin;