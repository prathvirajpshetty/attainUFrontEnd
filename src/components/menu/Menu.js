import styled from 'styled-components'
import ProductsSectionSkeleton from '../ProductsSectionSkeleton'
import useMenu from '../../hooks/useMenu'
import SearchBar from '../MenuSearchBar'
import SortProductsOptions from '../SortProductsOptions'
import  ProductsSectionComponent from './ProductsSection'
import { CircularProgress, Grid } from '@material-ui/core'


export const ProductsSection = styled.div`
&:before{
  display: ${props => props.isLoading ? 'block' : 'none'};
  position:absolute;
  content:" ";
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:#ffffff57;
  z-index:400;
}
width: 100%;
gap: 30px;
display: grid;
padding: 0 15px 30px;
grid-template-columns: repeat( auto-fit,minmax(250px,300px) );
max-width: 1000px;
margin: 0 auto;
justify-content: center;

`;
export const NotFaundMessage = styled.h4`
margin-top: 20px;
display:block;
width:100%;
`;

const FiltersBoard = styled.div`
flex-wrap: wrap;
margin: 0 15px 20px;
display: flex;
align-items: center;
max-width: max-content;
& > select {
  margin: 0 10px 10px 0;
  
}

`;

function Menu() {
  
  const {isLoading, maxPage, products,populatedCategories,sorting,page,setPage, setSorting,setTitle,isFirstRender,category,title} = useMenu()
  
  
  return (
    <Grid container justify='center'>
      <Grid item xs={12}>
        <SearchBar setSearch={setTitle}  defaultValue={title}/>
        <Grid item>
          <SortProductsOptions defaultValue={sorting} setSortPreferece={setSorting} sortPreference={sorting} />
        </Grid>
        {isLoading && <Grid container justify='center'><Grid item><CircularProgress /></Grid></Grid>}
        {(isLoading && isFirstRender)? <ProductsSectionSkeleton /> :
          <ProductsSectionComponent isLoading={isLoading} products={products}/>
        }
      </Grid>
    </Grid>);
    }
    
    export default Menu;