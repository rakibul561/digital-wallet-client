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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

const History = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useHistoryQuery({ page: currentPage });
  console.log(data)
  

  const transactions = data?.data?.data || [];
  console.log("hello ", transactions);
  const totalPage = data?.data?.totalPages || 1;



  return (
    <div className="p-4">
      <div className="border p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>From</TableHead>
              <TableHead>To</TableHead>
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
                          ? "text-yellow-700 bg-yellow-100"
                          : "text-blue-700 bg-blue-100"
                      }`}
                    >
                      {tx.type}
                    </span>
                  </TableCell>

                  {/* From */}
                  <TableCell>
                    {tx.type === "SEND_MONEY" ? tx.senderId : tx.userId}
                  </TableCell>

                  {/* To */}
                  <TableCell>
                    {tx.type === "SEND_MONEY" ? tx.receiverId : tx.walletId}
                  </TableCell>

                  {/* Amount */}
                  <TableCell className="text-right font-bold">
                    ${tx.amount}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center text-gray-500 py-4"
                >
                  No transactions found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {totalPage > 1 && (
        <div className="flex justify-end mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {Array.from({ length: totalPage }, (_, index) => index + 1).map(
                (page) => (
                  <PaginationItem
                    key={page}
                    onClick={() => setCurrentPage(page)}
                  >
                    <PaginationLink isActive={currentPage === page}>
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPage))
                  }
                  className={
                    currentPage === totalPage
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default History;
