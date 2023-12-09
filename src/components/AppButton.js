import { ConnectButton } from '@rainbow-me/rainbowkit';

const AppButton = () => {
  return (
    <ConnectButton showBalance={false} chainStatus="none"/>
  );
};

export default AppButton;