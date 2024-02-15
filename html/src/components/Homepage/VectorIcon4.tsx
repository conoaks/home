import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.8 0.49935C15.007 1.86547 13.8691 2.99937 12.5003 3.78758C11.1314 4.57578 9.57953 4.99064 7.99995 4.99064C6.42037 4.99064 4.86849 4.57578 3.49962 3.78758C2.13076 2.99937 0.992907 1.86547 0.199951 0.49935'
      stroke='white'
      strokeWidth={2.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
