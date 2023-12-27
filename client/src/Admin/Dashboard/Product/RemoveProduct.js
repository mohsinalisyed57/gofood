// Product.jsx
import React from 'react';
import ProductTable from './ProductTable';

const RemoveProduct = () => {
  // Example data, replace with your actual View data
  const products = [
    { id: 1, name: 'Product 1', price: 19.99, totalItems: 50 },
    { id: 2, name: 'Product 2', price: 29.99, totalItems: 30 },
    { id: 3, name: 'Product 3', price: 39.99, totalItems: 20 },
  ];
  const handleRemove = (productId) => {
    // Implement your logic to remove the product with the given productId
    console.log(`Remove product with ID: ${productId}`);
  };
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Total Items',
        accessor: 'totalItems',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }) => (
          <button onClick={() => handleRemove(row.original.id)}>Remove</button>
        ),
      },
    ],
    []
  );

  return (
    <div>
      <h2>Product Listing</h2>
      <ProductTable products={products} columns={columns} />
    </div>
  );
};

export default RemoveProduct;
