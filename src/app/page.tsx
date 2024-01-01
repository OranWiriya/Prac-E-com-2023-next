import Banner from '@/components/Banner';
import Display from '@/components/Display';
import Feedback from '@/components/Feedback';
import MainContent from '@/components/MainContent';
import OurProduct from '@/components/OurProduct';
import SubContent from '@/components/SubContent';

export default function Home() {
  return (
    <>
      <Display />
      <MainContent />
      <OurProduct />
      <Banner />
      <SubContent />
      <Feedback />
    </>
  );
}
