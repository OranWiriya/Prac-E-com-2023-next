import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import mockimg1 from '@/components/Assets/Imgs/mockimg1.png';

function Display() {
  const displayText = 'Discover and Find Your Own Fashion!';
  const displayText2 =
    'Explore our curated collection of stylish clothing and accessories tailored to your unique taste.';
  return (
    <Box className="flex justify-center items-center 2xl:gap-x-[300px] gap-x-[60px] mx-24">
      <Box className="space-y-10">
        <Typography variant="h1" fontFamily="serif">
          {displayText}
        </Typography>
        <Typography variant='h5'>{displayText2}</Typography>
      </Box>
      <Box
        className="overflow-hidden lg:min-w-[440px] lg:min-h-[560px] min-w-[300px] h-[420px] bg-[#C9AB88] 
      rounded-tl-[141px] rounded-tr-[45px] rounded-bl-[45px] rounded-br-[141px]"
      >
        <Image
          src={mockimg1}
          alt="mockimg1"
          className="lg:w-[740px] lg:h-[1100px] w-[540px] h-[800px] lg:-translate-x-[120px] lg:-translate-y-[50px] -translate-x-[90px] -translate-y-[30px]"
        />
      </Box>
    </Box>
  );
}

export default Display;
