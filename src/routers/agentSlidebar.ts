
import UserView from "@/pages/user/UserView";
import type { ISidebar } from "@/types";


export const agentSidebarItems:ISidebar[] = [
    {
      title: "History",
      items:[
        {
           title: "Booking",
           url: "/user/bookings",
           component: UserView
        }
      ]
    },
   
  
  ]