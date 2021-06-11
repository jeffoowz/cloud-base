import wallet from '../../images/wallet.svg'
import digital_currency from '../../images/digital_currency.svg'
import invest from '../../images/investing.svg'
import financial from '../../images/financial.svg'


export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Big Data Analyses Assisting Investment Decisions',
    description: 'Various features include brokerage position tracking, stock indicator analysis, smart stock tracking, stock screener tools, K-line trends, and big data applications.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: wallet,
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
    headline: 'Unlimited Transactions with Zero Fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get started',
    imgStart: true,
    img: digital_currency,
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
    topLine: 'Up-To-Date News',
    headline: 'Professional Financial News and Information with Instant Updates 24/7',
    description: 'Global financial news and analyses of stock price fluctuations help investors closely monitor stock market trends.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: financial,
    alt: 'Financial',
    dark: true,
    primary: true,
    darkText: true,
}




