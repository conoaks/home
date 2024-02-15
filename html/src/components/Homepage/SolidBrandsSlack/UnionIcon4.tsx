import { memo, SVGProps } from 'react';

const UnionIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.5 0.5C1.39386 0.5 0.5 1.39386 0.5 2.5V7.5C0.5 8.60614 1.39386 9.5 2.5 9.5C3.60614 9.5 4.5 8.60614 4.5 7.5V2.5C4.5 1.39386 3.60614 0.5 2.5 0.5Z'
      fill='#2DB67E'
    />
    <path
      d='M8.5 5.5C7.39386 5.5 6.5 6.39386 6.5 7.5V9C6.5 9.27614 6.72386 9.5 7 9.5H8.5C9.60614 9.5 10.5 8.60614 10.5 7.5C10.5 6.39386 9.60614 5.5 8.5 5.5Z'
      fill='#2DB67E'
    />
  </svg>
);
const Memo = memo(UnionIcon4);
export { Memo as UnionIcon4 };
