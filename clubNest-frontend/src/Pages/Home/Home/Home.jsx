import React from 'react';
import Hero from '../Hero/Hero';
import PopularCategories from '../PopularCategories/PopularCategories';
import Services from '../Services/Services';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';

const Home = () => {
    return (
        <div>
            <Hero>
            </Hero>
            <PopularCategories></PopularCategories>
            <Services></Services>
            <UpcomingEvents></UpcomingEvents>

        </div>
    );
};

export default Home;