import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, createPost } from '../actions'
import { generateId } from '../utils'
import { Form, Button } from 'react-bootstrap'

const PostForm = (props) => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)
    React.useEffect(() => {
        dispatch(getCategories())
    }, [])

    const addPost = async e => {
        e.preventDefault()
        const id = generateId()
        const timestamp = Date.now()
        await dispatch(createPost({
            id,
            timestamp,
            title: e.target.title.value,
            body: e.target.body.value,
            author: e.target.author.value,
            category: e.target.category.value
        }))
        props.history.replace('/')
    }

    return (
        <div>
            <Form onSubmit={addPost}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="author" type="text" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label style={{ paddingRight: 60 }}>Title</Form.Label>
                    <Form.Control name="title" type="text" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label style={{ paddingLeft: 20, paddingRight: 140 }}>Category</Form.Label>
                    <Form.Control name="category" as="select" rows="3" required>
                        {
                            categories && categories.map((category, index) => (
                                <option key={index} value={category.name}>{category.name}</option>
                            ))
                        }
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label style={{ paddingRight: 35 }}>Message</Form.Label>
                    <Form.Control name="body" as="textarea" rows="4" columns="6" required />
                </Form.Group>
                <Button style={{ backgroundColor: '#b0b0ae', border: 'none' }} type="submit">
                    Add this post
                </Button>
            </Form>
        </div>
    )

}

export default PostForm