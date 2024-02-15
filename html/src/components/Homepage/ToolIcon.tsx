import { memo, SVGProps } from 'react';

const ToolIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M27.475 16.175L24.8183 24.5617L22.9433 10C18.76 10 16.51 12.9967 15.3367 16.1567L12.0967 24.58L11.6417 16.2467C11.395 12.3733 7.85833 10.0167 5 10.0167L8.45667 31.0833C12.84 31.0667 15.2067 28.0867 16.445 24.9267L19.185 17.765C19.21 18.0567 21.0783 31.085 21.0783 31.085C25.4817 31.085 27.8483 28.29 29.1167 25.2383L35.2833 10.0183C30.9417 10.0183 28.6533 12.9967 27.4717 16.175H27.475Z'
      fill='#4353FF'
    />
  </svg>
);
const Memo = memo(ToolIcon);
export { Memo as ToolIcon };
