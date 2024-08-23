import styled from '@emotion/styled';
import Image from 'next/image';

interface IProps {
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
  handleSearch: () => void;
}

const Search = ({ placeholder, value, setValue, handleSearch }: IProps) => {
  return (
    <Container>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>
        <Image
          src={'/icons/search.svg'}
          alt="search"
          width={30}
          height={30}
          objectFit="contain"
        />
      </SearchButton>
    </Container>
  );
};

export default Search;

const Container = styled.div`
  background-color: #ffffff50;
  display: flex;
  align-items: center;
  gap: 15px;
  height: 80px;
  padding: 15px 15px 15px 40px;
  border-radius: 999px;
`;

const Input = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.colors.gray8};
  font-size: 24px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray8};
  }
`;

const SearchButton = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
`;
