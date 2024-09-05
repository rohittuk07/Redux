import React from 'react'
import { useEffect } from 'react'
import Navbar from './Components/Navbar'
import CartContainer from './Components/CartContainer'
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotals} from './Features/Cart/CartSlice'



const App = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <main>
      <Navbar/>
      <CartContainer/>
      
    </main>
  )
}

export default App
