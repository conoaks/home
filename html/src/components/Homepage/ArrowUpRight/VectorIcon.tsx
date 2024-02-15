import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 12L12 0' stroke='#121314' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
