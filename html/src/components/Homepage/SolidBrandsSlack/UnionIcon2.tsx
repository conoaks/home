import { memo, SVGProps } from 'react';

const UnionIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.5 12.5C7.39386 12.5 6.5 13.3939 6.5 14.5V19.5C6.5 20.6061 7.39386 21.5 8.5 21.5C9.60614 21.5 10.5 20.6061 10.5 19.5V14.5C10.5 13.3939 9.60614 12.5 8.5 12.5Z'
      fill='#DF1D5A'
    />
    <path
      d='M2.5 12.5C1.39386 12.5 0.5 13.3939 0.5 14.5C0.5 15.6061 1.39386 16.5 2.5 16.5C3.60614 16.5 4.5 15.6061 4.5 14.5V13C4.5 12.7239 4.27614 12.5 4 12.5H2.5Z'
      fill='#DF1D5A'
    />
    <path
      d='M2.5 6.5C1.39386 6.5 0.5 7.39386 0.5 8.5C0.5 9.60614 1.39386 10.5 2.5 10.5H7.5C8.60614 10.5 9.5 9.60614 9.5 8.5C9.5 7.39386 8.60614 6.5 7.5 6.5H2.5Z'
      fill='#DF1D5A'
    />
    <path
      d='M7.5 0.5C6.39386 0.5 5.5 1.39386 5.5 2.5C5.5 3.60614 6.39386 4.5 7.5 4.5H9C9.27614 4.5 9.5 4.27614 9.5 4V2.5C9.5 1.39386 8.60614 0.5 7.5 0.5Z'
      fill='#DF1D5A'
    />
  </svg>
);
const Memo = memo(UnionIcon2);
export { Memo as UnionIcon2 };
