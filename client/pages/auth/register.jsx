// @ts-nocheck
import { useState } from "react";
import Router from 'next/router';
import Head from "next/head";
import axios from "axios";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import FileUpload from "../../components/FileUpload";
import useRequest from "../../hooks/useRequest";

const useStyles = makeStyles( ( theme ) => ( {
  paper: {
    marginTop: theme.spacing( 8 ),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing( 1 ),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing( 3 ),
  },
  submit: {
    margin: theme.spacing( 3, 0, 2 ),
  },
} ) );

export default function Register()
{
  const { doRequest, requestErrors } = useRequest( {
    url: "/api/users/signup",
    method: "post",
    onSuccess: ( response ) =>
    {
      console.log( response );
      Router.push( '/auth/login' );
    },
  } );
  const [imgUrl, setImgUrl] = useState( "" );
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = ( values ) =>
  {
    console.log( values );
    doRequest( values );
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Head>
        <title>ezbuy | עמוד הרשמה</title>
      </Head>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          הירשם
        </Typography>
        <form
          onSubmit={handleSubmit( onSubmit )}
          className={classes.form}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                fullWidth
                id='firstName'
                label='שם פרטי'
                autoFocus
                inputRef={register( {
                  required: "שם פרטי שדה חובה",
                  minLength: {
                    value: 2,
                    message: "שם משפחה חייב להכיל לפחות 2 תווים",
                  },
                } )}
              />
              <span className='errorMessage'>
                {errors.firstName && errors.firstName.message}
              </span>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                fullWidth
                id='lastName'
                label='שם משפחה'
                name='lastName'
                autoComplete='lname'
                inputRef={register( {
                  required: "שם משפחה הוא שדה חובה",
                  minLength: {
                    value: 2,
                    message: "שם משפחה חייב להכיל לפחות 2 תווים",
                  },
                } )}
              />
              <span className='errorMessage'>
                {errors.lastName && errors.lastName.message}
              </span>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                fullWidth
                id='email'
                label='כתובת מייל'
                name='email'
                autoComplete='email'
                inputRef={register( {
                  required: "דואר אולקטורני הוא שדה חובה",
                  minLength: {
                    value: 2,
                    message: "דואר אלקטרוני חייב להכיל לפחות 2 תווים",
                  },
                  pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "כתובת דואר אלקטורני לא תקינה",
                  },
                } )}
              />
              <span className='errorMessage'>
                {errors.email && errors.email.message}
              </span>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                fullWidth
                id='address'
                label='כתובת '
                name='address'
                autoComplete='address'
                inputRef={register( {
                  required: "כתובת היא שדה חובה",
                } )}
              />
              <span className='errorMessage'>
                {errors.address && errors.address.message}
              </span>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                fullWidth
                id='phone'
                label='מספר טלפון'
                name='phone'
                autoComplete='phone'
                inputRef={register( {
                  required: "טלפון הוא שדה חובה",
                  minLength: {
                    value: 9,
                    message: "טלפון חייב להכיל לפחות 9 ספרות",
                  },
                } )}
              />
              <span className='errorMessage'>
                {errors.phone && errors.phone.message}
              </span>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='סיסמא'
                type='password'
                id='password'
                autoComplete='current-password'
                inputRef={register( {
                  required: "סיסמא הוא שדה חובה",
                  minLength: {
                    value: 6,
                    message: "סיסמא חייבת להכיל לפחות 6 תווים",
                  },
                } )}
              />
              <span className='errorMessage'>
                {errors.password && errors.password.message}
              </span>
            </Grid>
            <Grid item xs={12}>
              <FileUpload
                id='companyLogo'
                name='Company Logo'
                required
                defaultValue='userAvatar'
                uploadComplete={( { id, value } ) =>
                {
                  console.log( id, value );
                  setImgUrl( value );
                }}
                text='תמונת פרופיל'
              />
              {imgUrl !== "" && (
                <div>
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={imgUrl}
                  />
                </div>
              )}
              <input
                name='imgUrl'
                ref={register( {} )}
                style={{ display: "none" }}
                type='text'
                value={imgUrl}
                onChange={() => { }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value='allowExtraEmails' color='primary' />}
                label='אני מעוניין לקבל  עידכונים ותוכן שיווקי לכתובת מייל הזו'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            הירשם
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link href='#' variant='body2'>
                משתמש רשום? היכנס כעת!
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
