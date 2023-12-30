import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import mockupimg_Banner_1 from '@/components/Assets/Imgs/mockimg_Banner-1.png';
import DotsIcon from '../Assets/icons/dotsIcon';

const headerBanner = 'Exclusive offer';
const textBanner =
  'Unlock the ultimate style upgrade with our exclusive offer Enjoy savings of up to 40% off on our latest New Arrivals';

function Banner() {
  return (
      <Box className="flex items-center gap-y-20 mx-24 gap-x-16 h-[596px] bg-[#B1C7C8]">
        <Box className="ml-20 z-10">
          <Image src={mockupimg_Banner_1} alt="mockupimg" className="scale-90 translate-y-8" />
        </Box>
        <Box className="">
          <Typography variant="h3" className="font-semibold">
            {headerBanner}
          </Typography>
          <Typography variant="h5" className="font-semibold mt-8 mr-48 text-justify">
            {textBanner}
          </Typography>
          <Box className="flex gap-x-10 m-5 mt-10 ml-0">
            <Box className="text-center bg-white p-2 px-4">
              <Typography variant="h5" className="font-bold">
                06
              </Typography>
              <Typography variant="body1" className="">
                Days
              </Typography>
            </Box>
            <Box className="text-center bg-white p-2 px-3">
              <Typography variant="h5" className="font-bold">
                18
              </Typography>
              <Typography variant="body1" className="">
                Hours
              </Typography>
            </Box>
            <Box className="text-center bg-white p-2 px-5">
              <Typography variant="h5" className="font-bold">
                48
              </Typography>
              <Typography variant="body1" className="">
                Min
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            className="mt-10 shadow-none w-[235px] h-[68px] bg-[#8fa1a1] hover:bg-[#778686] hover:shadow-none"
          >
            Buy now
          </Button>
        </Box>
        <Box className="absolute translate-y-52 translate-x-12">
        <DotsIcon />
        </Box>
      </Box>

  );
}

export default Banner;
