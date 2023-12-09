import { Alert, Container } from "react-bootstrap";

export function Header(props){
    return(
        <Container className="mt-5">
            <Alert variant="success">
                <h4> {props.text}</h4>
            </Alert>
            
        </Container>
    )
}