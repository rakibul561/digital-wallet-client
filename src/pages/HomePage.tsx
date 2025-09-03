import { HeroSection } from "@/modules/HeroSection";
import PublicUser from "./PublicUser";
import FAQPage from "./FAQPage";

const HomePage = () => {
    return (
        <div>
            
            <HeroSection/>
            <PublicUser/>
            <FAQPage/>
            
        </div>
    );
};

export default HomePage;