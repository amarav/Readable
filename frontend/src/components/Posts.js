import React,{useEffect} from 'react'
import {useState,useSelector,useDispatch} from 'react-redux'
import {getAllPosts} from '../actions'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Posts = (props) => {
  const dispatch = useDispatch()
  const Posts = useSelector(state => state.posts)
  useEffect(() => {
     dispatch(getAllPosts(),[])
  })
  console.log('Posts')
  console.log(Posts)
  return(
      <div>
          Posts:
          &nbsp; &nbsp;
    <div style={{display: 'inline-flex'}}>                
        <Button style={{marginRight: 10, backgroundColor: '#78bcc4', border: 'none'}}>
            <Link style={{color:'#f7f8f3'}} to='/'>All</Link>
        </Button> &nbsp; 
        {Posts && Posts.map((post, index) => (                
        <Button style={{marginRight: 10, backgroundColor: '#78bcc4', border: 'none'}} key={index}>
            {post.title}
        </Button>
    ))}
    </div>

      </div>
  )
}

export default Posts