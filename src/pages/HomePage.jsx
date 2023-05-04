import React from 'react';
import ChefInfoCard from "../component/ChefInfoCard.jsx";
import HeroSection from "../component/homePage/HeroSection.jsx";
import GuildSection from "../component/homePage/GuildSection.jsx";
import PartnersSection from "../component/homePage/PartnersSection.jsx";

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <ChefInfoCard />
            <GuildSection />
            <PartnersSection />
        </div>
    );
};

export default HomePage;