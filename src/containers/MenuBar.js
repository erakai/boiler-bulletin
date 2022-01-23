import React, { useState, useEffect } from 'react'
import { Container, Navbar, FormControl} from "react-bootstrap";
import { GrStatusInfo } from "react-icons/gr";

function MenuBar({posts, setDisplayPosts}) {
    const [searchTags, setSearchTags] = useState('')

    useEffect(() => {
        if (searchTags === '') {
            setDisplayPosts(posts)
            return
        }

        var tagsList = searchTags.split(',')
        var searchList = tagsList.map(s => s.toLowerCase().trim())
        
        const filteredPosts = posts.filter(post => {
            return searchList.every(e => 
                post[1].tags.some(t => 
                    t.includes(e)
            ))})

        setDisplayPosts(filteredPosts)        
    }, [posts, searchTags, setDisplayPosts])

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
                    className="me-3" 
                    aria-label="Search"
                    onChange={submitSearch}/>
                    <a className='btn btn-info' role='button' href='https://github.com/erakai/boiler-bulletin'><GrStatusInfo /></a>
                </Container>
            </Navbar>
           
        </>
    );
}

export default MenuBar;