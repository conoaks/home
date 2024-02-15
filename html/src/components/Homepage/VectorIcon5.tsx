import { memo, SVGProps } from 'react';

const VectorIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 12L12 0' stroke='#121314' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(VectorIcon5);
export { Memo as VectorIcon5 };
