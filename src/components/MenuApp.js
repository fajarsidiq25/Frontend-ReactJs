import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MenuCategory from './MenuCategory';
import MenuItem from './MenuItem';

const items = [
    {
        id: 1,
        category: 'Appetizer',
        title: 'Caprese Salad',
        description: 'Fresh mozzarella, tomatoes, and basil.',
        price: '$8.99',
        image: '/Assets/caprese.jpg',
    },
    // ...Tambahkan item lainnya sesuai kebutuhan
];

const categories = ['Appetizer', 'Main Course', 'Dessert', 'Best Seller'];

const MenuApp = () => {
    const [selectedCategory, setSelectedCategory] = useState('Appetizer');

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        const element = document.getElementById(category);
        element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Container>
            <h1 className="my-4">Menu</h1>
            <Row>
                <Col md={3}>
                    <MenuCategory categories={categories} onSelectCategory={handleSelectCategory} />
                </Col>
                <Col md={9}>
                    {categories.map((category) => (
                        <div key={category} id={category} className="mt-5">
                            <h2>{category}</h2>
                            <Row>
                                {items.filter(item => item.category === category).map(item => (
                                    <Col key={item.id} xs={12} md={6}>
                                        <MenuItem item={item} />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default MenuApp;
