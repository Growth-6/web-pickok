'use client';

import styled from '@emotion/styled';
import Image from 'next/image';
import { CardInfo, CardInfoContainer } from './MainCard';

interface IProps {
  placeName: string;
  placeType: string;
  address: string;
  images: string[];
  bookmarked?: boolean;
}

const MapCard = ({
  placeName,
  placeType,
  address,
  images,
  bookmarked,
}: IProps) => {
  return (
    <CardContainer>
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
            width={24}
            height={24}
            objectFit="contain"
          />
        </BookmarkButton>
      </CardInfoContainer>
      <ImagesContainer>
        {images.slice(0, 3).map((v, idx) => (
          <ImageContainer>
            <Image
              key={v}
              src={v}
              alt={`섬네일${idx}`}
              width={104}
              height={104}
              objectFit="cover"
            />
            {images.length > 3 && idx === 2 ? (
              <MoreImage>+{images.length - 2}</MoreImage>
            ) : null}
          </ImageContainer>
        ))}
      </ImagesContainer>
    </CardContainer>
  );
};

export default MapCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 30px;
`;

const ImagesContainer = styled.div`
  display: flex;
  gap: 9px;
`;

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  img {
    border-radius: 10px;
  }
`;

const MoreImage = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  background: #00000020;
  backdrop-filter: blur(4px);
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray8};
  font-size: 18px;
  font-weight: 700;
`;

const BookmarkButton = styled.button`
  display: flex;
`;
