import { Box, Button, Divider, List, ListItem, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import mockupimg_product_1 from '@/components/Assets/Imgs/mockimg_product_1.png';
import mockupimg_product_2 from '@/components/Assets/Imgs/mockimg_product_2.png';
import mockupimg_product_3 from '@/components/Assets/Imgs/mockimg_product_3.png';
import mockupimg_product_4 from '@/components/Assets/Imgs/mockimg_product_4.png';
import mockupimg_product_5 from '@/components/Assets/Imgs/mockimg_product_5.png';
import mockupimg_product_6 from '@/components/Assets/Imgs/mockimg_product_6.png';
import mockupimg_product_7 from '@/components/Assets/Imgs/mockimg_product_7.png';
import mockupimg_product_8 from '@/components/Assets/Imgs/mockimg_product_8.png';
import StarIcon from '../Assets/icons/starIcon';

const imageBestSelling = [
  { img: mockupimg_product_1, price: '48.99', rate: '5.0', name: 'Spread Collar Shirt', edited: '' },
  {
    img: mockupimg_product_2,
    price: '39.00',
    rate: '4.9',
    name: 'White Solid Formal Shirt',
    edited:
      'w-[318px] h-[378px] hover:transition-all ease-in-out duration-300 scale-125 translate-y-10 hover:scale-[1.3]',
  },
  { img: mockupimg_product_3, price: '42.99', rate: '4.8', name: 'Shine On Me Blouse', edited: '' },
  { img: mockupimg_product_4, price: '32.99', rate: '4.7', name: 'Gray Solid Padded Jacket', edited: '' },
  { img: mockupimg_product_5, price: '39.99', rate: '5.0', name: 'Printed Loose T-shirt', edited: '' },
  { img: mockupimg_product_6, price: '39.95', rate: '4.7', name: 'Summer Wind Crop Shirt', edited: '' },
  { img: mockupimg_product_7, price: '46.00', rate: '4.9', name: 'Tailored Jacket', edited: '' },
  { img: mockupimg_product_8, price: '36.00', rate: '5.0', name: 'Solid Round Neck T-shirt', edited: '' },
];

const header = 'Our products';
const buttons = ['SALE', 'HOT', 'NEW ARRIVALS', 'ACCESSORIES'];

function OurProduct() {
  return (
    <Box className="min-h-screen flex flex-col items-center gap-y-20 mx-24">
      <Box className="space-y-10 text-center">
        <Typography variant="h3" fontWeight={600}>
          {header}
        </Typography>
        {buttons.map((item, index) => (
          <Button key={index} className="text-lg mx-5 hover:underline lg:text-xl lg:mx-10">
            {item}
          </Button>
        ))}
      </Box>
      <List className="grid grid-cols-1 gap-y-20 gap-x-10 w-fit lg:grid-cols-2 xl:grid-cols-4">
        {imageBestSelling.map((item, index) => (
          <Box className="flex flex-col space-y-10">
            <ListItem className="bg-[#C9AB88] rounded-2xl p-0 overflow-hidden hover:bg-[#9c856a] hover:transition-all ease-in-out duration-300">
              <Image
                src={item.img}
                alt={`${item}`}
                key={index}
                className={
                  item.edited === ''
                    ? `w-[318px] h-[378px] hover:scale-105 hover:transition-all ease-in-out duration-300`
                    : `${item.edited}`
                }
              />
            </ListItem>
            <Box className="space-y-3">
              <Typography variant="h5" className="text-center font-semibold">
                {item.name}
              </Typography>
              <Box className="text-center space-x-10">
                <Typography component="span" className="font-medium">
                  ${item.price}
                </Typography>
                <Divider orientation="vertical" component="span" className="bg-[#342120]" />
                <Box component="span" className="space-x-4">
                  <Typography component="span" className="font-medium">
                    {item.rate}
                  </Typography>
                  <StarIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </List>
    </Box>
  );
}

export default OurProduct;
