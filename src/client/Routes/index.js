import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
// import indexRouter from './router'
import Homepage from '../Views/Homepage';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import NotFound from '../Views/NotFound';
import Category from '../Views/Category';
import About from '../Views/About';
import Contact from '../Views/Contact';
import Single from '../Views/Single';
import Login from '../Views/Login';
import Register from '../Views/Register';
import Dashboard from '../Views/Dashboard';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import CategorySingle from '../Components/Categories/CategorySingle';
import AddNewContent from '../Components/Dashboard/AddNewContent';
import MyContent from '../Components/Dashboard/MyContent';

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div className="wrap">
      <Header/>
      <Switch>
        <Route path='/' exact={true} component={Homepage} />
        <Route path='/category' component={Category} />
        <Route path='/category/:id' component={CategorySingle} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <PublicRoute path='/login' component={Login} />
        <PublicRoute path='/register' component={Register} />
        <Route path='/single/:id' component={Single}/>
        <PrivateRoute path="/dashboard" exact={true} component={Dashboard}/>
        <PrivateRoute path="/dashboard/post" component={AddNewContent}/>
        <PrivateRoute path="/dashboard/mycontent" component={MyContent}/>
        <Route component={NotFound} />
      </Switch>
      <Footer/>      
    </div>
  </Router>
)

export default AppRouter
