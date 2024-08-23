import styled from '@emotion/styled';
import Button from '../common/Button';
import MainCard from '../common/card/MainCard';

const HotKok = () => {
  return (
    <Container>
      <h2>요즘 인기있는 KOK</h2>
      <ButtonList>
        <Button text="서울" size="small" />
        <Button text="제주도" variant="outlined" size="small" />
        <Button text="도쿄" variant="outlined" size="small" />
        <Button text="부산" variant="outlined" size="small" />
        <Button text="오키나와" variant="outlined" size="small" />
      </ButtonList>
      <div>지도</div>
      <CardList>
        <li>
          <MainCard
            placeName="경복궁"
            placeType="궁궐"
            address="서울 종로구 사직로 161 경복궁"
            image="/images/card-photo-sample.png"
          />
        </li>
        <li>
          <MainCard
            placeName="경복궁"
            placeType="궁궐"
            address="서울 종로구 사직로 161 경복궁"
            image="/images/card-photo-sample.png"
          />
        </li>
        <li>
          <MainCard
            placeName="경복궁"
            placeType="궁궐"
            address="서울 종로구 사직로 161 경복궁"
            image="/images/card-photo-sample.png"
          />
        </li>
      </CardList>
    </Container>
  );
};

export default HotKok;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  h2 {
    font-size: 32px;
    font-weight: 700;
  }
`;

const ButtonList = styled.ul`
  display: flex;
  gap: 20px;
`;

const CardList = styled.ul`
  display: flex;
  gap: 30px;
  li {
    width: 100%;
  }
`;
