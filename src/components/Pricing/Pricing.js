import {Fragment} from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Container,
    makeStyles,
    Typography,
    Grid,
    CssBaseline
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/StarBorder';


const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(3),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(6),
        },
    },
}));

const tiers = [
    {
        title: 'Free',
        price: '0',
        description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
    },
    {
        title: 'Pro',
        subheader: 'Most popular',
        price: '15',
        description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
        ],
        buttonText: 'Get started',
        buttonVariant: 'contained',
    },
    {
        title: 'Enterprise',
        price: '30',
        description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },
];

export default function Pricing() {
    const classes = useStyles();

    return (
        <div id="pricing">
            <Fragment>
                <CssBaseline/>
                {/* Hero unit */}
                <Container maxWidth="sm" component="main" className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Pricing
                    </Typography>

                </Container>
                {/* Hero unit */}

                <Container maxWidth="md" component="main">
                    <Grid container spacing={5} alignItems="flex-end">
                        {tiers.map((tier) => (
                            // Enterprise card is full width at sm breakpoint
                            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                                <Card>
                                    <CardHeader
                                        title={tier.title}
                                        subheader={tier.subheader}
                                        titleTypographyProps={{align: 'center'}}
                                        subheaderTypographyProps={{align: 'center'}}
                                        action={tier.title === 'Pro' ? <StarIcon/> : null}
                                        className={classes.cardHeader}
                                    />
                                    <CardContent>
                                        <div className={classes.cardPricing}>
                                            <Typography component="h2" variant="h3" color="textPrimary">
                                                ${tier.price}
                                            </Typography>
                                            <Typography variant="h6" color="textSecondary">
                                                /mo
                                            </Typography>
                                        </div>
                                        <ul>
                                            {tier.description.map((line) => (
                                                <Typography component="li" variant="subtitle1" align="center"
                                                            key={line}>
                                                    {line}
                                                </Typography>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardActions>
                                        <Button fullWidth variant={tier.buttonVariant} color="primary">
                                            {tier.buttonText}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Fragment>
        </div>
    );
}
