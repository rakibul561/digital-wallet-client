import { useAllTransactionQuery } from "@/redux/features/wallets/wallet.api";
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Loading from "@/loading";

const AllTransaction = () => {
  const { data, isLoading } = useAllTransactionQuery(undefined);


  if (isLoading) return <Loading />;

  const transactions = data?.data || [];

  return (
    <div className="p-4 border ">
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
                {/* Date */}
                <TableCell>
                  {new Date(tx.createdAt).toLocaleString()}
                </TableCell>

                {/* Type */}
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      tx.type === "CASH_IN"
                        ? "text-green-700 bg-green-100"
                        : tx.type === "WITHDRAW"
                        ? "text-red-700 bg-red-100"
                        : "text-blue-700 bg-blue-100"
                    }`}
                  >
                    {tx.type}
                  </span>
                </TableCell>

                {/* User */}
                <TableCell>{tx?.userId?.name || "N/A"}</TableCell>

                {/* Wallet */}
                <TableCell>{tx?.walletId?._id || "N/A"}</TableCell>

                {/* Amount */}
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

export default AllTransaction;
