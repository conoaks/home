import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.25 4.49968C3.49264 4.49968 4.5 3.49232 4.5 2.24968C4.5 1.00704 3.49264 -0.000324249 2.25 -0.000324249C1.00736 -0.000324249 9.53674e-07 1.00704 9.53674e-07 2.24968C9.53674e-07 3.49232 1.00736 4.49968 2.25 4.49968Z'
      fill='white'
      stroke='white'
      strokeWidth={2.5}
    />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
