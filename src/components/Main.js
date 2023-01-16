import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Row xs={1} sm={2} md={3} lg={4}>
            {this.props.beastData.map((hornedBeast, index) => {
              return (
                <HornedBeast
                  title={hornedBeast.title}
                  image_url={hornedBeast.image_url}
                  description={hornedBeast.description}
                  keyword={hornedBeast.keyword}
                  key={index}
                  display={this.props.handleOpenModal}
                />
              )
            })}
          </Row>
        </Container>

      </>
    )
  }
}

export default Main;