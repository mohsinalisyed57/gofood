import React from 'react'
import { useNavigate } from 'react-router-dom'
import Delete from '@material-ui/icons/Delete'
import { useCart, useDispatchCart } from '../../components/ContextReducer';
import { config } from '../../Config';
import useUserAuthInfo from '../../hooks/useUserAuthInfo';
const Cart=()=> {
 const data = useCart();
 const dispatch = useDispatchCart();
  const navigate = useNavigate()
  const {userEmail}=useUserAuthInfo()
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3 text-light'>The Cart is Empty!</div>
      </div>
    )
  }

 const totalPrice = data.reduce((total, food) => total + food.price, 0)
  const handleCheckOut = async () => {
   const response = await fetch(`${config.Port}/api/auth/orderData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    if (response.status === 200) {
      dispatch({ type: "DROP" })
      navigate("/myorder")
    }

  }

  return (
    <div>
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md text-light' >
        <table className='table  text-light'>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td ><button type="button" className="btn p-0 text-light"><Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2'>Total Price: Rs {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
        </div>
      </div>



    </div>
  )
}
export default  Cart