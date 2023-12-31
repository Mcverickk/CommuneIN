import { useContractWrite } from 'wagmi'
import { CONTRACT_ABI } from './ABI';
import PasskeyLogin from "../components/PasskeyLogin";
import {ethers} from 'ethers';

const MintHook = () => {

  const {verifyPasskey} = PasskeyLogin();
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: '0x791D0E22837AF9b69A1EC1478fEF9201de29626D',
    abi: CONTRACT_ABI,
    functionName: 'safeMint',
    args: [1],
    value: ethers.utils.parseEther('0.01'),
    onSuccess(data) {
      alert(`Tx hash: ${data.hash}`)
      console.log('Success', data)
    },
  })

  const handleMint = async () => {
    const verify = await verifyPasskey();
    if(verify){
      write();
    }
  }
  return {handleMint};
};

export default MintHook;