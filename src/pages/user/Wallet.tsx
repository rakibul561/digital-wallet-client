
import { useWalletQuery } from '@/redux/features/wallets/wallet.api';
import { useUserInfoQuery } from '@/redux/features/auth/auth.api';

const Wallet = () => {
  const { data: userInfo } = useUserInfoQuery(undefined);
  console.log(userInfo)
  const walletId = userInfo?.data?.walletId;
 console.log(walletId)
  const { data: walletData, isLoading, isError } = useWalletQuery(walletId!, {
    skip: !walletId, // walletId না থাকলে query skip হবে
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <div>
      <h2>Wallet Page</h2>
      {walletData && (
        <div>
          <p>Wallet ID: {walletData.data.id}</p>
          <p>User ID: {walletData.data.userId}</p>
          <p>Balance: {walletData.data.balance}</p>
          <p>Status: {walletData.data.status}</p>
        </div>
      )}
    </div>
  );
};

export default Wallet;
