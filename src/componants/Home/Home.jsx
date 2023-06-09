import React from 'react';
import Slider from '../HomePages/Slider';
import PopularInstructors from '../HomePages/PopularInstructors';
import ExtraSection from '../HomePages/ExtraSection';

const Home = () => {
    return (
       <div className='container mx-auto'>
            <Slider></Slider>
            <PopularInstructors></PopularInstructors>
            <ExtraSection></ExtraSection>
       </div>
            
  
    );
};

export default Home;