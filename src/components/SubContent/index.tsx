import { Box, List, ListItem, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import mockAccessories from '@/components/Assets/Imgs/mocking_Accessories.png';
import mockDresses from '@/components/Assets/Imgs/mocking_Dresses.png';
import mockOuterwear from '@/components/Assets/Imgs/mocking_Outerwear.png';


function SubContent() {
  const imageBestSelling = [
    { img: mockAccessories, title: 'Accessories', description: 'Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.' },
    { img: mockDresses, title: 'Dresses', description: 'Explore a stunning range of designer dresses, including evening gowns and chic day dresses.' },
    { img: mockOuterwear, title: 'Outerwear', description: 'Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.' },
  ];
  const header = 'Designer Clothes For You';
  const content = 'Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!';

  return (
    <Box className="flex flex-col justify-center items-center gap-y-20 mx-24">
      <Box className="space-y-12 text-center">
        <Typography variant="h3" fontWeight={600}>
          {header}
        </Typography>
        <Typography variant="h6">{content}</Typography>
      </Box>
      <Box className="min-h-screen">
        <List className="flex gap-x-8 flex-wrap xl:flex-nowrap xl:gap-x-12 xl:gap-y-0">
          {imageBestSelling.map((item, index) => (
            <Box className="flex flex-col space-y-6 w-full items-center">
              <ListItem className="bg-[#C9AB88] p-0 w-fit overflow-hidden hover:bg-[#9c856a] hover:transition-all ease-in-out duration-300">
                <Image src={item.img} alt={`${item}`} key={index} className="w-[430px] h-[566px] hover:scale-105 hover:transition-all ease-in-out duration-300" />
              </ListItem>
              <Box className="space-y-1">
                <Typography variant="h4" className="text-center font-semibold">{item.title}</Typography>
                <Box className="text-center">
                  <Typography component="span" variant='h6' lineHeight='150%' >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default SubContent;
