import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Input from './form/components/Input'
import Button from './form/components/Button'
import axios from 'axios'

import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import FormPage from './form/FormPage'
import TablePage from './table/TablePage'
import NotFoundPage from './not-found/NotFoundPage'
import HomePage from './home/HomePage'


const App = props => {
 
  

  return (
    <div>
            
      <Router>
        <div ><Link to={"/"}>Home</Link></div>
        <div ><Link to={"/form"}>Form</Link></div>
        <div ><Link to={"/table"}>Table</Link></div>
        

        <Routes>
          
          <Route index element={<HomePage />} />
          <Route path='/form' element={<FormPage />} />
          <Route path='/table' element={<TablePage />} />
          <Route path='*' element={<NotFoundPage />} />

          
        </Routes>
      </Router>
    </div>
  )
}

App.propTypes = {}

export default App