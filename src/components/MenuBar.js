import { Container, Navbar, Form, FormControl, Button } from "react-bootstrap";

function MenuBar() {
    return (
        <>
            <Navbar bg="light" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                    Boiler Bulletin
                    </Navbar.Brand>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>
           
        </>
    );
}

export default MenuBar;