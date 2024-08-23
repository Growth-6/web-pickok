import styled from '@emotion/styled';
import Sort from './Sort';
import PictureCard from '../common/card/PictureCard';
import { HOT_PICK_SORT_OPTIONS } from '@/contants/common';
import { useState } from 'react';

const HotPick = () => {
  const [sort, setSort] = useState(1);

  const handleChangeSort = (value: number) => {
    setSort(value);
  };

  return (
    <Container>
      <TitleContainer>
        <h2>이번주 가장 핫한 픽은?</h2>
        <Sort
          options={HOT_PICK_SORT_OPTIONS}
          sort={sort}
          handleChangeSort={handleChangeSort}
        />
      </TitleContainer>
      <CardList>
        <li>
          <PictureCard
            name="김민경"
            address="서울 종로구 사직로 161 경복궁"
            image="/images/card-photo-sample.png"
            picked
          />
        </li>
        <li>
          <PictureCard
            name="김민경"
            address="서울 종로구 사직로 161 경복궁"
            image="/images/card-photo-sample.png"
          />
        </li>
        <li>
          <PictureCard
            name="김민경"
            address="서울 종로구 사직로 161 경복궁"
            image="/images/card-photo-sample.png"
          />
        </li>
        <li>
          <PictureCard
            name="김민경"
            address="서울 종로구 사직로 161 경복궁"
            image="/images/card-photo-sample.png"
          />
        </li>
        <li>
          <PictureCard
            name="김민경"
            address="서울 종로구 사직로 161 경복궁"
            image="/images/card-photo-sample.png"
          />
        </li>
      </CardList>
    </Container>
  );
};

export default HotPick;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  h2 {
    font-size: 32px;
    font-weight: 700;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  & > li:first-of-type {
    grid-column: 1 / span 2;
  }
`;
