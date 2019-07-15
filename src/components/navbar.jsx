import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Vidly</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/movies">Movies <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/customers">Customers</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/rentals">Rentals</Link>
            </li>
            </ul>
        </div>
      </nav> );
    }
}
 
export default NavBar;