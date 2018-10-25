import React, { Component } from 'react';
import Burger from '../components/Burger';
import './BurgerBuilder.css';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    burger: {
      salad: 1,
      bacon: 0,
      cheese: 1,
      meat: 1
    }
  }
  
  control = (ingredient, opr) => {
    console.log("control method called with ingredient=" + ingredient + " and opr=" + opr)
    let countSalad = this.state.burger.salad;
    let countMeat = this.state.burger.meat;
    let countBacon = this.state.burger.bacon;
    let countCheese = this.state.burger.cheese;

    switch (ingredient){
      case 'salad':
        if (opr === "INCR")  countSalad++; else  countSalad--;
        countSalad = (countSalad < 0) ?  0: countSalad;
        break;
      case 'meat':
        if (opr === "INCR")  countMeat++; else  countMeat--;
        countMeat = (countMeat < 0) ?  0: countMeat;
        break;
      case 'bacon':
        if (opr === "INCR")  countBacon++; else  countBacon--;
        countBacon = (countBacon < 0) ?  0: countBacon;
        break;
      case 'cheese':
        if (opr === "INCR")  countCheese++; else  countCheese--;
        countCheese = (countCheese < 0) ?  0: countCheese;
        break;
      default:
        break;
    }
    this.setState({
      burger: {
        salad: countSalad,
        bacon: countBacon,
        cheese: countCheese,
        meat: countMeat
      } 
    });

  }

  render() {
    return (
      <div >
        <Burger ingredients={this.state.burger} prices={INGREDIENT_PRICES} />
        Salad:
        <button onClick={()=>this.control('salad', 'INCR')}> +</button>
        <button onClick={()=>this.control('salad', 'DECR')}> -</button><br/>
        Meat:
        <button onClick={()=>this.control('meat', 'INCR')}> +</button>
        <button onClick={()=>this.control('meat', 'DECR')}> -</button><br/>
        Bacon:
        <button onClick={()=>this.control('bacon', 'INCR')}> +</button>
        <button onClick={()=>this.control('bacon', 'DECR')}> -</button><br/>
        cheese:
        <button onClick={()=>this.control('cheese', 'INCR')}> +</button>
        <button onClick={()=>this.control('cheese', 'DECR')}> -</button><br/>
      </div>
    );
  } 

}

export default BurgerBuilder;
