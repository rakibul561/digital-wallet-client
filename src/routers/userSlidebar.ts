
import UserView from "@/pages/user/UserView";
import type { ISidebar } from "@/types";


export const userSidebarItems:ISidebar[] = [
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