import React from 'react';
import   './Burger.css';
import BurgerIngredient from './BurgerIngredient';

const ingrediantArray = (ingredient, count) => {
    /*
    This arrow function takes argments such as ('salad', 3) and returns 
    ['salad', 'salad', 'salad'] 
    */
    let ingredientSlices = [] ;
    for(let i=0; i < count; i++){
        ingredientSlices.push(ingredient);
    }
    return ingredientSlices;
};

const Burger = (props) => {
    //concatenating different arrays using ES6 spread operator
    const allSlices = [
        ...ingrediantArray('salad', props.ingredients.salad), 
        ...ingrediantArray('meat', props.ingredients.meat), 
        ...ingrediantArray('bacon', props.ingredients.bacon), 
        ...ingrediantArray('cheese', props.ingredients.cheese)
    ];
    
    return (
        <div className="Burger">
        <BurgerIngredient type="bread-top" />
        { allSlices.map(ingedientType => 
        <BurgerIngredient 
            key={Math.random()}
            type={ingedientType} />)  }
        <BurgerIngredient type="bread-bottom" />
        </div>
    );
    
};
export default Burger;