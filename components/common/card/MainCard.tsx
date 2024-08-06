'use client';

import styled from '@emotion/styled';
import Image from 'next/image';

interface IProps {
  placeName: string;
  placeType: string;
  address: string;
  image: string;
}

const MainCard = ({ placeName, placeType, address, image }: IProps) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={image} alt="섬네일" layout="fill" objectFit="cover" />
      </ImageContainer>
      <CardInfoContainer>
        <CardInfo>
          <div>
            <p>{placeName}</p>
            <span>{placeType}</span>
          </div>
          <p>{address}</p>
        </CardInfo>
        <button>북마크버튼</button>
      </CardInfoContainer>
    </CardContainer>
  );
};

export default MainCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 230px;
  img {
    border-radius: 30px;
  }
`;

export const CardInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 8px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  & > div {
    display: flex;
    align-items: end;
    gap: 6px;
    p {
      font-size: 20px;
      font-weight: 700;
    }
    span {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray3};
    }
  }
`;
