import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18 35.9993C27.9411 35.9993 36 27.9405 36 17.9993C36 8.05822 27.9411 -0.000650883 18 -0.000650883C8.05883 -0.000650883 -4.05312e-05 8.05822 -4.05312e-05 17.9993C-4.05312e-05 27.9405 8.05883 35.9993 18 35.9993Z'
      fill='#1777E5'
      stroke='#1777E5'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
