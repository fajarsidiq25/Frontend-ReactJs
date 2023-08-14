import React from 'react';
import { Nav } from 'react-bootstrap';

const MenuCategory = ({ categories, onSelectCategory }) => {
    return (
        <Nav className="flex-column">
            {categories.map((category) => (
                <Nav.Item key={category} className="my-2">
                    <Nav.Link href={`#${category}`} onClick={() => onSelectCategory(category)}>
                        {category}
                    </Nav.Link>
                </Nav.Item>
            ))}
        </Nav>
    );
};

export default MenuCategory;
