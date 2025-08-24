/* eslint-disable @typescript-eslint/no-explicit-any */
import { role } from "@/constant/role";
import { adminSidebarItems } from "@/routers/adminSlidebar";
import { agentSidebarItems } from "@/routers/agentSlidebar";
import { userSidebarItems } from "@/routers/userSlidebar";

 

 export const getSidebarItems = (userRole:any) =>{
     
    
    switch (userRole) {
        case role.admin :
          return [...adminSidebarItems]
        case role.agent :
          return [...agentSidebarItems]
        case role.user :
          return [...userSidebarItems]
    
        default:
            return [];
    }

 }