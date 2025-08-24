
import AgentOverview from "@/pages/agent/AgentOverview";
import CashIn from "@/pages/agent/CashIn";
import CashOut from "@/pages/agent/CashOut";
import type { ISidebar } from "@/types";


export const agentSidebarItems:ISidebar[] = [
    {
      title: "Dashboard",
      items:[
        {
           title: "Overview",
           url: "/agent/overview",
           component: AgentOverview
        }
      ]
    },
    {
      title: "ADD money",
      items:[
        {
           title: "CashIn",
           url: "/agent/cash-in",
           component: CashIn
        }
      ]
    },
    {
      title: "Deposit Money",
      items:[
        {
           title: "CashOut",
           url: "/agent/cash-out",
           component: CashOut
        }
      ]
    },
   
  
  ]