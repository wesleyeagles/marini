import { css, CSSObject, SimpleInterpolation } from 'styled-components';

const sizes = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
};

type Sizes = keyof typeof sizes;

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label as Sizes] = (...args: [CSSObject | TemplateStringsArray, ...SimpleInterpolation[]]) => css`
    @media (min-width: ${sizes[label as Sizes]}) {
      ${css(...args)};
    }
  `;
  return acc;
}, {} as { [key in Sizes]: (...args: [CSSObject | TemplateStringsArray, ...SimpleInterpolation[]]) => ReturnType<typeof css> });