"use client"

import { Card, CardContent } from "@/components/ui/card"
import Loading from "@/loading"
import { useUserDataQuery } from "@/redux/features/auth/auth.api"
import { useAllTransactionQuery } from "@/redux/features/wallets/wallet.api"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

const Analytics = () => {
  const { data: userData } = useUserDataQuery(undefined)
  const { data: transactionData, isLoading } = useAllTransactionQuery(undefined)

  if (isLoading) return <Loading />

  const totalUsers = userData?.data?.meta?.total ?? 0
  const allTransactionCount = transactionData?.data?.length ?? 0

  const transactions = transactionData?.data ?? []

  // Monthly Transaction aggregation
  const monthlyMap: Record<string, number> = {}
  transactions.forEach((txn) => {
    const date = new Date(txn.createdAt)
    const month = date.toLocaleString("default", { month: "short" })
    const year = date.getFullYear()
    const key = `${month} ${year}`
    if (!monthlyMap[key]) monthlyMap[key] = 0
    monthlyMap[key] += txn.amount ?? 0
  })
  const monthlyTransactions = Object.entries(monthlyMap).map(([month, amount]) => ({
    month,
    amount,
  }))

  // Wallet Distribution (sum per user)
  const walletMap: Record<string, number> = {}
  transactions.forEach((txn) => {
    const user = txn.senderId ?? "Unknown"
    if (!walletMap[user]) walletMap[user] = 0
    walletMap[user] += txn.amount ?? 0
  })
  const walletPie = Object.entries(walletMap).map(([name, value]) => ({ name, value }))

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Analytics Dashboard</h2>

      {/* Cards */}
      <div className="w-1/2 mx-auto grid grid-cols-2 gap-20">
        <Card>
          <CardContent>
            <h3 className="text-lg font-bold">Total Users</h3>
            <p className="text-2xl">{totalUsers}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="text-lg font-bold">Total Transactions</h3>
            <p className="text-2xl">{allTransactionCount}</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        {/* Monthly Transactions Bar Chart */}
        <Card>
          <CardContent>
            <h3 className="text-lg font-bold mb-2">Monthly Transactions</h3>
            <BarChart width={400} height={250} data={monthlyTransactions}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `$${value}`} />
              <Bar dataKey="amount" fill="#8884d8" />
            </BarChart>
          </CardContent>
        </Card>

        {/* Wallet Distribution Pie Chart */}
        <Card>
          <CardContent>
            <h3 className="text-lg font-bold mb-2">Wallet Distribution</h3>
            <PieChart width={400} height={250}>
              <Pie
                data={walletPie}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {walletPie.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `$${value}`} />
            </PieChart>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Analytics
