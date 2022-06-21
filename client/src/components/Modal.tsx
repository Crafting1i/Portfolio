import React from 'react';
import menuIco from '../img/menu.svg';

class Modal extends React.Component {
  state = {
    show: false,
  }
  render() {
    return (
      <>
        <button className='modal__btn' onClick={() => this.openModal()}><img src={menuIco} /></button>
        <div style={{display: this.state.show ? 'block' : 'none'}}>
          <div className="overlay" onClick={() => this.closeModal()} />
          <div className="modal" role="document" onClick={() => console.log('aaa')}>
            <div className="modal__container">
              <div className="modal__content">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  componentDidUpdate() {
    if(this.state.show) {
      document.addEventListener('wheel', this.scrolllock, {passive: false});
    } else {
      document.removeEventListener('wheel', this.scrolllock);
    }
  }

  private closeModal() {
    this.setState((state) => ({ show: false }));
  }

  private openModal() {
    this.setState((state) => ({ show: true }));
  }

  private scrolllock(e: Event) {
    e.preventDefault();
  }
}

export default Modal;