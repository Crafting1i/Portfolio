import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import React from 'react';
import { Message } from '../../shared';
import messageApi from './api';
import './css/App.css';

interface Props {
  message?: undefined;
}
interface State {
  message: Message | undefined;
  error: Error | null;
}

class App extends React.Component<Props, State> {
  state: State = {
    message: undefined,
    error: null,
  };
  render() {
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
  }
  sendWrongMessage() {
    // обнуляем приветствие от сервера
    this.setState((state) => ({
      message: undefined,
    }))

    messageApi.sendWrongMessage()
      .then((message) => this.setState((state) => ({ message })))
      .catch((error) => this.setState((state) => ({ error })));
  }

  async sendRightMessage() {
    this.setState((state) => ({
      error: null,
    }))

    messageApi.sendRightMessage()
      .then((message) => this.setState((state) => ({ message })))
      .catch((error) => this.setState((state) => ({ error })));
  }
  // Return the App component.
}

export default App;
