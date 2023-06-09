import React from 'react';
import Slider from '../HomePages/Slider';
import PopularInstructors from '../HomePages/PopularInstructors';
import ExtraSection from '../HomePages/ExtraSection';
import PopularClasses from '../HomePages/PopularClasses';

const Home = () => {
    return (
       <div className='container mx-auto'>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <ExtraSection></ExtraSection>
       </div>
            
  
    );
};

export default Home;