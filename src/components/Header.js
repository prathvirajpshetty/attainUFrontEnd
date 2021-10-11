import {Link} from 'react-router-dom'
import { Grid, Typography } from '@material-ui/core';

export default function Header(){
  return(
    <Grid container justify='center'>
      <Grid item style={{padding:'30px'}}>
        <Link to="/menu" style={{textDecoration:'none'}}>
          <Typography variant='h4'>
            My Food App
          </Typography>
        </Link>
      </Grid>
    </Grid>
      )
    }