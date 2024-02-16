import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import logo from '../../assets/images/logo.png';
import footerImg from '../../assets/images/footerImg.jpg';

import '../Footer/Footer.css';

export const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row>
                    <Col md={6} className="footer-half">
                        <div className="footer-top d-flex">
                            <img src={logo} alt="logo-footer" className='logo-footer mt-2' />
                            <h1 className="text-white">OrganizeMe</h1>
                        </div>

                        <p className='text-uppercase text-white text-center text-bold pt-3'>Join with us to start writing your day-to-day tasks and be more organized. Also, use it for your business to increase productivity and efficiency by storing your financial data and activities.</p>
                        <div className="grp-btn text-center pb-5 pt-5">
                            <Link to='/login'>
                                <Button colorScheme='white' size='sm' backgroundColor='white' color='black'>
                                    Login
                                </Button>
                            </Link>
                            <Link to='/sign-up'>
                                <Button colorScheme='purple' variant='outline' borderColor={'white'} color='white' marginLeft={'20px'} size='sm' >
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img src={footerImg} alt="footer-img" className='footer-img' />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
