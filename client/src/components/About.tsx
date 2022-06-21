import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="about__container">
        <div className="about__content">
          <p>
            Молодой JavaScript/TypeScript разработчик { new Date().getUTCFullYear() - 2006 } лет. Немного ленивый и стеснительный. { new Date().getUTCFullYear() - 2019 } лет в сфере.
            
          </p>
        </div>
      </div>
    )
  }
}

export default About;
