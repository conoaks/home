import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.74996 4.49968C3.9926 4.49968 4.99996 3.49232 4.99996 2.24968C4.99996 1.00704 3.9926 -0.000324249 2.74996 -0.000324249C1.50732 -0.000324249 0.49996 1.00704 0.49996 2.24968C0.49996 3.49232 1.50732 4.49968 2.74996 4.49968Z'
      fill='white'
      stroke='white'
      strokeWidth={2.5}
    />
  </svg>
);
const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
