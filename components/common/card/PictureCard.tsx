'use client';

import styled from '@emotion/styled';
import Image from 'next/image';
import Pick from '@/components/common/Pick';

interface IProps {
  name: string;
  address: string;
  image: string;
  pick?: boolean;
}

const PictureCard = ({ name, address, image, pick }: IProps) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={image} alt="섬네일" layout="fill" objectFit="cover" />
      </ImageContainer>
      {pick ? (
        <PickContainer>
          <Pick />
        </PickContainer>
      ) : null}
      <BookmarkButton>북마크버튼</BookmarkButton>
      <InfoContainer>
        <span>{name}님</span>
        <p>{address}</p>
      </InfoContainer>
    </CardContainer>
  );
};

export default PictureCard;

const CardContainer = styled.div`
  position: relative;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 340px;
  img {
    border-radius: 30px;
  }
`;

const InfoContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  color: ${({ theme }) => theme.colors.gray8};
  span {
    font-size: 20px;
    font-weight: 700;
  }
`;

const BookmarkButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const PickContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
