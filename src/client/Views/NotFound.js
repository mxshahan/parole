import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="normal text-center bg-white">
      <div className="col-md-12">
        <h1 className="title">Ops! 404 Error - Page not found</h1>
        <img src="./assets/yay.jpg" alt="" width="400px"/>
        <div className="">
          <p>You might type wrong <code>URL</code>. Check out the url.</p>
          <p><Link to="/">Go Home</Link></p>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
