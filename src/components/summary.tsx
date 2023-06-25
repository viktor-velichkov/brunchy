import * as React from 'react';
import { Box, Typography, Button, Modal, useTheme } from "@mui/material";
import { Order, OrderedMeal } from "../pages/menu";
import OrderList from './orderList';
import Overlay from './overlay';

interface SummaryProps {
  total: number;
  order: Order;
  clearOrder(): void;
}

export default function Summary({ order, total, clearOrder}: SummaryProps) {
  const orderListDom = React.useRef();
  const theme = useTheme();
  const [orderList, setOrderList] = React.useState<boolean>(false);
  const [successOrder, setSuccessOrder] = React.useState<boolean>(false);


  const showOrderList = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setOrderList(true)   
  }

  const hideOrderList = () => {
    setOrderList(false)
  }

  const placeOrder = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    
    if (Object.keys(order).length == 0) {
      return;
    }

    clearOrder();
    setOrderList(false);
    setSuccessOrder(true);  
  }

  const closeModal = () => {
    setSuccessOrder(false);
  }

  React.useEffect(() => {
    if (orderListDom.current) {
      const globalClickHandler = (event: MouseEvent) => {
        hideOrderList();
      };

      window.addEventListener('click', globalClickHandler)

      return () => window.removeEventListener('click', globalClickHandler);
    }
  })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column-reverse' }}>
      <Box sx={{
        width: '400px',
        height: '81px',
        borderRadius: '20px',
        backgroundColor: '#F9F6F6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 999
      }}>
        <Box component='img' src={'/images/png/basket-transparent.png'} sx={{
          position: 'relative',
          width: '30px',
          height: '30px',
          cursor: 'pointer'
        }}
          onClick={showOrderList}
        />
        <Typography sx={{
          fontFamily: 'PoppinsBold',
          fontSize: '24px',
          width: '180px',
          justifyContent: 'center'
        }}>
          {`$${total.toFixed(2)}`}
        </Typography>
        <Button
          variant='contained'
          onClick={placeOrder}>
          Order Now
        </Button>
      </Box>
      { orderList
        ? 
          <>
            <Overlay/>
            <OrderList ref={orderListDom} order={order} sum={total} />
          </>
          
        : null 
      }
      { successOrder
        ? <Modal open={successOrder} onClose={closeModal} 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center'}}>
            <Box sx={{
              width: '615px',
              height: '370px',
              borderRadius: '20px',
              backgroundColor: theme.palette.secondary.main,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Typography sx={{ 
                fontFamily: 'PoppinsBold', 
                fontSize: '40px', 
                color: theme.palette.primary.main }}>
                  Congratulations!
              </Typography>
              <Typography sx={{ 
                fontFamily: 'PoppinsSemiBold', 
                fontSize: '20px',
                marginY: 3}}>
                  Your order is on it's way.
              </Typography>
              <Button variant='contained'
                onClick={closeModal}>
                Ok
              </Button>
            </Box>
          </Modal>
        : null 
      }
    </Box>
  );
};

