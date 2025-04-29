import styled from 'styled-components';
import { Container } from '@components/shared/UIStyles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        캠모아는 학생들 간 공동구매를 쉽고 편하게 진행할 수 있도록 인원 모집을 도와주는
        플랫폼입니다.
      </FooterText>
      <FooterText>
        <FooterSpan>
          공동구매는 캠모아 서비스를 통해 주최자가 직접 진행하며, 팀 캠모아는 공동구매 품목
          통신판매의 당사자가 아닙니다.{' '}
        </FooterSpan>
        <FooterSpan>
          팀 캠모아는 해당 공동구매의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
        </FooterSpan>
        <FooterSpan>
          팀 캠모아는 이용자의 개인정보를 안전하게 보호하며, 외부에 무단으로 제공하거나 유포하지
          않습니다. 신뢰할 수 있는 공동구매 환경을 위해 최선을 다하겠습니다.
        </FooterSpan>
      </FooterText>
      <FooterText>
        © 2025 팀 캠모아 (한국외국어대학교 컴퓨터공학부 캡스톤설계및실습 17팀). All rights
        reserved.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled(Container)`
  width: 100vw;
  padding: 30px 0;
  height: 155px;
  background-color: #f7f7f7;

  justify-content: space-between;
  text-align: center;
`;
const FooterText = styled.p`
  color: #999;
  ${({ theme }) => theme.fontStyles.Body8};
  line-height: 150%;
  font-size: 10px;
`;
const FooterSpan = styled.span`
  display: block;
`;
