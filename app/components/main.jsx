import React from 'react';
import Navigation from './navigation.jsx';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return(
      <div>      
        <header>
          <div className="title">
            React + Redux + Bootstrap Boilerplate
          </div>
          <Navigation/>
        </header>
        <content>
          {this.props.children}
        </content>
      </div>
    );
  }
}

export default Main;