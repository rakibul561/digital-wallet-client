import App from "@/App";
import Login from "@/layout/Login";
import Register from "@/layout/Register";
import About from "@/pages/About";
import ContactPage from "@/pages/ContactPage";
import FAQPage from "@/pages/FAQPage";
import FeaturesPage from "@/pages/FeaturesPage";
import HomePage from "@/pages/HomePage";
import PricingPage from "@/pages/PricingPage";
import { createBrowserRouter } from "react-router";

 

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

     ]
     
   },
   {
    Component: Register,
    path: '/register'
   },
   {
    Component: Login,
    path: '/login'
   }
  
 ])