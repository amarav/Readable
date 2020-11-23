import React from 'react'
import { getCategories } from '../actions'
import {useDispatch,useSelector} from 'react-redux'
import {    getCategoriesAPI, } from '../utils'

const Categories = () => 
{
   const dispatch = useDispatch()
   const categories = useSelector(state => state.categories)
   
  
    React.useEffect(() => {
      dispatch(getCategories())             
    }, [])
  console.log('hello')
  console.log(categories)
  return(
  <div>
    Categories
  </div>
  );
}

export default Categories