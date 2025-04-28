import pxToRem from '@utils/pxToRem';
import styled from 'styled-components';
import Magnifier from '@assets/icons/search-icon.svg?react';

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
  width: ${pxToRem(470)};
  height: ${pxToRem(65)};
  padding: ${pxToRem(12)} ${pxToRem(2)};

  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 12px 17px;

  color: #a7b2bc;
  ${({ theme }) => theme.fontStyles.Body7}
  border: 2px solid #3092FA;
`;
const SearchButton = styled(Magnifier)`
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: 17px;
`;
