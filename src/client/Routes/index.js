import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
// import indexRouter from './router'
import Homepage from '../Views/Homepage'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import NotFound from '../Views/NotFound';
import Category from '../Views/Category';

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div className="wrap">
      <Header/>
      <Switch>
        <Route path='/' exact={true} component={Homepage} />
        <Route path='/category' component={Category} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/category' component={Category} />
        <Route component={NotFound} />
      </Switch>
      <Footer/>      
    </div>
  </Router>
)

export default AppRouter
