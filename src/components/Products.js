import React, { Component } from 'react';
import ProductItem from './ProductItem';
class Products extends Component {
    constructor(){
      super();
      this.state = {
        products: [],
        productOpened: false
      }
    }
    handleOpenProduct(event){
      this.setState({
        productOpened: !this.state.productOpened
      });
      console.log(this.state.productOpened)
    }
    componentWillMount(){
      this.setState({
        productOpened: true,
        products:[
        {
          id: 1,
          name: 'Cat',
          description: ['nice', 'warm','furry'],
          url: 'https://static.boredpanda.com/blog/wp-content/uploads/2015/06/pallas-cat-manul-7__880.jpg'
        },
        {
          id: 2,
          name: 'Dog',
          description: ['loud', 'loves you','best friend'],
          url: 'http://cdn.akc.org/content/article-body-image/housetrain_adult_dog_hero.jpg'
        },
        {
          id: 3,
          name: 'Worm',
          description: ['weird', 'slick','i dont like it'],
          url: 'http://www.indiewire.com/wp-content/uploads/2017/04/facehugger.jpg'
        },
        {
          id: 4,
          name: 'Cat',
          description: ['nice', 'warm','furry'],
          url: 'https://static.boredpanda.com/blog/wp-content/uploads/2015/06/pallas-cat-manul-7__880.jpg'
        },
        {
          id: 5,
          name: 'Dog',
          description: ['loud', 'loves you','best friend'],
          url: 'http://cdn.akc.org/content/article-body-image/housetrain_adult_dog_hero.jpg'
        },
        {
          id: 6,
          name: 'Worm',
          description: ['weird', 'slick','i dont like it'],
          url: 'http://www.indiewire.com/wp-content/uploads/2017/04/facehugger.jpg'
        },

      ]});
    }

    render() {
      let productItems;
      productItems = this.state.products.map(product =>{
        return(
          <ProductItem
          key={product.id}
          product={product}
          handleOpenProduct={this.handleOpenProduct.bind(this)}
          />
        );
      });
      return (
        <div>
          <h5> Pets</h5>
          {productItems}
        </div>
    );
  }
}

export default Products;
