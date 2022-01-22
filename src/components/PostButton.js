import React, { useState } from 'react'
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'

const PostButton = () => {
    const [open, setOpen] = useState(false)

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
                            <Form.Control type='text' size='lg' placeholder='Title'/>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formPostLink'>
                            <Form.Label>Join Link</Form.Label>
                            <Form.Control type='text' size='md' placeholder='Link'/>
                        </Form.Group>
                        <FloatingLabel controlId='formPostDescription' label='Description' className='mb-3'>
                            <Form.Control as='textarea' placeholder='Description' style={{height: '200px'}}/>
                        </FloatingLabel>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {setOpen(false)}}>Cancel</Button>
                    <Button variant='primary' onCLick={() => {setOpen(false)}}>Create</Button>
                </Modal.Footer>
            </Modal> 
        </div>
    )
}

export default PostButton;
