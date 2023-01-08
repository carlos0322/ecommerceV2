

import React from "react";
import axios from "axios";
import './products.css'
import {Link} from 'react-router-dom';

class Products extends React.Component {
  state= {
    products: [],
    type:"All",
    filterText:""

  }
  componentDidMount() {
      axios.get("http://ec2-18-208-182-18.compute-1.amazonaws.com:3001/Products").then((res) => {
        const Products = res.data;
        this.setState({products: Products });
      });
    }
    myFilter (type) {
      return () => {
          this.setState({type})
      }
  }



      render() {
    return (
      <>
      <h1 className="site-title">Console</h1>
      <div className="product-container">
        <div id="filter-container"></div>
        <h4>Filter By Console: </h4>
        <button onClick={this.myFilter("All")}>All</button>
        <button onClick={this.myFilter("Xbox")}>Xbox</button>
        <button onClick={this.myFilter("PlayStation")}>PlayStation</button>
        <button onClick={this.myFilter("Nintendo")}>Nintendo</button>
        <h4>Sort By Price: </h4>
        <div className="linkContain">
          <Link  className="sb-price" to="/Products/LowtoHigh">Low to High</Link>
          <Link className="sb-price" to="/Products/HightoLow">High to Low</Link>
          <Link className="sb-price" to="/Products">Reset</Link>
        </div>
      </div>
      <div className="product">
        {this.state.products
          .filter((record) => {
            if (this.state.type === "All") {
              return true;
            } else {
              return this.state.type === record.category;
            }
          })
          .map((card) => (
            <div className="products" key={card.id}>
              <img className="img" src={card.image} alt={card.device} />
              <p className="console">{card.product}</p>
              <p className="descriptions">{card.descriptions}</p>
              <p className="price">${card.price}</p>
            </div>
          ))}
      </div>

      
      </>
      );
      }
      }
      export default Products;