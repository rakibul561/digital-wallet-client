
import AgentOverview from "@/pages/agent/AgentOverview";
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
   
  
  ]