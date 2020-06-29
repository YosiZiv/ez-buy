import Head from 'next/head';


import axios from 'axios';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useForm } from "react-hook-form";


const useStyles = makeStyles( ( theme ) => ( {
    paper: {
        marginTop: theme.spacing( 8 ),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing( 1 ),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing( 1 ),
    },
    submit: {
        margin: theme.spacing( 3, 0, 2 ),
    },
} ) );
export default function Login()
{
    const { handleSubmit, register, errors } = useForm();
    const classes = useStyles();

    const onSubmit = values =>
    {
        console.log( values );

    };
    return (
        <Container component="main" maxWidth="xs">
            <Head>
                <title>ezbuy | עמוד התחברות</title>
            </Head>
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    התחבר
        </Typography>
                <form onSubmit={handleSubmit( onSubmit )} className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="כתובת מייל"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        inputRef={register( {
                            required: 'דואר אולקטורני הוא שדה חובה',
                            minLength: {
                                value: 2,
                                message: 'דואר אלקטרוני חייב להכיל לפחות 2 תווים',
                            },
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'כתובת דואר אלקטורני לא תקינה'
                            }
                        } )}
                    />
                    <span className="errorMessage">
                        {errors.email && errors.email.message}
                    </span>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="סיסמא"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        inputRef={register( {
                            required: 'שם פרטי שדה חובה',
                            minLength: {
                                value: 6,
                                message: 'סיסמא חייבת להכיל לפחות 6 תווים'
                            }
                        } )}
                    />
                    <span className="errorMessage">
                        {errors.password && errors.password.message}
                    </span>
                    <br />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="תיזכור אותי"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        התחבר
          </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                שחכת סיסמא?
              </Link>
                        </Grid>
                        <Grid item>
                            <Link href="http://localhost:3000/auth/register" variant="body2">
                                {"אינך רשום עדין? התחבר כעת!"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
            </Box>
        </Container>
    );

}