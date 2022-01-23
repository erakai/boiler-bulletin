import React, { useState, useEffect } from 'react'
import { Container, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

function MenuBar({posts, setDisplayPosts}) {
    const [searchTags, setSearchTags] = useState('')

    useEffect(() => {
        if (searchTags == '') {
            setDisplayPosts(posts)
            return
        }

        var tagsList = searchTags.split(',')
        var newList = tagsList.map(s => s.toLowerCase().trim())
        
        const filteredPosts = posts.filter(post => {
            return post[1].tags.some(t => 
                newList.some(e => 
                    t.includes(e)
            ))})

        setDisplayPosts(filteredPosts)        
    }, [posts, searchTags])

    const submitSearch = (e) => {
        setSearchTags(e.target.value)
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="sm">
                <Container className="justify-content-center">
                    <Navbar.Brand href="#home">
                        Boiler Bulletin
                    </Navbar.Brand>
                            <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-1"
                            aria-label="Search"
                            onChange={submitSearch}/>
                            <Button variant="outline-success"><BsSearch /></Button>
                </Container>
            </Navbar>
           
        </>
    );
}

export default MenuBar;