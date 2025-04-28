import styled from 'styled-components';
import SearchBar from '@layout/SearchBar/SearchBar';
import pxToRem from '@utils/pxToRem';
import CategoryIcon from '@assets/icons/category-icon.svg?react';

const Header = () => {
  return (
    <HeaderContainer>
      <AccountArea>
        <AccountText>회원가입</AccountText>
        <Divider></Divider>
        <AccountText>로그인</AccountText>
      </AccountArea>
      <MainHeader>
        <Logo></Logo>
        <SearchBar></SearchBar>
        <FeaturePanel>
          <FeatureText>공구 올리기</FeatureText>
          <Divider></Divider>
          <FeatureText>마이 페이지</FeatureText>
          <Divider></Divider>
          <FeatureText>모아톡</FeatureText>
        </FeaturePanel>
      </MainHeader>
      <CategoryContainer>
        <Category>
          <CategoryMarker />
          <CategoryText>카테고리</CategoryText>
        </Category>
        <GroupPurchase>
          <CategoryText>곧 마감 공구</CategoryText>
          <CategoryText>최신 공구</CategoryText>
        </GroupPurchase>
      </CategoryContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  padding: 10px 435px;
  height: 155px;
  position: fixed;
  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.07);
`;

const AccountArea = styled.div`
  width: 1080px;
  height: ${pxToRem(35)};
  padding: ${pxToRem(12)} ${pxToRem(5)};
  white-space: nowrap;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`;

const AccountText = styled.p`
  ${({ theme }) => theme.fontStyles.Body8}
  line-height: 1.5;
`;

const Divider = styled.span`
  width: 1px;
  height: 13px;
  flex-shrink: 0;
  background-color: #d9d9d9;
`;

const MainHeader = styled.div`
  width: fit-content;
  height: ${pxToRem(65)};
  padding: ${pxToRem(12)} ${pxToRem(2)};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 65px;
`;

const Logo = styled.div`
  width: ${pxToRem(180)};
  height: ${pxToRem(40)};

  background-color: skyblue;
  flex-shrink: 0;
`;

const FeaturePanel = styled.div`
  height: ${pxToRem(65)};

  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  gap: ${pxToRem(24)};

  flex-shrink: 0;
`;

const FeatureText = styled.p`
  ${({ theme }) => {
    theme.fontStyles.Body7;
  }};
  font-weight: 700;
`;

const CategoryContainer = styled.div`
  width: 1080px;
  height: ${pxToRem(55)};
  white-space: nowrap;

  display: flex;
  justify-content: flex-start;
  gap: 145px;
`;

const Category = styled.div`
  width: ${pxToRem(100)};
  height: ${pxToRem(55)};

  display: flex;
  align-items: center;
`;
const CategoryMarker = styled(CategoryIcon)`
  margin-right: 14px;
`;

const GroupPurchase = styled.div`
  widht: ${pxToRem(300)};
  height: ${pxToRem(56)};

  display: flex;
  flex-
  justify-content: center;
  align-items: center;
  
  gap:${pxToRem(88)};
`;
const CategoryText = styled.p`
  ${({ theme }) => {
    theme.fontStyles.Body6.fontStyles;
  }};
  font-weight: 700;
`;
