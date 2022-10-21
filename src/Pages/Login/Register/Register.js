import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Register = () => {

    const {createUser,updateUserProfile,verifyEmail} =useContext(AuthContext);

    const [error,setError] = useState('');
    const [accsept,setAccsept]= useState(false);
    
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,photoURL,email,password)
        createUser(email,password)
        .then(result => {
            const user =result.user;
            console.log(user)
            form.reset();
            setError('')
            handleUpdateUserProfile(name,photoURL)
            handleVerifyEmail()
            toast.success('Varify your email')
        })
        .catch(error => {
          console.error(error)
          setError(error.message)
        })
    }

    const handleTerms = (event) =>{
      setAccsept(event.target.checked)
    }

    const handleUpdateUserProfile = (name,photoURL) =>{
      const profile ={
        displayName : name,
        photoURL: photoURL,
      }
      updateUserProfile(profile)
      .then(()=>{})
      .catch(error =>{
        console.log(error)
      })
    }

    const handleVerifyEmail =() =>{
      verifyEmail()
      .then(()=>{})
      .catch(error => console.log(error))
    }

  return (
    <Form onSubmit={handleSubmit}>
        
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Photo url</Form.Label>
        <Form.Control type="text" name="photoURL" placeholder="Your Photo" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={handleTerms} type="checkbox" label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!accsept}>
        Register
      </Button>
      <h6 className="text-danger">{error}</h6>
    </Form>
  );
};

export default Register;
