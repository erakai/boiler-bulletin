import { Container, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

function MenuBar() {
    return (
        <>
            <Navbar bg="light" variant="light" expand="lg">
                <Container className="justify-content-center">
                    <Navbar.Brand href="#home">
                        Boiler Bulletin
                    </Navbar.Brand>
                    <Form className="d-flex">
                            <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-3"
                            aria-label="Search"
                            />
                            <Button variant="outline-success"><BsSearch /></Button>
                    </Form>
                </Container>
            </Navbar>
           
        </>
    );
}

export default MenuBar;