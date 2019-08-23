// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';


// == Import : local

import './footer.scss';

// == Composant
const Footer = () => (
  <div id="footer">
    <div className="linkdiv">
      <div className="link">
        <Link className="foot-link" to="/contact" exact>
          <p>&copy; 2019 Dwarven Overlords</p>
        </Link>
      </div>
    </div>
  </div>
);


// == Export
export default Footer;
