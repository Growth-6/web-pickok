import styled from '@emotion/styled';
import Button from '../common/Button';
import Search from '../common/Search';
import { useState } from 'react';

const MainBanner = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {};

  return (
    <Container imgUrl={'/images/banner.png'}>
      <ButtonContainer>
        <Button variant="outlined" text="MZ들의 스팟 보러가기 >" />
      </ButtonContainer>
      <SearchContainer>
        <p>요새 MZ들 사이에 힙한 스팟이{'\n'}궁금하다면?</p>
        <Search
          value={searchValue}
          setValue={setSearchValue}
          placeholder="어느 도시로 떠나시나요?"
          handleSearch={handleSearch}
        />
      </SearchContainer>
    </Container>
  );
};

export default MainBanner;

const Container = styled.div<{ imgUrl: string }>`
  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: contain;
  background-repeat: no-repeat;
  height: 538px;
  position: relative;
  display: flex;
  align-items: end;
  padding: 60px 120px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  p {
    font-size: 40px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray8};
  }
`;
