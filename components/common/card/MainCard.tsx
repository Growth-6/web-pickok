'use client';

import styled from '@emotion/styled';
import Image from 'next/image';

interface IProps {
  placeName: string;
  placeType: string;
  address: string;
  image: string;
  bookmarked?: boolean;
}

const MainCard = ({
  placeName,
  placeType,
  address,
  image,
  bookmarked,
}: IProps) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image
          src={image}
          alt={`${placeName} 섬네일`}
          layout="fill"
          objectFit="cover"
        />
      </ImageContainer>
      <CardInfoContainer>
        <CardInfo>
          <div>
            <p>{placeName}</p>
            <span>{placeType}</span>
          </div>
          <p>{address}</p>
        </CardInfo>
        <BookmarkButton>
          <Image
            src={`/icons/bookmark${bookmarked ? '-fill' : ''}.svg`}
            alt="bookmark"
            width={30}
            height={30}
            objectFit="contain"
          />
        </BookmarkButton>
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
  height: 220px;
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

const BookmarkButton = styled.button`
  display: flex;
`;
