import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assets/brands/Brand1.jpg'
import Brand2 from '../../../assets/brands/Brand2.png'
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaList, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const RightSideNav = () => {
  const {providerLogin} = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () =>{
    providerLogin(googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .catch(error => console.error(error))
  }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login With Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2' variant="primary"><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2' variant="secondary"><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2' variant="success"><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-2' variant="danger"><FaWhatsapp></FaWhatsapp> Whats App</ListGroup.Item>
                    <ListGroup.Item className='mb-2' variant="warning"><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2' variant="info"><FaList></FaList> Terms and Condition</ListGroup.Item>
                </ListGroup>
            </div>

            <div className='mt-4'>
                <Carousel>
                    <Carousel.Item>
                      <img
                        style={{height: "170px"}}
                        className="d-block w-100"
                        src={Brand1}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        style={{height: "170px"}}
                        className="d-block w-100"
                        src={Brand2}
                        alt="Second slide"
                      />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default RightSideNav;