import { Box, Button, Icon, SvgIcon, TextareaAutosize, Typography, useTheme } from '@mui/material';
import * as React from 'react';
import Meal from '../components/meal';
import OrderList from '../components/orderList';
import { Summarize } from '@mui/icons-material';
import Summary from '../components/summary';

export interface MealProps {
  name: string;
  caption: string;
  price: number;
  image: string;
  order(name: string, price: number): void;
};

export interface OrderedMeal {
  quantity: number;
  price: number;
  totalPrice: number;
}

export interface Order {
  [mealName: string]: OrderedMeal
}

interface MenuProps {

}

export default function Menu(props: MenuProps) {
  const theme = useTheme();
  const [meals, setMeals] = React.useState<MealProps[]>([]);
  const [order, setOrder] = React.useState<Order>({});
  const [total, setTotal] = React.useState<number>(0);

  const orderMeal = (name: string, price: number) => {
    let newOrder = { ...order }
    if (!newOrder.hasOwnProperty(name)) {
      newOrder[name] = {
        quantity: 0,
        price: price,
        totalPrice: 0
      };
    }
    newOrder[name].quantity += 1;
    newOrder[name].totalPrice += price;
    setOrder(newOrder);
    setTotal(total + price);
  }

  const getMeals = async () => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => setMeals(data.items))
      .catch(error => console.log(error.message));
  };

  const clearOrder = () => {
    setOrder({});
    setTotal(0);
  }

  React.useEffect(() => {
    getMeals()
  }, [])

  return (
    <>
      <Box sx={{
        height: '330px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mt: 2,
        alignItems: {xs: 'center', md: 'center', lg: 'start'}
      }}>
        <Box sx={{
          width: {xs: '430px', md: '571px', lg: '510px'},
          fontSize: '64px',
          lineHeight: '70px',
          mb: 4,
          textAlign: { xs: 'center', md: 'center', lg: 'left' }
        }}>
          <span className='main-text'>
            The fastest brunch delivery in  <span className='orange-text'>Your city</span>
          </span>
        </Box>
        <Typography sx={{ 
          fontFamily: 'PoppinsRegular',
          textAlign: { xs: 'center', md: 'center', lg: 'left' }
        }}>
          This is my Exploration for Fruit - Food Delivery Landing Page 🍕.
          How about you ?
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', mt: '36px', overflowX: 'scroll' }}>
        {meals.map((meal) => {
          return (
            <Meal key={meal.name} {...meal} order={orderMeal} />
          )
        })}
      </Box>
      <Box width={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1, marginY: 3 }}>
        <Summary total={total} order={order} clearOrder={clearOrder} />
      </Box>

    </>
  );
};