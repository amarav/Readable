import React from 'react'
import { getCategories } from '../actions'
import {useDispatch,useSelector} from 'react-redux'
import {    getCategoriesAPI, } from '../utils'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Categories = () => 
{
   const dispatch = useDispatch()
   const categories = useSelector(state => state.categories)
   
  
    React.useEffect(() => {
      dispatch(getCategories())             
    }, [])
  console.log(categories)
  return(
  <div> Categories:&nbsp; &nbsp;
    <div style={{display: 'inline-flex'}}>                
        <Button style={{marginRight: 10, backgroundColor: '#78bcc4', border: 'none'}}>
            <Link style={{color:'#f7f8f3'}} to='/'>All</Link>
        </Button> &nbsp; 
        {categories && categories.map((category, index) => (                
        <Button style={{marginRight: 10, backgroundColor: '#78bcc4', border: 'none'}} key={index}>
            <Link style={{color:'#f7f8f3'}} to={`/${category.path}`}>{category.name}</Link>
        </Button>
        
    ))}
    </div>
</div>
  );
}

export default Categories