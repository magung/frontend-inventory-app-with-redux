import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css'

import Home from './pages/home'
import Auth from './pages/Auth'

const App = () => {
  return(
    <div className="App">
      <Router>
        <Route 
          exact={true}
          path={'/'}
          render={() => {
            return window.localStorage.getItem("token") !== null ? 
            <Redirect to="./home"/>
            :
            <Redirect to="./login"/>;
          }}
        />
        <Route
          path={'/home'}
          render={(props) => {
            return <Home {...props}/>
          }}
        />
        <Route
          path={'/login'}
          render={(props) => {
            return <Auth {...props}/>;
          }}
        />
        <Route
          path={'/register'}
          render={(props) => {
            return <Auth {...props}/>;
          }}
        />
      </Router>
    </div>
  )
}

export default App;
  // function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }
