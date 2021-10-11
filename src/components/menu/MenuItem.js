import defaultImage from '../../img/default-image.png';
import { Grid, Typography } from '@material-ui/core'

function MenuItem(props){
  const item = props.item;    
  return(
    <Grid item container alignItems='center' direction='column' key={item._id} style={{border:'2px solid #808080'}}>
      <Grid item >
        <img style={{height:100, width:100}} src={defaultImage} alt={item.name}/>
      </Grid>
      <Grid item>
        <Typography>{item.name}</Typography>
      </Grid>
      <Grid item>
        <Typography>₹{item.price}</Typography>
      </Grid>    
    </Grid>
    );
  }
  
  export default MenuItem
