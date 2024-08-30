'use client';

import styled from '@emotion/styled';
import Image from 'next/image';

const Pick = () => {
  return (
    <PickContainer>
      <div>
        <Image
          src={'/images/intersect.png'}
          alt="intersect"
          width={179}
          height={55}
        />
      </div>
      <span>픽콕 PICK!</span>
    </PickContainer>
  );
};

export default Pick;

const PickContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    display: flex;
  }
  & > span {
    position: absolute;
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray8};
  }
`;
