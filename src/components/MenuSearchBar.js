  import styled from 'styled-components'
  import loupe from '../img/loupe.svg'

  const StyledSearchBar = styled.form`
  width:max-content;
  margin:0 auto;
  position:relative;
  `;
  const SearchInput = styled.input`
  position:relative;
  width:200px;
  padding: 8px;
  padding-left: 15px;
  border-radius: 15px;
  outline: none;
  box-shadow: ${props => props.theme.lightBoxShadow};
  transition: all 0.5s ease;
  border:2px solid #808080;
  margin-left: -6px;
  position: relative;
  &:focus{
    width:250px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);

  }
  &::placeholder {
      font-size: 14px;

  }
  &:focus + div{
    margin-left: 210px;

  }
  &::-webkit-search-cancel-button{
    display:none;
  }
  `;
  const SerchIconeWrapper = styled.div`
  width:30px;
  height:30px;
  position:absolute;
  margin-top:-34px;
  margin-left: 160px;
  transition: all 0.5s ease;
  transform:scale(0.7);
  `
  const SearchIcone = styled.img`
  height: 100%;
  `;
  export default function SearchBar({setSearch ,placeholder,defaultValue}){

  const resetFilter = (e) =>{
    if(e.target.value ===""){
  setSearch("")
    }
  }

  const handelSubmit = (e) =>{
  e.preventDefault()

    let searchString = e.target?.search?.value
  setSearch(searchString)
  }
    return(
  <StyledSearchBar onSubmit={handelSubmit}>
    <SearchInput name="search"  defaultValue={defaultValue || ""}placeholder={placeholder || 'Search...'} type="search" onChange={resetFilter}/>
    <SerchIconeWrapper ><SearchIcone src={loupe} alt="search"/></SerchIconeWrapper>
  </StyledSearchBar>
    );

  }