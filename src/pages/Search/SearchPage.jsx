import { PageWrapper, Container } from '@components/shared/UIStyles';
import styled from 'styled-components';

const SearchPage = () => {
  return (
    <SearchContainer>
      <SearchHeader>
        <HeaderSubText>공동구매들을 발견했어요!</HeaderSubText>
      </SearchHeader>
    </SearchContainer>
  );
};

export default SearchPage;

const SearchContainer = styled(PageWrapper)`
  margin-top: 45px;

  gap: 45px;
`;

const SearchHeader = styled(Container)`
  width: 1065px;
  padding: 5px 0;

  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;

const HeaderSubText = styled.p`
  color: #333;
  ${({ theme }) => theme.fontStyles.Body6};
  font-weight: 500;
  line-height: 201%;
`;
