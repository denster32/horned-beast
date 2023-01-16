// 1st - Import
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from '../data/data.json';
import SelectedBeast from './SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';



// 2nd - Class Component
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beastData: data,
      showModal: false,
      selectedBeast: '',
      title: '',
      image_url: '',
      description: '',
    }
  }

  handleOpenModal = (title, image_url, description) => {
    this.setState({
      showModal: true,
      title: title,
      image_url: image_url,
      description: description,
    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <>
        <Header />
        <Main
          beastData={this.state.beastData}
          handleOpenModal={this.handleOpenModal}
        />

        <SelectedBeast selectedBeastData={this.state.beastData}
          title={this.state.title}
          image_url={this.state.image_url}
          description={this.state.description}
          openModal={this.state.showModal}
          closeModal={this.handleCloseModal}
        />

        <Footer />
      </>
    )
  }
}

// 3rd - Export the Component so other files can import them
export default App;