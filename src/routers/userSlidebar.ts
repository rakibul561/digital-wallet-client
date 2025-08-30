
import History from "@/pages/user/History";
import SendMoney from "@/pages/user/SendMoney";
import UserView from "@/pages/user/Wallet";
import Withdraw from "@/pages/user/Withdraw";
import type { ISidebar } from "@/types";


export const userSidebarItems:ISidebar[] = [
  
  {
    title: "Acount",
    items:[
      {
         title: "Wallets",
         url: "/user/wallets/balance",
         component: UserView
      }
    ]
  },
  
  {
    title: "Send Money",
    items:[
      {
         title: "Send Money",
         url: "/user/send-money",
         component: SendMoney
      }
    ]
  },
  {
    title: "Withdraw Money",
    items:[
      {
         title: "Withdraw",
         url: "/user/withdraw",
         component: Withdraw
      }
    ]
  },
  {
    title: " History",
    items:[
      {
         title: "Transaction History",
         url: "/user/tran-history",
         component: History
      }
    ]
  },
  
  ]