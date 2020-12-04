import React, { useEffect } from 'react'
import { useState, useSelector, useDispatch } from 'react-redux'
import { getAllPosts, sortByTime, sortByVotes, votePost, deletePost } from '../actions'
import { ButtonGroup, Button, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as moment from 'moment'

export const getDate = (timestamp) => {
  const date = moment(timestamp)._d.toString().split(' ')
  return date[0] + ', ' + date[2] + ' ' + date[1] + ' ' + date[3]
}

const Posts = (props) => {
  const [postsArray, setPostsArray] = React.useState([])
  const [applySort, setApplySort] = React.useState(false)
  const dispatch = useDispatch()
  const Posts = useSelector(state => state.posts)
  useEffect(() => {
    const fetchPosts = async () => {
      !applySort && await dispatch(getAllPosts(props.match.params.category), [])
      await setPostsArray(Posts)
    }
    fetchPosts()
  }, [props.match.params.category])

  const sortBy = (option) => {
    let sortedPosts = postsArray.slice()
    option === 'votes' ? dispatch(sortByVotes(sortedPosts)) : dispatch(sortByTime(sortedPosts))
    setApplySort(true)
  }

  const vote = async (id, option) => {
    await dispatch(votePost(id, option))
  }

  const delete_post = (id) => {
    dispatch(deletePost(id))
  }


  return (
    <div className="w3-container w3-card w3-white w3-round w3-margin">
      <Dropdown>
        <Dropdown.Toggle style={{ backgroundColor: '#78bcc4', border: 'none' }}>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => sortBy('votes')}>Votes</Dropdown.Item>
          <Dropdown.Item onClick={() => sortBy('time')}>Time</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> <br />

      {Posts && Posts.map((post, index) => (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          boxShadow: '0px 1px 3px 0 rgba(0,0,0,0.07)',
          padding: 10,
          backgroundColor: '#e6dabc',
          marginBottom: 10,
          borderRadius: 6
        }} key={post.id}>
          <div>
            <h3>{post.title}</h3>
            <small>by <strong>{post.author}</strong> on {getDate(post.timestamp)}</small>
            <br />
            <p>{post.body.substring(0, 100)}... <small><Link to={`/${post.category}/${post.id}`}>Read more</Link></small><br />
            </p>
            <ButtonGroup>
              <Button type="button" className="w3-button w3-theme-d1 w3-margin-bottom" onClick={() => vote(post.id, 'upVote')}><i class="fa fa-thumbs-up"></i> {post.voteScore}  Likes</Button>
              <Button type="button" className="w3-button w3-theme-d2 w3-margin-bottom" onClick={() => vote(post.id, 'downVote')} ><i class="fa fa-thumbs-down"></i> Dislike</Button>
              <Button className="w3-button w3-theme-d1 w3-margin-bottom">
                <i className="fa fa-comment"></i> {post.commentCount} Comments
                           </Button>
            </ButtonGroup>
          </div>
          <div>
            <ButtonGroup>
              <Button className="w3-button w3-theme-d1 w3-margin-bottom" onClick={() => props.history.push(`${post.category}/${post.id}/edit`)}
                style={{ backgroundColor: '#78bcc4', border: 'none' }}>
                <i className="fa fa-edit"></i>
              </Button>
              <Button className="w3-button w3-margin-bottom" onClick={() => delete_post(post.id)} style={{ backgroundColor: '#f7444e', border: 'none' }}>
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