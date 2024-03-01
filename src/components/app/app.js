import { Component } from "react";

import HomePage from "../../pages/HomePage/HomePage";
import CoffeePage from "../../pages/CoffeePage/CoffeePage";
import GoodsPage from "../../pages/GoodsPage/GoodsPage";


import './app.scss'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {imgProduct: 'solimo', nameProduct: 'Solimo Coffee Beans 2 kg', country: 'Kenya', price: '10.73', best: true, id: '1'},
        {imgProduct: 'presto', nameProduct: 'Presto Coffee Beans 1 kg', country: 'Brazil', price: '15.99', best: true, id: '2'},
        {imgProduct: 'aromistico', nameProduct: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99', best: true, id: '3'},
        {imgProduct: 'presto', nameProduct: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99', best: false, id: '4'},
        {imgProduct: 'aromistico', nameProduct: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '6.99', best: false, id: '5'},
        {imgProduct: 'solimo', nameProduct: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99', best: false, id: '6'}
      ],
      term: '',
      filter: ''
    }
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  searchCoffee = (items, term) => {
    if(term.length === 0) {
        return items;
    }
    
    return items.filter(item => {
        return item.nameProduct.toLowerCase().indexOf(term) > -1
    })
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  filterPost = (items, filter) => {
    switch(filter) {
      case 'Brazil':
        return items.filter(item => item.country === 'Brazil');
      case 'Kenya':
        return items.filter(item => item.country === 'Kenya');
      case 'Columbia':
        return items.filter(item => item.country === 'Columbia');
      default:
        return items;
    }
  }

  bestProduct = (items) => {
    return items.filter(item => item.best);
  }

  render() {
    const {data, term, filter} = this.state;
    const ourBestProduct = this.bestProduct(data);
    const visibleData = this.filterPost(this.searchCoffee(data, term), filter);
    return (
      <>
        <HomePage data={ourBestProduct}/>
        <CoffeePage onUpdateSearch={this.onUpdateSearch} visibleData={visibleData} onFilterSelect={this.onFilterSelect} filter={filter}/>
        <GoodsPage data={data}/>
      </>
    );
  }
}

export default App;
