import React from 'react';
import Navbar from './components/Navbar';
import Images from './components/Images';
import product_one from './images/image-product-1.jpg';
import thumbnail_one from './images/image-product-1-thumbnail.jpg'
import thumbnail_two from './images/image-product-2-thumbnail.jpg'
import thumbnail_three from './images/image-product-3-thumbnail.jpg'
import thumbnail_four from './images/image-product-4-thumbnail.jpg' 
import Container from './components/Container';
import './App.css'

function App() { 
  return (
    <>
      <Navbar />
      <Images className='product_one' link={product_one} />
      <div className='thumbnailImages'>
        <Images className = 'thumbnail' link = {thumbnail_one}/>
        <Images className = 'thumbnail' link = {thumbnail_two}/>
        <Images className = 'thumbnail' link = {thumbnail_three}/>
        <Images className = 'thumbnail' link = {thumbnail_four}/>
      </div>
      <Container/>
      
    </>
  );
}

export default App;
