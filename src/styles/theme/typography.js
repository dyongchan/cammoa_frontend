import { css } from 'styled-components';

const bodyBaseFontStyles = css`
  font-weight: 700;
  line-height: 100%;
`;

const bodyStyles = {
  Body1: css`
    ${bodyBaseFontStyles}
    font-size: 36px;
  `,
  Body2: css`
    ${bodyBaseFontStyles}
    font-size: 24px;
    letter-spacing: 0.72px;
  `,
  Body3: css`
    ${bodyBaseFontStyles}
    font-size: 21px;
  `,
  Body4: css`
    ${bodyBaseFontStyles}
    font-size: 18px;
    letter-spacing: 0.36px;
  `,
  Body5: css`
    ${bodyBaseFontStyles}
    font-size: 16px;
  `,
  Body6: css`
    ${bodyBaseFontStyles}
    font-size: 14px;
  `,
  Body7: css`
    ${bodyBaseFontStyles}
    font-size: 12px;
  `,
};

const fontStyles = {
  ...bodyStyles,
};

export default fontStyles;
