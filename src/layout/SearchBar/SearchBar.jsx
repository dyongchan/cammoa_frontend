import styled from 'styled-components';

const SearchBar = () => {
  return (
    <SearchBarForm>
      <SearchInput placeholder="검색어를 입력해주세요" />
      <SearchButton type="submit"></SearchButton>
    </SearchBarForm>
  );
};

export default SearchBar;

const SearchBarForm = styled.form`
  width: 470px;
  height: 65px;
  padding: 12px 2px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SearchInput = styled.input`
  width: 100%;
  padding: 17px 12px;

  color: #a7b2bc;
  ${({ theme }) => theme.fontStyles.Body7}
  border: 2px solid #3092FA;
`;
const SearchButton = styled.button`
  width: fit-content;
  height: fit-content;
`;
