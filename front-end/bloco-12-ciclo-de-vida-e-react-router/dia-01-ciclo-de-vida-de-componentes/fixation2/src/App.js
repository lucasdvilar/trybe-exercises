import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      dataObj: undefined,
    }
  }

  fetchRandomUser() {
    this.setState({ loading: true},
      async () => {
        const response = await fetch('https://api.randomuser.me/');
        const data = await response.json();
        this.setState({
          loading: false,
          dataObj: data.results[0],
        });
      }  
    )
  }

  
  componentDidMount() {
    console.log('opa');
    this.fetchRandomUser();
  }
  
  shouldComponentUpdate(_nextProps, nextState) {
    console.log(nextState.dataObj);
    if (nextState.dataObj) {
      return nextState.dataObj.dob.age < 50;
    }

    return true;
  }

  renderProfile() {
    console.log('teste');
    const { dataObj } = this.state;
    return (
      <div>
        <img src={dataObj.picture.medium} />
        <p>Name: {dataObj.name.first}</p>
        <p>Email: {dataObj.email}</p>
        <p>Age: {dataObj.dob.age}</p>
      </div>
    )
  }

  render() {
    const { loading, dataObj } = this.state;
    const loadingMessage = <div>loading...</div>
    console.log('ola');

    return (
      <div>
        {loading ? loadingMessage : this.renderProfile()}
      </div>
    )
  }
}

export default App;
