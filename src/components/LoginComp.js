import {Form, Button} from "react-bootstrap";

import React from 'react'

const LoginComp = () => {
    return (
        <div className="text-center p-5">
            <div className="pb-5 mt-5">
                <img src="/Assets/logo technopartner.png" alt="" className="w-100"/>
            </div>
            <Form className="p-4">
                <Form.Group controlId="formBasicEmail" className="mb-4">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"  className="border shadow-sm"/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"  className="border shadow-sm"/>
                </Form.Group>
                <Button variant="ligth border shadow-sm" type="submit" className="px-5">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default LoginComp;