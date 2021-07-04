import version_control from '../../images/version_control.svg'
import usage_analytics from '../../images/usage_analytics.svg'
import server_security from '../../images/server_security.svg'



export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'One Account, Access Anywhere',
    description: 'Store, share, and collaborate on files and folders from any mobile device, tablet, or computer\n',
    buttonLabel: 'Get started',
    imgStart: false,
    img: version_control,
    alt: 'Financial',
    dark: true,
    primary: true,
    darkText: false,
}

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'No Extra Charges',
    headline: 'Pay As You Download',
    description: 'Free uploading service are provided. We only charged for downloading traffic.',
    buttonLabel: 'Get started',
    imgStart: true,
    img: usage_analytics,
    alt: 'Financial',
    dark: true,
    primary: true,
    darkText: true,
}

export const homeObjThree = {
    id: 'services',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: '24/7 Technical Support',
    headline: 'Professional Security Advice and Information',
    description: 'Help your team move faster with a secure cloud-based collaboration platform that makes it easy for you to share, store, and access files.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: server_security,
    alt: 'Financial',
    dark: true,
    primary: true,
    darkText: true,
}




