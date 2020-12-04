import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { getAllPosts, getCategories, editPost } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

const EditForm = (props) => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)
    const categories = useSelector(state => state.categories)
    React.useEffect(() => {
        const init = async () => {
            await dispatch(getCategories())
            posts.length === 0 && await dispatch(getAllPosts(props.match.params.category), [])
        }
        init()
    }, [props.match.params.category])

    const editForm = async (e) => {
        e.preventDefault()
        await dispatch(editPost(props.match.params.id, {
            title: e.target.title.value,
            body: e.target.body.value,
        }))
        props.history.replace('/')
    }

    return (
        <div>
            {posts && posts.map(post => post.id === props.match.params.id && (
                <Form key={post.id} onSubmit={editForm}>
                    <Form.Group as={Row}>
                        <Form.Label >Username    </Form.Label>
                        <Form.Control name="author" type="text" disabled value={post.author} required />
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label style={{ paddingRight: 60 }}>Title</Form.Label>
                        <Form.Control name="title" type="text" defaultValue={post.title} required />
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label style={{ paddingLeft: 20, paddingRight: 140 }}>Category</Form.Label>
                        <Form.Control name="category" as="select" disabled value={post.category} rows="3" required>
                            {
                                categories && categories.map((category, index) => (
                                    <option key={index} value={category.name}>{category.name}</option>
                                ))
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label style={{ paddingRight: 35 }}>Message</Form.Label>
                        <Form.Control name="body" as="textarea" rows="4" defaultValue={post.body} required />
                    </Form.Group>
                    <Button style={{ backgroundColor: '#b0b0ae', border: 'none' }} type="submit">
                        Edit this post
                    </Button>
                </Form>
            ))}
        </div>
    )
}

export default EditForm