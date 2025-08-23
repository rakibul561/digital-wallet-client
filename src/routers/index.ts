import App from "@/App";
import DashBoardLayout from "@/layout/DashboardLayout";
import Login from "@/layout/Login";
import Register from "@/layout/Register";
import About from "@/pages/About";
import ContactPage from "@/pages/ContactPage";
import FAQPage from "@/pages/FAQPage";
import FeaturesPage from "@/pages/FeaturesPage";
import HomePage from "@/pages/HomePage";
import PricingPage from "@/pages/PricingPage";
import Unauthorized from "@/pages/Unauthrize";
import { createBrowserRouter } from "react-router";
import { adminSidebarItems } from "./adminSlidebar";
import { generateRoutes } from "@/utlis/generateRoute";

 

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
            Component: About,
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
    Component:DashBoardLayout,
    path:'/admin',
    children: [
      ...generateRoutes(adminSidebarItems)
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