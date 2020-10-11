import React, { Component } from 'react';
// import Modal from '@material-ui/core/Modal';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
// import Loader from './Loader';
import { DotLoader } from 'react-spinners';
import covid from './image.png';

export default class App extends Component {
  state = {
    data: {},
    isLoading: true,
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log(fetchedData[0]);
    this.setState({ data: fetchedData[0], isLoading: false });
  }

  handleCountry = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData[0],
      country,
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div className={styles.App}>
          <DotLoader loading />
          Fetching Data
        </div>
      );
    }
    // console.log(this.state.data);
    return (
      <div>
        <div className={styles.container}>
          <img src={covid} className={styles.image} alt='covid' />
          <Cards data={this.state.data} />
          <CountryPicker handleCountry={this.handleCountry} />
        </div>
        <div className={styles.graphContainer}>
          <Chart data={this.state.data} country={this.state.country} />
        </div>
      </div>
    );
  }
}
