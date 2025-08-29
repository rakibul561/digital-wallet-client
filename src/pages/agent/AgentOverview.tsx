/* eslint-disable @typescript-eslint/no-explicit-any */
import { useHistoryQuery } from "@/redux/features/wallets/wallet.api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Loading from "@/loading";

const AgentHistory = () => {
  const { data, isLoading } = useHistoryQuery(undefined);
  console.log(data)
  const transactions = data?.data?.data || [];

  if (isLoading) {
    return <Loading/>
  }

  return (
    <div className="p-4 lg:mx-20">
      <Table>
        
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Wallet</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.length > 0 ? (
            transactions.map((tx: any) => (
              <TableRow key={tx._id}>
                <TableCell>
                  {new Date(tx.createdAt).toLocaleString()}
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      tx.type === "CASH_IN"
                        ? "text-red-700"
                        : " text-red-700"
                    }`}
                  >
                    {tx.type}
                  </span>
                </TableCell>
                <TableCell>{tx.userId}</TableCell>
                <TableCell>{tx.walletId}</TableCell>
                <TableCell className="text-right font-bold">
                  ${tx.amount}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center text-gray-500 py-4">
                No transactions found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AgentHistory;
