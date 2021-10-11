import { Grid, MenuItem, Select } from '@material-ui/core';

export default function SortProductsOptions({setSortPreferece,defaultValue}){


return(
    <Grid container justify='center' style={{padding:20}}>
        <Grid item>
            <Select variant='outlined' name="sortProductBy" value={defaultValue} onChange={(e) => setSortPreferece(e.target.value)}>
                <MenuItem value="-createdAt" >Most recent</MenuItem>
                <MenuItem value="createdAt" >Older</MenuItem>
                <MenuItem value="price" >Lower First</MenuItem>
                <MenuItem value="-price" >Higher First</MenuItem>
                <MenuItem value="-sold" >Popular</MenuItem>
            </Select>
        </Grid>
    </Grid>
);
}