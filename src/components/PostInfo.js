import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const PostInfo = ({post}) => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <Button size='sm' className='justify-content-center' variant='outline-info'
                onClick={() => {setOpen(true)}}><AiOutlineInfoCircle/></Button>

            <Modal centered show={open} onHide={() => {setOpen(false)}}>
                <Modal.Header closeButton>
                    <Modal.Title>{post.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <text style={{fontWeight: 'bold'}}>Description: </text>
                    {post.description}
                </Modal.Body>
                <Modal.Body>
                    <text style={{fontWeight: 'bold', fontSize: 10}}>Tags: </text>
                    <text style={{fontSize: 10}}> {post.tags.join(', ')} </text>
                    <text style={{fontWeight: 'bold', fontSize: 10}}><p/>Type: </text>
                    <text style={{fontSize: 10}}> {post.type} </text>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {setOpen(false)}}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default PostInfo;