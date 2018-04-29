import React, { Component } from 'react';
import {Link} from "react-router";
class ProductItem extends Component {

  render() {
    return (
      <div>
          <Link to="product/{product.id}" href="#''" onClick={this.props.handleOpenProduct}> {this.props.product.name} </Link>
          <img src={this.props.product.url} className="img-pet"/>
      </div>
    );
  }
}

export default ProductItem;
