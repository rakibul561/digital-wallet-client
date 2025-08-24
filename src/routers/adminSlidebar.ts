
import AllTransaction from "@/pages/admin/AllTransaction";
import type { ISidebar } from "@/types";
import { lazy } from "react";

 

const  Analytices = lazy(()=> import ("@/pages/admin/Analytices"))

export const adminSidebarItems:ISidebar[] = [
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