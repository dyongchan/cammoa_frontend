import styled from 'styled-components';
import BannerIcon from '@assets/icons/png/banner.png';
import { mockPosts } from '@pages/Home/MockData/MockData';
import Items from '@components/Items';

const Home = () => {
  return (
    <HomeContainer>
      <BannerContainer>
        <BannerImage src={BannerIcon} alt="banner" />
      </BannerContainer>
      <TodayRecommendContainer>
        <TodayRecommendHeader>
          <HeaderMainText>🛒오늘의 공동구매 추천</HeaderMainText>
          <HeaderSubText>똑똑한 쇼핑의 시작, 오늘의 추천템!</HeaderSubText>
        </TodayRecommendHeader>
        <TodayRecommendMain>
          {mockPosts.map((post) => (
            <Items key={post.id} title={post.title} price={post.price} imageUrl={post.imageUrl} />
          ))}
        </TodayRecommendMain>
      </TodayRecommendContainer>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  padding: 155px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 0;
`;

const BannerContainer = styled.div`
  width: 1100px;
  height: fit-content;
  padding-top: 10px;
  margin-bottom: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const BannerImage = styled.img`
  width: 100%;
  height: fit-content;
`;

const TodayRecommendContainer = styled.div`
  width: 1100px;
  padding: 40px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TodayRecommendHeader = styled.div`
  width: 100%;
  height: 75px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: 10px;
`;
const HeaderMainText = styled.p`
  ${({ theme }) => theme.fontStyles.Body2};
  font-weight: 500;
  line-height: 115%;
`;
const HeaderSubText = styled.p`
  ${({ theme }) => theme.fontStyles.Body6};
  color: #999;
  line-height: 145%;
`;

const TodayRecommendMain = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
`;
