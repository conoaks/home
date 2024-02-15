import { memo, SVGProps } from 'react';

const FreelancerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.6898 37.4988H18.5193V19.7807H25.9689V37.5H33.75V13.2279H18.5193V11.7237C18.5193 10.0729 19.6649 9.05403 21.4795 9.05403H25.9677V2.5H20.1911C14.509 2.5 10.6898 6.04435 10.6898 11.2371V13.2279H6.25V19.7819H10.6898V37.4988Z'
      fill='#1777E5'
    />
  </svg>
);
const Memo = memo(FreelancerIcon);
export { Memo as FreelancerIcon };
