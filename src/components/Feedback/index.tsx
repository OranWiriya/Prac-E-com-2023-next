import { Box, List, ListItem, Typography } from '@mui/material';
import React from 'react';

function Feedback() {
  const ListFeedback = [
    {
      name: 'Emily Wilson',
      content: `The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!`,
    },
    {
      name: 'Sarah thompson',
      content: `I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!`,
    },
    {
      name: 'Olivia Martinez',
      content: `I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!`,
    },
  ];

  return (
    <Box className="flex flex-col justify-center items-center gap-y-24 mx-24 pt-28">
      <Box>
        <Typography variant='h3' fontWeight="500">Feedback Corner</Typography>
      </Box>
      <List className="flex gap-12">
        {ListFeedback.map((feedback, index) => (
          <Box
            className={
              index % 2 !== 0
                ? 'bg-[#B1C7C8] p-2 pt-10 w-[430px] shadow-md shadow-[#B1C7C8] hover:shadow-none transition-all'
                : 'p-2 pt-10 w-[430px]  shadow-md shadow-[#C9AB88] hover:shadow-none transition-all'
            }
            key={feedback.name + index}
          >
            <ListItem>
              <Box className="text-8xl leading-6">“</Box>
            </ListItem>
            <ListItem>
              <Typography variant="h5" fontWeight="700">
                {feedback.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography fontWeight="500">{feedback.content}</Typography>
            </ListItem>
          </Box>
        ))}
      </List>
    </Box>
  );
}

export default Feedback;
