import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 3 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.625 2.875C2.24632 2.875 2.75 2.37132 2.75 1.75C2.75 1.12868 2.24632 0.625 1.625 0.625C1.00368 0.625 0.5 1.12868 0.5 1.75C0.5 2.37132 1.00368 2.875 1.625 2.875Z'
      fill='#121314'
    />
  </svg>
);
const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
