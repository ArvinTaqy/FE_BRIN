import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import Add from './pages/Add';
import { useState } from "react";
import SideBar from './components/SideBar';
import { Children } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
//import SideBar from './components/SideBar'
//import { useState, useEffect } from 'react'
//import axios from 'axios';


function App(props) {
  return(
    <div className='App'>
      <SideBar/>
      <body>
            <div id="main">
              <header className="mb-3">
                <a href="javascript:;" className="burger-btn d-block d-xl-none">
                  <i className="bi bi-justify fs-3"></i>
                </a>
              </header>
              <Dashboard/>
              <Add/>
            </div>
      </body>
    </div>
  )
}

export default App;
/**
  const { title } = props;
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="ATHUS TEAM - BRIN & DIKE UGM" />
        <meta name="csrf-token" content="your-csrf-token-here" />
        <title>{ title ? title : '' } | ATHUS</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
        <link href="./css/bootstrap.css" rel="stylesheet" />
        <link href="./css/app.css" rel="stylesheet" />
        <link rel="stylesheet" href="./vendors/bootstrap-icons/bootstrap-icons.css" />
        <link rel="stylesheet" href="./vendors/iconly/bold.css" />
        <link rel="stylesheet" href="./vendors/perfect-scrollbar/perfect-scrollbar.css" />
      </head>
    <div className='App'>
      <body>
          <SideBar>
            <div id="main">
              <header className="mb-3">
                <a href="javascript:;" className="burger-btn d-block d-xl-none">
                  <i className="bi bi-justify fs-3"></i>
                </a>
              </header>
              {props.children}
            </div>

          </SideBar>
        <script src="./vendors/perfect-scrollbar/perfect-scrollbar.min.js"></script>
        <script src="./js/bootstrap.bundle.min.js"></script>
        <script src="./js/main.js"></script>
      </body>
    </div>
    </html>
  );
}
**/
/**
  const [categories, setCategories ] = useState()

  useEffect (() => {
    retrieveCategories()

  }, [])

  const retrieveCategories = async () => {
    try {

      const { data } = await axios.get('https://api.publicapis.org/categories')

      //console.log( data, '<== response categories')
      setCategories(data)

    } catch (error) {
      console.log(error, '<== error retrive categories')
    }
  }

  return (
    <div className="App">
      {JSON.stringify(categories)}
    </div>
*/