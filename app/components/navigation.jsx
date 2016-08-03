import React from 'react';
import { Link } from 'react-router'

class Navigation extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return(
      <nav>
        <ul>
          <li><Link to="/about" activeClassName="active">About</Link></li>
          <li><Link to="/example" activeClassName="active">Examples</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;