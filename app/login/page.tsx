'use client';

import emotionStyled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import googleAuth from '@/utils/googleAuth';

export default function Login() {
  const router = useRouter();

  const onClickGoogleLogin = async () => {
    try {
      const { token } = await googleAuth();

      if (token) {
        localStorage.setItem('token', token);
      } else {
        throw new Error('로그인 실패');
      }

      router.push('/');
    } catch (err) {}
  };

  return (
    <PageContainer>
      <ImageContainer>
        <Image
          src="/images/login_bg.png"
          alt="travel-bg"
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </ImageContainer>
      <RightContainer>
        <Image
          src="/images/Logo.svg"
          alt="pickok-logo"
          width={194}
          height={38}
        />
        <TextParagraph>
          나만의 인생샷 스팟 사진찍고
          <br /> 콕 저장하자!
        </TextParagraph>
        <LoginButton onClick={onClickGoogleLogin}>
          <Image
            src="/images/Google-Logo.svg"
            alt="google-login-logo"
            width={30}
            height={30}
          />
          <span>구글로 1초만에 시작하기</span>
        </LoginButton>
      </RightContainer>
    </PageContainer>
  );
}

const PageContainer = emotionStyled.div`
  display: flex;

`;

const ImageContainer = emotionStyled.div`
position: relative;
width: 919px;
height: 100vh;
`;

const TextParagraph = emotionStyled.p`
  color: ${({ theme }) => theme.colors.gray2}
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
`;

const LoginButton = emotionStyled.button`
  all: unset;
  width: 460px;
  height: 58px;
  border-radius: 99px;
  border: 3px solid ${({ theme }) => theme.colors.gray6};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;

`;

const RightContainer = emotionStyled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  padding: 60px;
`;
