'use client';

import Image from 'next/image';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      HOME
      <Image src={'/images/bg/home_bg.jpeg'} fill alt='home_bg' />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 83px);
`;
