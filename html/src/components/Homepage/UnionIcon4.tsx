import { memo, SVGProps } from 'react';

const UnionIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M4.16667 0.5C2.3231 0.5 0.833334 1.98976 0.833334 3.83333V12.1667C0.833334 14.0102 2.3231 15.5 4.16667 15.5C6.01024 15.5 7.5 14.0102 7.5 12.1667V3.83333C7.5 1.98976 6.01024 0.5 4.16667 0.5Z'
      fill='#2DB67E'
    />
    <path
      d='M14.1667 8.83333C12.3231 8.83333 10.8333 10.3231 10.8333 12.1667V14.6667C10.8333 15.1269 11.2064 15.5 11.6667 15.5H14.1667C16.0102 15.5 17.5 14.0102 17.5 12.1667C17.5 10.3231 16.0102 8.83333 14.1667 8.83333Z'
      fill='#2DB67E'
    />
  </svg>
);
const Memo = memo(UnionIcon4);
export { Memo as UnionIcon4 };
