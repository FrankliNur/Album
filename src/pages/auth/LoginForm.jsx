import { useState } from "react";
import LabelBS from "../../components/LabelBS";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";
import { Button, Card, Col, Container, FormControl, Row } from "react-bootstrap";
import { postLogin } from "../../services/AuthService";

const LoginForm = () => {
    const navigate = useNavigate();
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')

    const enviarDatos = (e) => {
        e.preventDefault();
        const credentials = {
            correo,
            password
        }

        postLogin(credentials)
            .then(() => {
                /* localStorage.setItem('token', res.token) */
                localStorage.setItem('username', correo)
                navigate('/album')
            })
    }

    return (
        <>
            <Menu />
            <Container>
                <Row className="mt-3">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <h1>Iniciar sesión</h1>
                                </Card.Title>
                                <form>
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
                                        <Button onClick={enviarDatos}>Iniciar sesión</Button>
                                    </div>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default LoginForm;