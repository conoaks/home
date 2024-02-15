import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14.5 0H19C19.1989 0 19.3897 0.0790171 19.5303 0.219669C19.671 0.360322 19.75 0.551088 19.75 0.75V6.75C19.75 6.94891 19.671 7.13968 19.5303 7.28033C19.3897 7.42098 19.1989 7.5 19 7.5H1C0.801088 7.5 0.610322 7.42098 0.46967 7.28033C0.329018 7.13968 0.25 6.94891 0.25 6.75V0.75C0.25 0.551088 0.329018 0.360322 0.46967 0.219669C0.610322 0.0790171 0.801088 0 1 0H5.5'
      stroke='#121314'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
