import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { CONTRACT_ABI } from '../contracts/ABI';
import PasskeyLogin from "../components/PasskeyLogin";

const ClaimHook = () => {
  const {verifyPasskey} = PasskeyLogin();

  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: '0x791D0E22837AF9b69A1EC1478fEF9201de29626D',
    abi: CONTRACT_ABI,
    functionName: 'claim',
  })

  const handleClaim = async () => {
    const verify = await verifyPasskey();
    if(verify){
      write();
    }
  }

  return {handleClaim};
};

export default ClaimHook;