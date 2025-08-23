
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
      title: "Tour Managment",
      items:[
        //  {
        //    title: "Add TourType",
        //    url: "/admin/add-tour-types",
        //    component: AddTourType
        // },
        
        
       
      ]
    }, 
    
  
  ]