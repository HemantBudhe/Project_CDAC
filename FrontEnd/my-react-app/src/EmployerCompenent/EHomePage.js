import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../UserComponent/HomeCss.css";

export default function EHomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('user');
    // Navigate to the home page
    navigate('/');
  };

  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        {/* <div class="container py-3 sticky-div"> */}
        {/* Header and content will adapt to different devices */}
        <div className="header">
          {/* Header content here */}
          <div className="header__right">
            <div className="headerOption">
              <Link to="/profile" className="headerOption">
                <i className="material-icons headerOption__icon">home</i>
                <h3>Home</h3>
              </Link>
            </div>
            <div className="headerOption">
              <Link to="/ejob" className="headerOption">
                <i className="material-icons headerOption__icon">business_center</i>
                <h3>Jobs</h3>
              </Link>
            </div>
            <div className="headerOption">
              <Link to="/postjob" className="headerOption">
                <i className="material-icons headerOption__icon">account_circle</i>
                <h3>Me</h3>
              </Link>
            </div>
            <div className="headerOption headerOption__logout" onClick={handleLogout}>
              <i className="material-icons headerOption__icon">exit_to_app</i>
              <h3>Logout</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
