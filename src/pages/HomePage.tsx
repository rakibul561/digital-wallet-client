import { HeroSection } from "@/modules/HeroSection";
import { FAQPage } from "./FAQPage";
import ContactPage from "./ContactPage";
import PublicUser from "./PublicUser";

const HomePage = () => {
    return (
        <div>
            
            <HeroSection/>
            <FAQPage/>
            <PublicUser/>
            <ContactPage/>
        </div>
    );
};

export default HomePage;