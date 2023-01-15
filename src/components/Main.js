import React from 'react';
import HornedBeast from './HornedBeast';
import data from '../data/data.json';
import './Main.css'

class Main extends React.Component{
  render(){
    return(
      <>
      <main>
        {data.map((hornedBeast) => {
          return <HornedBeast title={hornedBeast.title} image_url={hornedBeast.image_url} description={hornedBeast.description} keyword={hornedBeast.keyword}/>
        })}
      </main>
      </>
    )
  }
}

export default Main;