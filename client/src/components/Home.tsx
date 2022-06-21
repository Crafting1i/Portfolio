import React from 'react';

class Home extends React.Component {
  state = {
    slogans: [
      '«Лил дождь, и баг растёкся на отражения в лужах»',
      'Баги тают под дождём',
      '...undefined?'
    ],
  }

  render() {
    return (
      <div id="home" className="home__container">
        <div className="home__content">
          <div className="home__slogan">
            <h1>
              { this.getSlogan() }
            </h1>
          </div>
          <a className='home__btn'>
            Когда-нибудь эта кнопка будет работать...
          </a>
        </div>
      </div>
    );
  }

  private getSlogan(): string {
    const index = Math.random() * this.state.slogans.length;
    const slogan = this.state.slogans[~~index] ?? this.state.slogans[0];

    return slogan;
  }
}

export default Home;
