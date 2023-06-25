import { Box, Typography, useTheme } from '@mui/material';
import { MealProps } from '../pages/menu';


export default function Meal({ name, caption, price, image, order, ...props }: MealProps) {
	const theme = useTheme();
	
	return (
		<Box sx={{
      position: 'relative',
			width: '250px',
			height: '300px',
			pr: '20px',
			pt: '30px'
		}}>
			<Box sx={{
				width: '230px',
				height: '270px',
				borderRadius: '20px',
				backgroundColor: '#F9F6F6',
			}}>
				<Box component='img' src={`/images/png/${image}`} sx={{
					position: 'absolute',
          top: '0px',
          right: '0px',
					cursor: 'pointer',
          maxWidth: '200px'
				}}>
				</Box>
				<Box width={1} sx={{
					position: 'relative',
					top: '119px'
				}}>
					<Typography width={1} sx={{
						fontFamily: 'PoppinsBold',
						fontSize: '20px',
						top: '119px',
						justifyContent: 'center'
					}}>
						{name}
					</Typography>
					<Typography width={1} sx={{
						fontFamily: 'PoppinsSemiBold',
						fontSize: '16px',
						justifyContent: 'center',
						color: '#797979'
					}}>
						{caption}
					</Typography>
					<Typography width={1} sx={{
						fontFamily: 'PoppinsBold',
						fontSize: '15px',
						justifyContent: 'center',
						color: '#797979'
					}}>
						<span className='orange-text'>
							$
						</span>
						{price.toFixed(2)}
					</Typography>
					<Box component='img' src='/images/png/basket.png' sx={{
						position: 'relative',
						left: '170px',
						cursor: 'pointer'}}
            onClick={() => order(name, price)}
					>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};