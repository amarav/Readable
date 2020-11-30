import React,{useEffect} from 'react'
import {useState,useSelector,useDispatch} from 'react-redux'
import {getAllPosts,sortByTime,sortByVotes,votePost,deletePost} from '../actions'
import { ButtonGroup, Button, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as moment from 'moment'

export const getDate = (timestamp) => {
    const date = moment(timestamp)._d.toString().split(' ')
    return date[0] + ', ' + date[2] + ' ' + date[1] + ' ' + date[3]
  }

const Posts = (props) => {
  const [postsArray, setPostsArray] = React.useState([])
  const [applySort,setApplySort] = React.useState(false)
  const dispatch = useDispatch()
  const Posts = useSelector(state => state.posts)
  useEffect(() => {
    const fetchPosts = async () => {
       !applySort && await dispatch(getAllPosts(props.match.params.category),[])
       await setPostsArray(Posts)
    }
    fetchPosts()
  },[props.match.params.category])

  const sortBy = (option) => {
      let sortedPosts = postsArray.slice()
      option === 'votes' ? dispatch(sortByVotes(sortedPosts)): dispatch(sortByTime(sortedPosts))
      setApplySort(true)
  }

  const vote = async (id, option) => {
    await dispatch(votePost(id, option))
}

  const delete_post = (id) => {
    dispatch(deletePost(id))
}


  return(
      <div>

<Dropdown>
                <Dropdown.Toggle style={{backgroundColor: '#78bcc4', border: 'none'}}>
                    Sort By
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => sortBy('votes')}>Votes</Dropdown.Item>
                    <Dropdown.Item onClick={() => sortBy('time')}>Time</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> <br/>
                
          {Posts && Posts.map((post, index) => (                
            <div style={{
                    display: 'flex', 
                    justifyContent: 'space-between',
                    boxShadow: '0px 1px 3px 0 rgba(0,0,0,0.07)',
                    padding: 10,
                    backgroundColor: '#f7f8f3',
                    marginBottom: 10,
                    borderRadius: 6
                }} key={post.id}>
                    <div>
                        <h3>{post.title}</h3>
                        <p>{post.body.substring(0, 100)}... <small><Link to={`/${post.category}/${post.id}`}>read more</Link></small><br/>
                        <small>by <strong>{post.author}</strong> on {getDate(post.timestamp)}</small></p>
                        <ButtonGroup>
                            <Button onClick={() => vote(post.id,'upVote')} style={{backgroundColor: '#78bcc4', border: 'none'}}>
                                <i className="fa fa-thumbs-up"></i>
                            </Button>
                            <Button onClick={() => vote(post.id,'downVote')} style={{backgroundColor: '#f7444e', border: 'none'}}>
                            <i className="fa fa-thumbs-down"></i>
                            </Button>
                        </ButtonGroup> 
                        &nbsp;&nbsp;{post.voteScore} &nbsp; &nbsp;
                        <i className="fa fa-comment"></i>
                        <small style={{marginLeft: 4}}>{post.commentCount}</small>
                    </div>
                    <div>
                        <ButtonGroup>
                            <Button onClick={() => props.history.push(`${post.category}/${post.id}/edit`)}
                             style={{backgroundColor: '#78bcc4', border: 'none'}}>
                                <i className="fa fa-edit"></i>
                            </Button>
                            <Button onClick={() => delete_post(post.id)} style={{backgroundColor: '#f7444e', border: 'none'}}>
                                <i className="fa fa-trash"></i>
                            </Button>                            
                        </ButtonGroup> 
                    </div>
                </div>
    ))}
      </div>
  )
}

export default Posts