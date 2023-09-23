import { Box, List, ListItem, Typography, Divider, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { ArrowForward } from '@mui/icons-material';

import mockimg2 from '@/components/Assets/Imgs/mockimg2.png';
import mockimg3 from '@/components/Assets/Imgs/mockimg3.png';
import mockimg4 from '@/components/Assets/Imgs/mockimg4.png';
import StarIcon from '../Assets/icons/starIcon';

function MainContent() {
  const imageBestSelling = [
    { img: mockimg2, price: '38.99', rate: '5.0', name: 'Regular Fit Long Sleeve Top' },
    { img: mockimg3, price: '62.99', rate: '4.9', name: 'Black Crop Tailored Jacket' },
    { img: mockimg4, price: '49.99', rate: '5.0', name: 'Textured Sunset Shirt' },
  ];
  const header = 'Best selling';
  const content = 'Get in on the trend with our curated selection of best-selling styles.';

  return (
    <Box className="flex flex-col justify-center items-center gap-y-20 mx-24">
      <Box className="space-y-10 text-center">
        <Typography variant="h3" fontWeight={600}>
          {header}
        </Typography>
        <Typography variant="h6">{content}</Typography>
      </Box>
      <Box className="min-h-screen">
        <List className="flex gap-x-8 gap-y-10 flex-wrap xl:flex-nowrap xl:gap-x-12 xl:gap-y-0">
          {imageBestSelling.map((item, index) => (
            <Box className="flex flex-col space-y-10 w-full">
              <ListItem className="bg-[#C9AB88] rounded-3xl p-0 overflow-hidden hover:bg-[#9c856a] hover:transition-all ease-in-out duration-300">
                <Image src={item.img} alt={`${item}`} key={index} className="w-[380px] h-[516px] hover:scale-105 hover:transition-all ease-in-out duration-300" />
              </ListItem>
              <Box className="space-y-3">
                <Typography variant="h5" className="text-center font-semibold">{item.name}</Typography>
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
      <Button variant="outlined" className="py-4 px-12 text-lg">
        See all
        <ArrowForward className="w-[0.8em] ml-2" />
      </Button>
    </Box>
  );
}

export default MainContent;
