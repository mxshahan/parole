import React from 'react';
import {connect} from 'react-redux';
import{Route, Redirect} from 'react-router-dom';
import DashboardSidebar from '../Components/Dashboard/DashboardSidebar';

const PrivateRoute = ({isAuthenticated, component: Component, ...rest}) => (
    isAuthenticated ? (
        <Route {...rest} component={(props)=> (
            <div>
                <div className="categories-list">
                    <DashboardSidebar/>
                    <Component {...props}/>
                    <div className="clear"> </div>
                </div>
            </div>
        )}/>
    ) 
    :<Redirect to="/login"/>
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!localStorage.getItem('auth')
})

export default connect(mapStateToProps)(PrivateRoute);