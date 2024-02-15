import { memo, SVGProps } from 'react';

const VectorIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.25 0H10V9.75' stroke='#121314' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(VectorIcon6);
export { Memo as VectorIcon6 };
