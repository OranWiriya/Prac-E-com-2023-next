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
    { img: mockimg2, price: '38.99', rate: '5.0' },
    { img: mockimg3, price: '62.99', rate: '4.9' },
    { img: mockimg4, price: '49.99', rate: '5.0' },
  ];
  return (
    <Box className="flex flex-col justify-center items-center gap-y-20 mx-24">
      <Box className="space-y-10 text-center">
        <Typography variant="h3" fontWeight={600}>
          Best selling
        </Typography>
        <Typography variant="h6">Get in on the trend with our curated selection of best-selling styles.</Typography>
      </Box>
      <Box className="h-screen">
        <List className="flex space-x-12">
          {imageBestSelling.map((item, index) => (
            <Box className="flex flex-col space-y-10">
              <ListItem className="bg-[#C9AB88] rounded-3xl pb-0">
                <Image src={item.img} alt={`${item}`} key={index} className="w-[380px] h-[516px]" />
              </ListItem>
              <Box className="space-y-3">
                <Typography variant="h5" className="text-center font-semibold">
                  Regular Fit Long Sleeve Top
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
      <Button variant="outlined" className="py-2 px-8">
        See all
        <ArrowForward className="w-[0.8em] ml-2" />
      </Button>
    </Box>
  );
}

export default MainContent;
