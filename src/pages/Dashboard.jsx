import { Col, Container, Row } from "react-bootstrap";
import Menu from "../components/Menu";

const Dashboard = () => {
    return (<>
        <Menu />
        <Container>
            <Row className="mt-3">
                <Col>
                    <h1>Bienvenido</h1>
                </Col>
            </Row>
            <img src="../images/bird-8788491_1280.jpg" />
        </Container>
    </>);
}

export default Dashboard;