import React from 'react'
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const nav =  {
  margin: '0',
  padding: '0',
  overflow: 'hidden',
  position: 'center'
}

// li {
//   float: left;
// }

// li a {
//   display: block;
//   color: white;
//   text-align: center;
//   padding: 14px 16px;
//   text-decoration: none;
// }

// li a:hover {
//   background-color: #111;
// }
// </style>
// </head>
{/* <body>

<ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul> */}
class Navbar extends React.Component {
  render() {
    return (
      <div style={nav}>
        <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={link}
          /* add prop for activeStyle */
          activeStyle={{
            background: 'darkblue'
          }}
        >Home</NavLink>
        <NavLink
          to="/listings"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Listings</NavLink>
        <NavLink
          to="/map"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
       >Map</NavLink>
      </div>
    )
  }
}
 
export default Navbar;