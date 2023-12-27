import React from 'react'
import Navbar from '../../components/Navbar'
import { Helmet } from 'react-helmet'
import AdminSidebar from './Component/AdminSidebar'
import { Outlet } from 'react-router-dom'


const AdminDashboard = () => {
  return (
      <div>
          <Helmet>
              <title>Admin | Dashboard</title>
          </Helmet>
          <Navbar />
          <div>
              <div style={{ position:"fixed" ,height:"100vh"}}>
                  <AdminSidebar />
              </div> 
              <div style={{ marginLeft: "17%"}}>
                    <Outlet/>
              </div>
         </div>
      </div>
  )
}

export default AdminDashboard