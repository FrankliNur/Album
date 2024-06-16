import { Button, Card, Col, Container, FormControl, Row } from "react-bootstrap";
import Menu from "../../components/Menu";
import LabelBS from "../../components/LabelBS";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postRegister } from "../../services/AuthService";

const RegisterForm = () => {
    const navigate = useNavigate();
    const [nombres, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')

    const enviarDatos = (e) => {
        e.preventDefault();
        const credentials = {
            nombres,
            correo,
            password
        }

        postRegister(credentials)
            .then(() => {
                navigate('/login');
            })
    }
    return (<>
        <Menu />
        <Container>
            <Row className="mt-3">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <h1>Registro</h1>
                            </Card.Title>
                            <form>
                            <div>
                                    <LabelBS text="Nombre" />
                                    <FormControl type="text" value={nombres} onChange={(e) => {
                                        setNombre(e.target.value)
                                    }} />
                                </div>
                                <div>
                                    <LabelBS text="Correo" />
                                    <FormControl type="correo" value={correo} onChange={(e) => {
                                        setCorreo(e.target.value)
                                    }} />
                                </div>
                                <div className="mt-2">
                                    <LabelBS text="Contraseña" />
                                    <FormControl type="password" value={password} onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} />
                                </div>
                                <div className="mt-2">
                                    <Button onClick={enviarDatos}>Registrar</Button>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>);
}

export default RegisterForm;