import { css } from 'styled-components';

//타이포 정리
const bodyBaseFontStyles = css`
  font-family: 'Pretendard Variable';
  line-height: 120%;
`;

const bodyStyles = {
  Body1: css`
    ${bodyBaseFontStyles}
    font-size: 36px;
  `,
  Body2: css`
    ${bodyBaseFontStyles}
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -1px;
  `,
  Body3: css`
    ${bodyBaseFontStyles}
    font-size: 24px;
    letter-spacing: 0.72px;
  `,
  Body4: css`
    ${bodyBaseFontStyles}
    font-size: 21px;
  `,
  Body5: css`
    ${bodyBaseFontStyles}
    font-size: 18px;
    letter-spacing: 0.36px;
  `,
  Body6: css`
    ${bodyBaseFontStyles}
    font-size: 16px;
    font-weight: 700;
    letter-space: -0.3px;
  `,
  Body7: css`
    ${bodyBaseFontStyles}
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.6px;
  `,
  Body8: css`
    ${bodyBaseFontStyles}
    font-size: 12px;
    font-weight: 700;
    letter-space: -0.3px;
  `,
};

const fontStyles = {
  ...bodyStyles,
};

export default fontStyles;
