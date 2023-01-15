import React from 'react';
import './HornedBeast.css';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    }
  }

  handleFavorite = () => {
    this.setState({
      favorites: this.state.favorites + 1
    })
  } 

  render() {
    return (
      <>
        <article>
          <h2>{this.props.title}</h2>
          <p> ❤️ {this.state.favorites} Favorites</p>
          <p onClick={this.handleFavorite}>Is this one your favorite horned beast?</p>
          <img src={this.props.image_url} alt={this.props.description} title={this.props.title} />
          <p>{this.props.description}</p>
        </article>
      </>
    )
  }
}

export default HornedBeast;
