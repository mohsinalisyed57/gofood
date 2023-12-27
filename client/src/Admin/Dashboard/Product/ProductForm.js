import React from 'react';
import { useForm } from 'react-hook-form';

const ProductForm = (props) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data); // You can replace this with your logic to add the product
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <br />
            <label>
               Category
            </label>
            <br />
            <input type="text" {...register('category')} />
            <br />
            <label>
                Image:
            </label>
            <br />
            <input type="text" {...register('image')} />
            <br />
            <label>
                Name:
            </label>
            <br />
            <input type="text" {...register('name')} />
            <br />
            <label>
            Price:
            </label>
            <br />
            <input type="number" {...register('price')} />
            <br />
            <label>
                Total Items:
            </label>
            <br />
            <input type="number" {...register('totalItems')} />
            <br />
            <br />
            <button type="submit">{props.btn} Product</button>
        </form>
    );
};

export default ProductForm;
