import React from 'react'
import { Form, Button, ButtonGroup } from 'react-bootstrap'

export default function Comments({ commentBox, comment, vote_comment, setCommentBox, delete_comment, getDate, edit_comment }) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            boxShadow: '0px 1px 3px 0 rgba(0,0,0,0.07)',
            padding: 10,
            backgroundColor: '#e6e2d8',
            marginBottom: 15,
            borderRadius: 6
        }}>
            <div>
                {!commentBox ?
                    <div>
                        <h6>{comment.body}</h6> <br />
                        <ButtonGroup>
                            &nbsp;&nbsp;{comment.voteScore} Votes&nbsp;&nbsp;
                    <Button className="w3-button w3-theme-d1 w3-margin-bottom" onClick={() => vote_comment(comment.id, 'upVote')} style={{ backgroundColor: '#78bcc4', border: 'none' }}>
                                <i className="fa fa-thumbs-up"></i>
                            </Button>
                            <Button className="w3-button w3-theme-d1 w3-margin-bottom" onClick={() => vote_comment(comment.id, 'downVote')} style={{ backgroundColor: '#f7444e', border: 'none' }}>
                                <i className="fa fa-thumbs-down"></i>
                            </Button>
                        </ButtonGroup>
                    </div>

                    : <Form style={{ display: 'inline-flex' }} onSubmit={(e) => edit_comment(comment.id, e)}>
                        <Form.Control name="edit" type="text" defaultValue={comment.body} /> &nbsp;
                    <Button style={{ backgroundColor: '#f7444e', border: 'none' }} type="submit">
                            Comment
                    </Button>
                    </Form>}
            </div>

            <div>
                <ButtonGroup>
                    <Button className="w3-button w3-theme-d1 w3-margin-bottom" onClick={() => setCommentBox(true)} style={{ backgroundColor: '#78bcc4', border: 'none' }}>
                        <i className="fa fa-edit"></i>
                    </Button>
                    <Button className="w3-button w3-margin-bottom" onClick={() => delete_comment(comment.id)} style={{ backgroundColor: '#f7444e', border: 'none' }}>
                        <i className="fa fa-trash"></i>
                    </Button>
                </ButtonGroup>
                <p><small>by <strong>{comment.author}</strong> on {getDate(comment.timestamp)}</small></p>
            </div>
        </div>
    )
}