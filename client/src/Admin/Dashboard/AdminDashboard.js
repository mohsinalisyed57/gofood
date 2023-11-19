import React from 'react'
import Navbar from '../../components/Navbar'
import { Helmet } from 'react-helmet'

const AdminDashboard = () => {
  return (
      <div>
          <Helmet>
              <title>Ebuy | Dashboard</title>
          </Helmet>
          <Navbar />
          AdminDashboard
      </div>
  )
}

export default AdminDashboard