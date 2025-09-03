import App from "@/App";
import DashBoardLayout from "@/layout/DashboardLayout";
import Login from "@/layout/Login";
import Register from "@/layout/Register";
import About from "@/pages/about/About";
import ContactPage from "@/pages/ContactPage";
import FeaturesPage from "@/pages/FeaturesPage";
import HomePage from "@/pages/HomePage";
import PricingPage from "@/pages/PricingPage";
import Unauthorized from "@/pages/Unauthrize";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSlidebar";
import { generateRoutes } from "@/utlis/generateRoute";
import { agentSidebarItems } from "./agentSlidebar";
import { userSidebarItems } from "./userSlidebar";
import { withAuth } from "@/utlis/withAuth";
import { role } from "@/constant/role";
import type { TRole } from "@/types";
import FAQPage from "@/pages/FAQPage";

 

 export const router = createBrowserRouter([
   {
     Component: App,
     path: '/', 
     children: [
        {
            Component: HomePage,
            path: '/'
        },
        {
            Component:About,
            path: '/about'
        },
        {
            Component: FeaturesPage,
            path: '/features'
        },
        {
            Component: FAQPage,
            path: '/faq'
        },
        {
            Component: ContactPage,
            path: '/contact'
        },
        {
            Component: PricingPage,
            path: '/pricing'
        },
        {
            Component: Unauthorized,
            path: '/unauthorized'
        },

     ]
     
   },
     
   { 
    Component:withAuth(DashBoardLayout, role.admin as TRole),
    path:'/admin',
    children: [
      {index:true , element:<Navigate to="/admin/analytices" />},

      ...generateRoutes(adminSidebarItems)
    ]

   } ,
 
   { 
    Component:withAuth(DashBoardLayout, role.agent as TRole),
    path:'/agent',
    children: [
       {index:true , element:<Navigate to="/agent/profile" />},
      ...generateRoutes(agentSidebarItems)
    ]

   } ,
   { 
    Component:withAuth(DashBoardLayout, role.user as TRole),
    path:'/user',
    children: [
      {index:true , element:<Navigate to="/user/profile" />},
      ...generateRoutes(userSidebarItems)
    ]
   } ,



   {
    Component: Register,
    path: '/register'
   },
   {
    Component: Login,
    path: '/login'
   }
  
 ])