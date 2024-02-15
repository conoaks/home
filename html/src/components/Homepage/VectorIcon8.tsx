import { memo, SVGProps } from 'react';

const VectorIcon8 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z'
      fill='white'
      stroke='white'
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
  </svg>
);
const Memo = memo(VectorIcon8);
export { Memo as VectorIcon8 };
