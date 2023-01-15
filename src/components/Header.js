import React from 'react';
import Button from 'react-bootstrap/Button';

class Header extends React.Component {

  changeHeader = () => {
    this.setState({
      flash: true
    })
  }

  render() {
    return (
      <>
        <h1>
          <Button onClick={this.flash}>Horned Beast</Button>
        </h1>
      </>
    )
  }
}
export default Header;
