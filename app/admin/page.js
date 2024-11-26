// // app/admin/page.js
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/allusers");
        setUsers(response.data);
        updateChartData(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("Error fetching users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete("/api/allusers", { data: { id } });
      setUsers(users.filter((user) => user._id !== id));
      updateChartData(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
      setError("Error deleting user");
    }
  };

  const updateChartData = (userData) => {
    const totalUsers = userData.length;
    const totalWorks = userData.reduce(
      (total, user) => total + user.works.length,
      0
    );

    const data = {
      labels: ["Total Users", "Total Works"],
      datasets: [
        {
          label: "Users and Works",
          data: [totalUsers, totalWorks],
          backgroundColor: ["#007bff", "#28a745"],
        },
      ],
    };

    setChartData(data);
  };

  useEffect(() => {
    if (chartData) {
      if (chartInstance) {
        chartInstance.destroy();
      }
      const ctx = document.getElementById("pie-chart");
      const newChartInstance = new Chart(ctx, {
        type: "pie",
        data: chartData,
      });
      setChartInstance(newChartInstance);
    }
  }, [chartData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="admin-panel">
      <h1>User Details</h1>
      <div className="chart-container">
        <canvas id="pie-chart"></canvas>
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Carts</th>
            <th>Orders</th>
            <th>Works</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>
                {user.cart.length > 0 ? (
                  <ul>
                    {user.cart.map((item, index) => (
                      <li key={index}>{item.title}</li>
                    ))}
                  </ul>
                ) : (
                  "No carts"
                )}
              </td>
              <td>
                {user.orders.length > 0 ? (
                  <ul>
                    {user.orders.map((order, index) => (
                      <li key={index}>
                        {order.orderItems.map((item, i) => (
                          <div key={i}>
                            {item.title} (Qty: {item.quantity})
                          </div>
                        ))}
                      </li>
                    ))}
                  </ul>
                ) : (
                  "No orders"
                )}
              </td>
              <td>
                {user.works.length > 0 ? (
                  <ul>
                    {user.works.map((work, index) => (
                      <li key={index}>{work.title}</li>
                    ))}
                  </ul>
                ) : (
                  "No works"
                )}
              </td>
              <td>
                <button onClick={() => deleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Styles */}
      <style jsx>{`
        .admin-panel {
          padding: 20px;
          font-family: Arial, sans-serif;
          
        }

        h1 {
          text-align: center;
          margin-bottom: 20px;
        }

        .chart-container {
          width: 400px;
          height: 400px;
          margin: 0 auto;
        }

        .user-table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px auto;
        }

        .user-table th,
        .user-table td {
          border: 1px solid #ddd;
          padding: 8px;
        }

        .user-table th {
          padding-top: 12px;
          padding-bottom: 12px;
          text-align: left;
          background-color: #f2f2f2;
        }

        .user-table tr:nth-child(even) {
          background-color: #f9f9f9;
        }

        .user-table tr:hover {
          background-color: #ddd;
        }

        button {
          padding: 5px 10px;
          color: #fff;
          background-color: #f44336;
          border: none;
          cursor: pointer;
        }

        button:hover {
          background-color: #d32f2f;
        }
      `}</style>
    </div>
  );
};

export default Admin;

// "use client";

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Admin = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('/api/allusers');
//         setUsers(response.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//         setError('Error fetching users');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const deleteUser = async (id) => {
//     try {
//       await axios.delete('/api/allusers', { data: { id } });
//       setUsers(users.filter(user => user._id !== id));
//     } catch (error) {
//       console.error('Error deleting user:', error);
//       setError('Error deleting user');
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="admin-panel">
//       <h1>User Details</h1>
//       <table className="user-table">
//         <thead>
//           <tr>
//             <th>Username</th>
//             <th>Carts</th>
//             <th>Orders</th>
//             <th>Works</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td>{user.username}</td>
//               <td>
//                 {user.cart.length > 0 ? (
//                   <ul>
//                     {user.cart.map((item, index) => (
//                       <li key={index}>{item.title}</li>
//                     ))}
//                   </ul>
//                 ) : (
//                   "No carts"
//                 )}
//               </td>
//               <td>
//                 {user.orders.length > 0 ? (
//                   <ul>
//                     {user.orders.map((order, index) => (
//                       <li key={index}>
//                         {order.orderItems.map((item, i) => (
//                           <div key={i}>
//                             {item.title} (Qty: {item.quantity})
//                           </div>
//                         ))}
//                       </li>
//                     ))}
//                   </ul>
//                 ) : (
//                   "No orders"
//                 )}
//               </td>
//               <td>
//                 {user.works.length > 0 ? (
//                   <ul>
//                     {user.works.map((work, index) => (
//                       <li key={index}>{work.title}</li>
//                     ))}
//                   </ul>
//                 ) : (
//                   "No works"
//                 )}
//               </td>
//               <td>
//                 <button onClick={() => deleteUser(user._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <style jsx>{`
//         .admin-panel {
//           padding: 20px;
//           font-family: Arial, sans-serif;
//         }

//         h1 {
//           text-align: center;
//           margin-bottom: 20px;
//         }

//         .user-table {
//           width: 100%;
//           border-collapse: collapse;
//           margin: 0 auto;
//         }

//         .user-table th, .user-table td {
//           border: 1px solid #ddd;
//           padding: 8px;
//         }

//         .user-table th {
//           padding-top: 12px;
//           padding-bottom: 12px;
//           text-align: left;
//           background-color: #f2f2f2;
//         }

//         .user-table tr:nth-child(even) {
//           background-color: #f9f9f9;
//         }

//         .user-table tr:hover {
//           background-color: #ddd;
//         }

//         button {
//           padding: 5px 10px;
//           color: #fff;
//           background-color: #f44336;
//           border: none;
//           cursor: pointer;
//         }

//         button:hover {
//           background-color: #d32f2f;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Admin;

// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Chart from "chart.js/auto";

// const Admin = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [chartData, setChartData] = useState(null);
//   const [chartInstance, setChartInstance] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get("/api/allusers");
//         setUsers(response.data);
//         updateChartData(response.data);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//         setError("Error fetching users");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const deleteUser = async (id) => {
//     try {
//       await axios.delete("/api/allusers", { data: { id } });
//       setUsers(users.filter((user) => user._id !== id));
//       updateChartData(users.filter((user) => user._id !== id));
//     } catch (error) {
//       console.error("Error deleting user:", error);
//       setError("Error deleting user");
//     }
//   };

//   const updateChartData = (userData) => {
//     const totalUsers = userData.length;
//     const totalWorks = userData.reduce(
//       (total, user) => total + user.works.length,
//       0
//     );

//     const data = {
//       labels: ["Total Users", "Total Works"],
//       datasets: [
//         {
//           label: "Users and Works",
//           data: [totalUsers, totalWorks],
//           backgroundColor: ["#007bff", "#28a745"],
//         },
//       ],
//     };

//     setChartData(data);
//   };

//   useEffect(() => {
//     if (chartData) {
//       if (chartInstance) {
//         chartInstance.destroy();
//       }
//       const ctx = document.getElementById("pie-chart");
//       const newChartInstance = new Chart(ctx, {
//         type: "pie",
//         data: chartData,
//       });
//       setChartInstance(newChartInstance);
//     }
//   }, [chartData]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="admin-panel">
//       <h1>User Details</h1>
//       <div className="chart-container">
//         <canvas id="pie-chart"></canvas>
//       </div>
//       <table className="user-table">{/* Table body */}</table>
//       {/* Styles */}
//       <style jsx>{`
//         .admin-panel {
//           padding: 20px;
//           font-family: Arial, sans-serif;
//         }

//         h1 {
//           text-align: center;
//           margin-bottom: 20px;
//         }

//         .chart-container {
//           width: 400px;
//           height: 400px;
//           margin: 0 auto;
//         }

//         .user-table {
//           width: 100%;
//           border-collapse: collapse;
//           margin: 20px auto;
//         }

//         .user-table th,
//         .user-table td {
//           border: 1px solid #ddd;
//           padding: 8px;
//         }

//         .user-table th {
//           padding-top: 12px;
//           padding-bottom: 12px;
//           text-align: left;
//           background-color: #f2f2f2;
//         }

//         .user-table tr:nth-child(even) {
//           background-color: #f9f9f9;
//         }

//         .user-table tr:hover {
//           background-color: #ddd;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Admin;
