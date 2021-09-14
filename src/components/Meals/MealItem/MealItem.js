import { useContext } from 'react';

import { MealItemForm } from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

export const MealItem = ({meal}) => {
  const CartCtx = useContext(CartContext)
  const price = `$${meal.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    CartCtx.addItem({
      id: meal.id,
      name: meal.name,
      amount,
      price: meal.price
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div><MealItemForm onAddToCart={addToCartHandler} id={meal.id} /></div>
    </li>
  )
}
