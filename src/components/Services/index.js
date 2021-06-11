import React from 'react';
import {ServicesContainer, ServicesIcon, ServicesCard, ServicesH1, ServicesH2, ServicesP, ServicesWrapper} from './ServicesElements'
import Icon1 from '../../images/feedback.svg'
import Icon2 from '../../images/growth_analytics.svg'
import Icon3 from '../../images/search.svg'

const Services = () => {
    return (
<>
<ServicesContainer id="services">
    <ServicesH1>Our Services</ServicesH1>
    <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Reduce Expenses</ServicesH2>
            <ServicesP>No Extra Commission Fee is Charged</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Virtual Offices</ServicesH2>
            <ServicesP>Accessible in Any Countries</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Reporting</ServicesH2>
            <ServicesP>Generate Daily Report for All Users</ServicesP>
        </ServicesCard>
    </ServicesWrapper>
</ServicesContainer>
</>
    );
};

export default Services;
