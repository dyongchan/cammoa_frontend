import styled from 'styled-components';
import SearchBar from '@layout/SearchBar/SearchBar';

const Header = () => {
  return (
    <HeaderContainer>
      <AccountArea>
        <AccountText>회원가입</AccountText>
        <AccountText>로그인</AccountText>
      </AccountArea>
      <MainHeader>
        <Logo></Logo>
        <SearchBar></SearchBar>
        <MainText></MainText>
      </MainHeader>
      <div></div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  height: 155px;
  padding: 0 435px;

  position: fixed;
  flex-direction: column;
  align-items: center;

  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.07);
`;
const AccountArea = styled.div`
  height: 35px;
  padding: 12px 0;
  white-space: nowrap;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`;

const AccountText = styled.p`
  ${({ theme }) => theme.fontStyles.Body8}
  line-height: 12px;
`;

const MainHeader = styled.div`
  height: 65px;
  padding: 12px 2px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 65px;
`;
const Logo = styled.div`
  width: 180px;
  height: 40px;

  background-color: skyblue;
`;

const MainText = styled.div`
  width: 265px;
  height: 65px;

  background-color: black;
`;
