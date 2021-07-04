import React from 'react';
import {ServicesContainer, ServicesIcon, ServicesCard, ServicesH1, ServicesH2, ServicesP, ServicesWrapper} from './ServicesElements'
import Icon1 from '../../images/two_factor_auth.svg'
import Icon2 from '../../images/safety.svg'
import Icon3 from '../../images/push_noti.svg'

const Services = () => {
    return (
<>
<ServicesContainer id="services">
    <ServicesH1>Our Services</ServicesH1>
    <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Multi Platform Support</ServicesH2>
            <ServicesP>Android, IOS, Web are supported</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Data Encryption</ServicesH2>
            <ServicesP>All documents in the server are Encrypted.</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Notification</ServicesH2>
            <ServicesP>Generate Daily Report for All Users</ServicesP>
        </ServicesCard>
    </ServicesWrapper>
</ServicesContainer>
</>
    );
};

export default Services;
