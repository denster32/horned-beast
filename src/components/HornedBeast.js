import React from 'react';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css';
import Col from 'react-bootstrap/Col';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    }
  }

  // ** METHOD TO UPDATE STATE FOR EACH HORNEDBEAST ** the onClick p element
  handleFav = () => {
    this.setState({
      favorites: this.state.favorites + 1
    })
  }

  handleImgClick = () => {
    this.props.display(this.props.title, this.props.image_url, this.props.description)
  }

  render() {
    return (
      <>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src={this.props.image_url}
              alt={this.props.title}
              onClick={this.props.addHearts} />
            <Card.Body>
              <Card.Title onClick={this.handleImgClick}>{this.props.title}</Card.Title>
              <Card.Text> ❤️ {this.state.favorites} Favorites</Card.Text>
              <Card.Text>{this.props.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </>
    )
  }
}

export default HornedBeast;