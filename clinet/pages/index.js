import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles( ( theme ) => ( {
  root: {
    '& > *': {
      margin: theme.spacing( 1 ),
      width: '25ch',
    },
  },
} ) );

export default function Home()
{
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Head>
        <title>איזיביי - מרכז העסקים </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography variant="h4" component="h1" gutterBottom>
        EZbuy - OpenData Hackathon
        </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    </Container>
  );
}
