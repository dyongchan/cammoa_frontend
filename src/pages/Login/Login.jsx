import { useState } from 'react';
import styled from 'styled-components';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ id, pw });
  };

  return (
    <PageBody>
      <Form onSubmit={handleSubmit}>
        <Title>로그인</Title>

        <Input
          type="text"
          placeholder="아이디를 입력해주세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          required
        />

        <ButtonGroup>
          <PrimaryButton type="submit">로그인</PrimaryButton>
          <SecondaryButton type="button">회원가입</SecondaryButton>
        </ButtonGroup>
      </Form>
    </PageBody>
  );
};

export default Login;

const PageBody = styled.div`
  display: flex;
  width: 1920px;
  height: 627px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 153px;
  gap: 152px;
  flex-shrink: 0;
`;

const Form = styled.form`
  display: flex;
  width: 340px;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h2`
  align-self: stretch;
  color: #333;
  text-align: center;
  font-family: var(--font-family-Font-2, 'Noto Sans KR');
  font-size: var(--font-size-20, 20px);
  font-style: normal;
  font-weight: var(--font-weight-700, 700);
  line-height: var(--line-height-20, 20px);
  padding-bottom: 30px;
`;

const Input = styled.input`
  display: flex;
  height: 55px;
  padding: 16.5px 12px 17.5px 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 4px;
  border: var(--stroke-weight-1, 1px) solid #ddd;
  margin-bottom: 10px;
  color: #757575;
  font-family: var(--font-family-Font-2, 'Noto Sans KR');
  font-size: var(--font-size-14, 14px);
  font-style: normal;
  font-weight: var(--font-weight-700, 700);
  line-height: normal;
  letter-spacing: var(--letter-spacing--0_6, -0.6px);
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--item-spacing-10, 10px);
  width: 100%;
  padding-top: 10px;
`;

const PrimaryButton = styled.button`
  height: 55px;
  padding: 19px 10px;
  align-items: center;
  align-self: stretch;
  border-radius: 3px;
  background: #3092fa;

  color: #fff;
  text-align: center;

  /* www.kurly.com/Semantic/Button */
  font-family: var(--font-family-Font-2, 'Noto Sans KR');
  font-size: var(--font-size-16, 16px);
  font-style: normal;
  font-weight: var(--font-weight-700, 700);
  line-height: var(--line-height-16, 16px); /* 100% */
`;

const SecondaryButton = styled.button`
  display: flex;
  height: 55px;
  padding: 19px 11px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  border-radius: 3px;
  border: var(--stroke-weight-1, 1px) solid #3092fa;

  align-self: stretch;
  color: #3092fa;
  text-align: center;

  /* www.kurly.com/Semantic/Button */
  font-family: var(--font-family-Font-2, 'Noto Sans KR');
  font-size: var(--font-size-16, 16px);
  font-style: normal;
  font-weight: var(--font-weight-700, 700);
  line-height: var(--line-height-16, 16px); /* 100% */
`;
