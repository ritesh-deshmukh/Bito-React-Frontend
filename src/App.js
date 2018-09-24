import React, { Component } from 'react';
import Header from './components/Header';
import Chart1 from './components/Chart1';
import Table from './components/Table';
// import Scroll from './components/Scroll';
// import ErrorBoundry from './components/ErrorBoundary';
import Dimensions from 'react-dimensions';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [
        { label: '', value: '' },
        { label: '', value: '' },
        { label: '', value: '' },
        { label: '', value: '' },
        { label: '', value: '' },
        { label: '', value: '' },
        { label: '', value: '' },
        { label: '', value: '' },
        { label: '', value: '' },
        { label: '', value: '' },
      ],
      // table_data: [],
    };
  }  

  async componentDidMount() {
    // fetch("http://127.0.0.1:5000/insert_rand")    
    // fetch("http://127.0.0.1:5001/")
    //   .then(response => response.json())
    //   .then(table_data => this.setState({ table_data }));
    try{
      setInterval(async () => {
        // fetch("http://127.0.0.1:5000/insert_rand")
        fetch("http://127.0.0.1:5001/next10")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              data: [
                { label: result[0][1], value: result[0][3] },
                { label: result[1][1], value: result[1][3] },
                { label: result[2][1], value: result[2][3] },
                { label: result[3][1], value: result[3][3] },
                { label: result[4][1], value: result[4][3] },
                { label: result[5][1], value: result[5][3] },
                { label: result[6][1], value: result[6][3] },
                { label: result[7][1], value: result[7][3] },
                { label: result[8][1], value: result[8][3] },
                { label: result[9][1], value: result[9][3] },
              ]
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
      },500)
    } catch(e){
      console.log(e)
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { error, isLoaded, data } = this.state;
    // console.log(this.state.data[0][1])
    const { containerWidth, containerHeight } = this.props;

    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded){
      return <div>Loading page...</div>
    } else {
        return (
        <div className="App">
          <Header />
          <Chart1 
            data={data}
            width={containerWidth}
            height={containerHeight}
          />

          <h1 className='tc f1 i'>Data From Chart Displayed Above</h1>
          <Table />
          
        </div>

      );
    }
    
  }
}

export default Dimensions()(App);
