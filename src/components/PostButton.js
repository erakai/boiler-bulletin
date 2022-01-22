import React, { useState } from 'react'
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import { writePost } from '../utils/FirebaseManager.js'

const PostButton = () => {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [link, setLink] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = () => {
        setOpen(false)

        var today = new Date()
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        var dateTime = date + ' ' + time

        //Temporary
        var min = Math.ceil(0);
        var max = Math.floor(100000);
        var id = Math.floor(Math.random() * (max - min) + min);

        const post = {
            title: title,
            link: link,
            description: description,
            type: 'Discord',
            votes: 1,
            date: dateTime 
        }

        writePost(id, post)
    }

    return (
        <div> 
            <button type="button" class="btn justify-content-center align-items-center btn-primary btn-lg"
               onClick={() => {setOpen(true)}}>Post</button>

            <Modal show={open} onHide={() => {setOpen(false)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Post</Modal.Title>
                </Modal.Header> 
                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3' controlId='formPostTitle'>
                            <Form.Label>Community Title</Form.Label>
                            <Form.Control required type='text' size='lg' placeholder='Title' onChange={e => setTitle(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formPostLink'>
                            <Form.Label>Join Link</Form.Label>
                            <Form.Control required type='text' size='md' placeholder='Link' onChange={e => setLink(e.target.value)}/>
                        </Form.Group>
                        <FloatingLabel controlId='formPostDescription' label='Description' className='mb-3'>
                            <Form.Control required as='textarea' placeholder='Description' style={{height: '200px'}} 
                            onChange={e => setDescription(e.target.value)}/>
                        </FloatingLabel>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {setOpen(false)}}>Cancel</Button>
                    <Button variant='primary' type='submit' onClick={onSubmit}>Create</Button>
                </Modal.Footer>
            </Modal> 
        </div>
    )
}

export default PostButton;
