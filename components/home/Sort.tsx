import styled from '@emotion/styled';

interface IProps {
  options: { name: string; value: number }[];
  sort: number;
  handleChangeSort: (sort: number) => void;
}

const Sort = ({ options, sort, handleChangeSort }: IProps) => {
  return (
    <List>
      {options.map(({ name, value }, idx) => (
        <>
          <Item active={sort === value}>
            <button onClick={() => handleChangeSort(value)}>{name}</button>
          </Item>
          {idx !== options.length - 1 ? <Devider /> : null}
        </>
      ))}
    </List>
  );
};

export default Sort;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Item = styled.li<{ active: boolean }>`
  button {
    font-size: 20px;
    font-weight: 600;
    color: ${({ active, theme }) => (!active ? theme.colors.gray4 : 'inherit')};
  }
`;

const Devider = styled.li`
  width: 1px;
  height: 18px;
  background-color: ${({ theme }) => theme.colors.gray4};
`;
