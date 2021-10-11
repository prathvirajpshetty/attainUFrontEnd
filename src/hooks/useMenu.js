import { useEffect, useState} from 'react'
import {useHistory,useLocation} from 'react-router-dom'
import {useStorage} from '../context/useStorage'



export default function useMenu(){
  const history = useHistory()
  const location = useLocation()
  // const {categories} = useStorage()
  // let populatedCategories = categories?.filter(category => category?.quantity > 0)
  
  
  let sizeLimit = 6
  let activeProducts = true
  
  const [oldQuery, setOldQuery] = useState( new URLSearchParams(location.search))
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [sorting, setSorting] = useState(oldQuery.get('sort')||"-createdAt")
  const [title, setTitle] = useState(oldQuery.get('title')|| "")
  const [isFirstRender, setIsFirstRender] = useState(true)
  
  let query ;
  
  if(isFirstRender){
    query = new URLSearchParams(oldQuery.toString())
    
  }else{
    query = new URLSearchParams() ;
    query.append('active', activeProducts)
    query.append('sort', sorting)
    query.append('limit', sizeLimit)
  }
  
  useEffect(() => {
    if (title !== "") {
      query.append('title', title)
      setSorting('-createdAt')
    }
  }, [sorting,title])
  
  
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    setIsLoading(true)
    const fechProducts = async () => {
        let res = await fetch(`/api/products?${query}`, { signal, })
        let json = await res.json()
        setProducts(json.data)
        setIsLoading(false)
        setIsFirstRender(false)
        return history.push(`/menu?${query}`)
    }
    fechProducts()
    return () => {
      controller.abort()
    }
  }, [title,sorting])
  return {isLoading, products, setSorting,setTitle,isFirstRender,sorting,title}
}