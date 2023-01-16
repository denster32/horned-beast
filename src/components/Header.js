import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <>
        <h1>Horned Beast {this.props.heart}</h1>
      </>
    )
  }
}
export default Header;
