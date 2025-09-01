
import AllTransaction from "@/pages/admin/AllTransaction";
import AllUser from "@/pages/admin/AllUser";
import Profile from "@/pages/shared/Profile";
import type { ISidebar } from "@/types";
import { lazy } from "react";

 

const  Analytices = lazy(()=> import ("@/pages/admin/Analytices"))

export const adminSidebarItems:ISidebar[] = [
    {
      title: "Profile",
      items:[
        {
           title: "Profile",
           url: "/admin/profile",
           component: Profile
        }
      ]
    },
    {
      title: "Dashboard",
      items:[
        {
           title: "Analytices",
           url: "/admin/analytices",
           component: Analytices
        }
      ]
    },
    {
      title: "All Users",
      items:[
         {
           title: "All Users",
           url: "/admin/all-users",
           component: AllUser
        },
      ]
    }, 
    
    {
      title: "Transaction",
      items:[
         {
           title: "All Transaction",
           url: "/admin/transaction",
           component: AllTransaction
        },
      ]
    }, 
    
  
  ]