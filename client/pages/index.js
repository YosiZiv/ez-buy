import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles( ( theme ) => ( {
  root: {
    '& > *': {
      display: 'flex',
      textAlign: 'center',
    },

  },
} ) );

export default function Home()
{
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="sm">
      <Head>
        <title>ezbuy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container>
        <Grid item sm={12} md={8}>
          <br />
          <Typography variant="h4" component="h1" gutterBottom>
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

    </Container>
  );
}
