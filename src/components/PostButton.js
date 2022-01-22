import React, { useState } from 'react'
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import { writePost } from '../utils/FirebaseManager.js'

const PostButton = () => {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [link, setLink] = useState('')
    const [description, setDescription] = useState('')
    const [tags, setTags] = useState('')
    const [type, setType] = useState('GroupMe')

    const onSubmit = () => {
        setOpen(false)

        var today = new Date()
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        var dateTime = date + ' ' + time

        //Temporary
        var id = today.getTime();

        var tagsList = tags.split(',')
        tagsList.push(type)
        tagsList.push(title)
        tagsList.map(s => s.toLowerCase().trim())
            
        const post = {
            title: title,
            link: link,
            description: description,
            type: type,
            votes: 1,
            date: dateTime,
            tags: tagsList
        }

        writePost(id, post)

        setTitle('')
        setLink('')
        setDescription('')
        setTags('')
        setType('GroupMe')
    }

    //TODO: Put the dialogue in a separate componenet
    return (
        <div> 
            <button type="button" className="btn justify-content-center align-items-center btn-primary btn-lg mr-5"
               onClick={() => {setOpen(true)}}>Post</button>

            <Modal show={open} onHide={() => {setOpen(false)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Post</Modal.Title>
                </Modal.Header> 
                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-1' controlId='formPostTitle'>
                            <Form.Label>Community Title</Form.Label>
                            <Form.Control required type='text' size='lg' onChange={e => setTitle(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className='mb-1' controlId='formPostLink'>
                            <Form.Label>Join Link</Form.Label>
                            <Form.Control required type='text' size='sm' onChange={e => setLink(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className='mb-2' controlId='formPostTags'>
                            <Form.Label>Tags</Form.Label>
                            <Form.Control required type='text' size='sm' placeholder='club, class, CS180, sport' onChange={e => setTags(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formPostType'>
                            <Form.Check type='switch' id='custom-switch' label='Discord? GroupMe by default' onChange={e => (e.target.value == 'on' ? 'Discord' : 'GroupMe')}/>
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
