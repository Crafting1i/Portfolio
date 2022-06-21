import React from 'react';
import '../css/body.css';

import Home from './Home';
import ChapterDivider from './ChapterDivider';
import About from './About';

class Body extends React.Component {
  render() {
    return (
      <main>
        <Home />
        <ChapterDivider title="Обо мне" id="about" />
        <About />
      </main>
    );
  }
}

export default Body;
