import { useWalletQuery } from "@/redux/features/wallets/wallet.api";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

const Wallet = () => {
  const { data: userInfo } = useUserInfoQuery(undefined);
  const walletId = userInfo?.data?.walletId;
  console.log(walletId)
  const { data: walletData, isLoading, isError } = useWalletQuery(walletId!, {
    skip: !walletId,
  });

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Something went wrong</p>;

  const wallet = walletData?.data;

  return (
    <div className="p-6 bg-[#f5f8ff] min-h-screen">
      <h2 className="text-2xl text-black font-bold mb-6">My Wallet</h2>

      {/* Top Card */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-xl shadow-md flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Digital Wallet</h3>
          <p className="text-3xl font-bold mt-2">${wallet?.balance}</p>
          <p className="text-sm mt-1">Wallet ID: {wallet?.id?.slice(0, 6)}...{wallet?.id?.slice(-6)}</p>
        </div>
        <span className="px-3 py-1 bg-green-500 text-sm rounded-full">ACTIVE</span>
      </div>

      {/* Available Balance */}
      <div className="mt-4 bg-white p-4 rounded-xl shadow flex justify-between items-center">
        <p className="text-gray-600">Available Balance</p>
        <p className="text-lg text-green-600  font-semibold">${wallet?.balance}</p>
      </div>

      {/* Wallet Status */}
      <div className="mt-4 bg-white p-4 rounded-xl shadow flex justify-between items-center">
        <p className="text-gray-600">Wallet Status</p>
        <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">
          {wallet?.status}
        </span>
      </div>

      {/* Account Created */}
      <div className="mt-4 bg-white p-4 rounded-xl shadow">
        <p className="text-gray-600">Account Created</p>
        <p className="text-sm text-gray-500">{wallet?.createdAt}</p>
      </div>

      {/* Wallet Details */}
      <div className="mt-6 bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4">Wallet Details</h3>
        <div className="space-y-3 text-sm text-gray-600">
          <p><strong>Wallet ID:</strong> {wallet?.id}</p>
          <p><strong>User ID:</strong> {wallet?.userId}</p>
          <p><strong>Balance:</strong> ${wallet?.balance}</p>
          <p><strong>Status:</strong> {wallet?.status}</p>
          <p><strong>Created At:</strong> {wallet?.createdAt}</p>
          <p><strong>Last Updated:</strong> {wallet?.updatedAt}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-3">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
          + Add Money
        </button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700">
          Send Money
        </button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900">
          Transaction History
        </button>
      </div>
    </div>
  );
};

export default Wallet;
