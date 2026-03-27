import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Input from './form/components/Input'
import Button from './form/components/Button'
import axios from 'axios'

import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import FormPage from './form/FormPage'
import TablePage from './table/TablePage'


const App = props => {
 
  

  return (
    <div>
            


      <Router>
        <div ><Link to={"/form"}>Form</Link></div>
        <div ><Link to={"/table"}>Table</Link></div>
        <Routes>
          <Route path='form' element={<FormPage />} />
          <Route path='table' element={<TablePage />} />
        </Routes>
      </Router>
    </div>
  )
}

App.propTypes = {}

export default App