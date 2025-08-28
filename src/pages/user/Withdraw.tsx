import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useWalletQuery } from "@/redux/features/wallets/wallet.api";
import { data } from "react-router";

const Withdraw = () => {
  const { data: userInfo } = useUserInfoQuery(undefined);
  const walletId = userInfo?.data?.walletId;
  console.log(walletId);
  const {
    data: walletData,
    isLoading,
    isError,
  } = useWalletQuery(walletId!, {
    skip: !walletId,
  });

 const wallet = walletData?.data;

  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-xl shadow-md flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Digital Wallet</h3>
          <p className="text-3xl font-bold mt-2">${wallet?.balance}</p>
          <p className="text-sm mt-1">
            Wallet ID: {wallet?.id?.slice(0, 6)}...{wallet?.id?.slice(-6)}
          </p>
        </div>
        <span className="px-3 py-1 bg-green-500 text-sm rounded-full">
          ACTIVE
        </span>
      </div>
    </div>
  );
};

export default Withdraw;
