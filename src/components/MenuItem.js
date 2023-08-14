import React from 'react';
import { Card } from 'react-bootstrap';

const MenuItem = ({ item }) => {
    return (
        <Card className="mb-4">
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text className="fw-bold">Price: {item.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default MenuItem;
