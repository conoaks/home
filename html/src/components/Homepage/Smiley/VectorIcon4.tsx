import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.9 0.25C7.50352 0.933061 6.9346 1.50001 6.25016 1.89411C5.56573 2.28822 4.78979 2.49565 4 2.49565C3.21021 2.49565 2.43427 2.28822 1.74984 1.89411C1.0654 1.50001 0.496478 0.933061 0.1 0.25'
      stroke='#121314'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
