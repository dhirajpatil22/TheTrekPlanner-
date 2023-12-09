import { Container } from "react-bootstrap";
import { Header } from "./Header";

export function Home(){
    return (
        <Container>
        <Header text="Welcome to the Trek planner app"></Header>
        <p>Using this app you can see the new adventurous trek plans and can register.</p>
        </Container>
    )
}