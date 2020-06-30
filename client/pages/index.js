import { useEffect } from 'react';
import Head from 'next/head';

import Typing from '../components/Typing';


import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { setCurrentUserAction } from '../src/slices/authSlice';
import buildClient from '../api/build-client';
import { useDispatch } from 'react-redux';
const useStyles = makeStyles( ( theme ) => ( {
  root: {
    '& > *': {
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyItems: 'center',
      justifyContent: 'center',
    },

  },
} ) );

export default function Home( { currentUser = {} } )
{
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect( () =>
  {

    dispatch( setCurrentUserAction( { currentUser } ) );

  }, [] );
  return (
    <Container className={classes.root} maxWidth="sm">
      <Head>
        <title>ezbuy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container>
        <Grid item sm={12} md={8}>
          <br />
          <Typography style={{ fontWeight: '700', textShadow: '2px 1px grey' }} variant="h3" component="h1" gutterBottom>
            פתרון חברתי לשינוע משלוחים
        </Typography>
        </Grid>
        <Grid item sm={12} md={4}>
          <img style={{
            maxWidth: '100%',
            display: 'block',
            margin: '4vw auto',
          }} src="box.gif" alt="box gif" />
        </Grid>
      </Grid>
      <Grid container style={{ background: 'black' }}>
        <Grid item sm={12} md={4}>
          <img style={{
            maxWidth: '100%',
            display: 'block',
            margin: '4vw auto',
          }} src="car.png" alt="box gif" />
        </Grid>
        <Grid item sm={12} md={8}>
          <Typing />
          {/* <ReactTypingEffect
            text="            הרעיון הוא שינוע מוצרים מאזור לאזור על ידי יצירת מחלקות איסוף במתחמי קניות שונים בעיר
            איזורי לוקרים שאליהם יבוצע המשלוח על ידי משלוחנים שאוספים את המוצרים ומקבלים הנחיות לאיזה לוקרים להעביר אותם ולאיזה איזור ובכך לחסוך את עלות המשלוח וליצור חווית קניה יחודית ומהנה
       ."
          /> */}

        </Grid>
      </Grid>

    </Container>
  );
}

Home.getInitialProps = async ( context ) =>
{
  const client = buildClient( context );
  const { data } = await client.get( "/api/users/currentuser" );
  return data;
};