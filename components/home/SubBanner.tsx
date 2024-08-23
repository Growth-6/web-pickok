import styled from '@emotion/styled';
import Image from 'next/image';
import Button from '../common/Button';

const SubBanner = () => {
  return (
    <Container>
      <TextContainer>
        <p>전신샷 사진포즈{'\n'}추천 모음 ZIP</p>
        <div>
          <Button variant="outlined" text="자세히 보기" size="small" />
        </div>
      </TextContainer>
      <Image
        src={'/images/photographers.png'}
        alt="photographers"
        width={314}
        height={159}
        objectFit="contain"
      />
    </Container>
  );
};

export default SubBanner;

const Container = styled.div`
  padding: 40px 50px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.main3};
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;
