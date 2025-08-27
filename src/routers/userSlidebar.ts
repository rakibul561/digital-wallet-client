
import AddMoney from "@/pages/user/AddMoney";
import SendMoney from "@/pages/user/SendMoney";
import UserView from "@/pages/user/Wallet";
import Withdraw from "@/pages/user/Withdraw";
import type { ISidebar } from "@/types";


export const userSidebarItems:ISidebar[] = [
  
  {
    title: "History",
    items:[
      {
         title: "Wallets",
         url: "/user/wallets/balance",
         component: UserView
      }
    ]
  },
  {
    title: "ADD Money",
    items:[
      {
         title: "ADD Money",
         url: "/user/add-money",
         component: AddMoney
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
  
  ]