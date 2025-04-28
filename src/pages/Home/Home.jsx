import styled from 'styled-components';
import BannerIcon from '@assets/icons/png/banner.png';

const Home = () => {
  return (
    <HomeContainer>
      <BannerContainer>
        <BannerImage src={BannerIcon} alt="banner" />
      </BannerContainer>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  padding: 155px 435px 0 435px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
  width: fit-content;
  height: fit-content;
`;
