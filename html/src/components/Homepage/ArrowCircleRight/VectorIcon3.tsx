import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 1.5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H7.5' stroke='#121314' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
