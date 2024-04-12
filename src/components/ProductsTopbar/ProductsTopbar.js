import React, { useState } from 'react';

const SearchBar = ( {products, setProductListData} ) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [result, setResult] = useState(null);

    const handleSearch = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        console.log(products)
        const foundProduct = products.find(product => product.design_code.toLowerCase() === value.toLowerCase());
        
        setResult(foundProduct);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by Design Code..."
                value={searchTerm}
                onChange={handleSearch}
                style={{ margin: '10px', padding: '8px' }}
            />
            {result && (
                <div>
                    <h4>Product Details:</h4>
                    <p>Name: {result.name}</p>
                    <p>Design Code: {result.design_code}</p>
                    <p>Category: {result.category}</p>
                </div>
            )}
            {!result && searchTerm && <p>No product found with that design code.</p>}
        </div>
    );
};

export default SearchBar;

