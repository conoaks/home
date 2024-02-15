import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.571876 7.17812L3.75 4L0.571876 0.821875'
      stroke='#121314'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
