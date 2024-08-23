'use client';

import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <Container>
      <div></div>
      <Link href={'/'}>
        <Image
          src={'/images/logo.png'}
          alt="픽콕 로고"
          width={130}
          height={25}
          objectFit="contain"
        />
      </Link>
      <button>
        <Image
          src={'/icons/menu.svg'}
          alt="메뉴"
          width={24}
          height={24}
          objectFit="contain"
        />
      </button>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;
