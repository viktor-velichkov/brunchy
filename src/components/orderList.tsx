import { forwardRef } from 'react';
import { Order } from '../pages/menu';
import { Box, Divider, Typography, styled, useTheme } from '@mui/material';

interface OrderListProps {
  order: Order;
  sum: number;
}

let Row = styled(Box)({
  display: 'flex',
  fontFamily: 'PoppinsBold',
  fontSize: '20px',
  marginLeft: '16px',
  marginRight: '16px',
  marginTop: '32px',
  marginBottom: '32px',
  pdding: '24px'
});

const OrderList = forwardRef((props: OrderListProps, ref) => {
  const theme = useTheme();

  const { order, sum } = props;
  
  return (
      <Box onClick={(ev) => ev.stopPropagation()} ref={ref} 
        sx={{ position: 'relative', justifyContent: 'center' }}>
        <Box sx={{
            width: '400px',
            borderRadius: '20px',
            backgroundColor: theme.palette.secondary.main,
            justifyContent: 'center',
            position: 'absolute',
            bottom: '34px',
            zIndex: 999
          }}>
            { Object.keys(order).length > 0
              ? Object.entries(order).map(([name, info]) => {
                  return(
                    <Row key={name}>
                      <Typography sx={{ flexGrow: 1 }}>{name}</Typography>
                      <Typography sx={{ width: '30px' }}>{info.quantity}</Typography>
                      <Typography sx={{ color: theme.palette.primary.main }}>$</Typography>
                      <Typography sx={{ minWidth: '52px', justifyContent: 'end'}}>{info.totalPrice.toFixed(2)}</Typography>
                    </Row>)
                })
              : <Row>
                  <Typography sx={{ flexGrow: 1 }}>Nothing ordered yet.</Typography>              
                </Row>
            }
            <Divider/>          
            <Row>
              <Typography sx={{ flexGrow:1 }}>Total</Typography>
              <Typography sx={{ color: theme.palette.primary.main }}>$</Typography>
              <Typography>{sum.toFixed(2)}</Typography>
            </Row>
          </Box>
      </Box>
  );
});

export default OrderList;