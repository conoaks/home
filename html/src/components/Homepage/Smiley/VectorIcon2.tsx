import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 3 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.625 2.25C2.24632 2.25 2.75 1.74632 2.75 1.125C2.75 0.50368 2.24632 0 1.625 0C1.00368 0 0.5 0.50368 0.5 1.125C0.5 1.74632 1.00368 2.25 1.625 2.25Z'
      fill='#121314'
    />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
