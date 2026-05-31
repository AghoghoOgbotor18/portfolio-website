import React, { useEffect } from 'react'
import ServicesHero from '../components/Service/ServicesHero';
import ServicesList from '../components/Service/ServicesList';
import ServicesProcess from '../components/Service/ServicesProcess';
import ServicesPricing from '../components/Service/ServicesPricing';
import ServicesFAQ from '../components/Service/ServicesFAQ';
import ServicesInquiry from '../components/Service/ServicesInquiry';

const Services = () => {
    useEffect(() => {
        scrollTo({top: 0, behavior: "smooth"})
    }, []);

    return (
        <main className='text-white min-h-screen'>
            <ServicesHero />
            <ServicesList />
            <ServicesProcess />
            <ServicesFAQ />
            <ServicesInquiry />
        </main>
    )
}

export default Services
