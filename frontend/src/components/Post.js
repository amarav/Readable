import React from 'react'
import { connect } from 'react-redux'
import {useState,useSelector,useDispatch} from 'react-redux'
import { getAllPosts, getAllComments, votePost, addComment, voteComment, deletePost, deleteComment, updateComment } from '../actions'
import { ButtonGroup, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { generateId } from '../utils'
import Comments from './Comments'
import { getDate } from './Posts'

const Post = (props) => {
    const [commentBox, setCommentBox] = React.useState(false)    
    const posts = useSelector(state => state.posts)    
    const comments = useSelector(state => state.comments)

    const dispatch = useDispatch()
    React.useEffect(() => {
      const fetchPost = async () => {
          posts.length === 0 && await dispatch(getAllPosts()) //fetch posts only when user enters the id through url
          await dispatch(getAllComments(props.match.params.id))
      }
      fetchPost()
    }, [])

    const { match } = props

    const vote = async (id, option) => {
        await dispatch(votePost(id, option))
    }
    
    const delete_post = (id) => {
        dispatch(deletePost(id))
    }

   
    if(posts.filter(post => post.id === props.match.params.id).length === 0)
        return <div>
            Post not found
        </div>


    const comment = (e) => {
        e.preventDefault()
        const id = generateId()
        const timestamp = Date.now()
        dispatch(addComment({
            id,
            parentId: match.params.id,
            timestamp,
            body: e.target.body.value,
            author: e.target.author.value,
        }))
        e.target.body.value = ''
        e.target.author.value = ''
    }

    const vote_comment = (id, option) => {
        dispatch(voteComment(id, option))
    }

    const delete_comment = (id) => {
        dispatch(deleteComment(id))
    }

    const edit_comment = async (id, e) => {
        e.preventDefault()
        await dispatch(updateComment(id, {
            timestamp: Date.now(),
            body: e.target.edit.value
        }))
        props.history.go(0)
    }

    return (
        <div className="w3-container w3-card w3-white w3-round w3-margin"> 
            {posts && posts.map(post => post.id === match.params.id && (
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
                        <p><small>by <strong>{post.author}</strong> on {getDate(post.timestamp)}</small> <br/>
                        {post.body}
                        </p>
                        <ButtonGroup>
                        <Button type="button" className="w3-button w3-theme-d1 w3-margin-bottom"  onClick={() => vote(post.id,'upVote')}><i class="fa fa-thumbs-up"></i> {post.voteScore}  Likes</Button> 
                           <Button type="button" className="w3-button w3-theme-d2 w3-margin-bottom" onClick={() => vote(post.id,'downVote')} ><i class="fa fa-thumbs-down"></i> Dislike</Button> 
                          </ButtonGroup> 
                    </div>
                    <div>
                         <ButtonGroup>
                            <Button className="w3-button w3-theme-d1 w3-margin-bottom" onClick={() => props.history.push(`${post.id}/edit`)}
                             style={{backgroundColor: '#78bcc4', border: 'none'}}>
                                <i className="fa fa-edit"></i>
                            </Button>
                            <Button className="w3-button w3-margin-bottom" onClick={() => delete_post(post.id)} style={{backgroundColor: '#f7444e', border: 'none'}}>
                                <i className="fa fa-trash"></i>
                            </Button>                            
                        </ButtonGroup> 
                    </div>
                </div>
            ))} <br/>
            <Form onSubmit={comment} className="w3-container w3-card w3-white w3-round w3-margin">
                <Form.Control name="body" as="textarea" row="3" required placeholder="Write a comment..."/> <br/>
                <Form.Control name="author" required type="text" placeholder="Enter username" /> <br/>
                <Button style={{margin:10,backgroundColor: '#b0b0ae', border: 'none'}} type="submit">
                    Comment
                </Button>
            </Form>
            <br/>
            {/* TODO: Refactor  */}
            {comments && comments.sort((a,b) => b.timestamp - a.timestamp).map(comment => (
                <Comments 
                 commentBox={commentBox}
                 setCommentBox={setCommentBox}
                 comment={comment}
                 key={comment.id}
                 vote_comment={vote_comment}
                 delete_comment={delete_comment}
                 edit_comment={edit_comment}
                 getDate={getDate}
                />
            ))}
        </div>
    )
}

export default Post