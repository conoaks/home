import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 3 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.375 2.25C1.99632 2.25 2.5 1.74632 2.5 1.125C2.5 0.50368 1.99632 0 1.375 0C0.75368 0 0.25 0.50368 0.25 1.125C0.25 1.74632 0.75368 2.25 1.375 2.25Z'
      fill='#121314'
    />
  </svg>
);
const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
