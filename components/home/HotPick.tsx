import styled from '@emotion/styled';
import Sort from './Sort';
import PictureCard from '../common/card/PictureCard';

const HotPick = () => {
  return (
    <Container>
      <TitleContainer>
        <h2>이번주 가장 핫한 픽은?</h2>
        <Sort />
      </TitleContainer>
      <CardList>
        <PictureCard
          name="김민경"
          address="서울 종로구 사직로 161 경복궁"
          image="/images/card-photo-sample.png"
          picked
        />
        <PictureCard
          name="김민경"
          address="서울 종로구 사직로 161 경복궁"
          image="/images/card-photo-sample.png"
        />
        <PictureCard
          name="김민경"
          address="서울 종로구 사직로 161 경복궁"
          image="/images/card-photo-sample.png"
        />
        <PictureCard
          name="김민경"
          address="서울 종로구 사직로 161 경복궁"
          image="/images/card-photo-sample.png"
        />
        <PictureCard
          name="김민경"
          address="서울 종로구 사직로 161 경복궁"
          image="/images/card-photo-sample.png"
        />
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
`;
