'use client';

import Button from '@/components/common/Button';
import HotKok from '@/components/home/HotKok';
import HotPick from '@/components/home/HotPick';
import MainBanner from '@/components/home/MainBanner';
import SubBanner from '@/components/home/SubBanner';
import Header from '@/components/layout/Header';
import styled from '@emotion/styled';

export default function Home() {
  return (
    <Container>
      <div>
        <Header />
        <MainBanner />
        <HotKok />
        <SubBanner />
        <HotPick />
        <PostPickButtonContainer>
          <Button
            text="픽 등록"
            iconSrc="/icons/plus-white.svg"
            iconAlt="plus"
          />
        </PostPickButtonContainer>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  & > div {
    width: 100%;
    max-width: 1080px;
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding-bottom: 100px;
  }
`;

const PostPickButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;
