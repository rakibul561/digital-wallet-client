import { HeroSection } from "@/modules/HeroSection";
import { FAQPage } from "./FAQPage";
import ContactPage from "./ContactPage";

const HomePage = () => {
    return (
        <div>
            
            <HeroSection/>
            <FAQPage/>
            <ContactPage/>
        </div>
    );
};

export default HomePage;