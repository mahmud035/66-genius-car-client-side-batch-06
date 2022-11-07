import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
  const { user, logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://genius-car-server-side-nine.vercel.app/orders?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('genius-token')}`,
        },
      }
    )
      .then((res) => {
        // Handle 401, 403 to log out user
        if (res.status === 401 || res.status === 403) {
          logOut()
            .then(() => {})
            .catch((error) => {
              console.log(error.message);
            });
          navigate('/login');
        }

        // return obossoi-e likhte hobe
        return res.json();
      })
      .then((data) => {
        setOrders(data);
      });
  }, [user?.email, logOut, navigate]);

  const handleDelete = (id) => {
    // console.log(id);
    const agree = window.confirm('Are you sure you want to cancel this order?');

    if (agree) {
      fetch(`https://genius-car-server-side-nine.vercel.app/orders/${id}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${localStorage.getItem('genius-token')}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 1) {
            toast.success('Deleted Successfully');
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleStatusChange = (id) => {
    fetch(`https://genius-car-server-side-nine.vercel.app/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('genius-token')}`,
      },
      body: JSON.stringify({ status: 'Approved' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((odr) => odr?._id !== id);
          const approving = orders.find((odr) => odr?._id === id);
          approving.status = 'Approved';
          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      });
  };

  return (
    <div>
      <h2>You have {orders.length} orders</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrderRow
                key={index}
                order={order}
                handleDelete={handleDelete}
                handleStatusChange={handleStatusChange}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
