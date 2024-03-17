import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const link = [
    { path: '/', name: 'Home', icon: 'house-door-fill' },
    { path: '/contact', name: 'Contact', icon: 'envelope-fill' },
    { path: '/login', name: 'Login', icon: 'person-fill' },
    { path: '/register', name: 'Register', icon: 'person-plus-fill' }
  ];

  return (
    <nav className="bg-pink-900 bg-opacity-70 shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            <span className="text-white text-2xl font-bold">
              Celebrate365
            </span>
          </div>
          <div className="flex-grow"></div> {/* To push the links to the right */}
          <div className="flex">
            {link.map((item, index) => (
              <NavLink
                key={index}
                exact
                to={item.path}
                activeClassName="text-white"
                className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.icon && <i className={`bi bi-${item.icon} mr-1`}></i>}
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
