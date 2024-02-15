import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './SolidBrandsSlack.module.css';
import { UnionIcon2 } from './UnionIcon2.js';
import { UnionIcon3 } from './UnionIcon3.js';
import { UnionIcon4 } from './UnionIcon4.js';
import { UnionIcon } from './UnionIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    union?: ReactNode;
    union2?: ReactNode;
    union3?: ReactNode;
    union4?: ReactNode;
  };
}
/* @figmaId 21:1821 */
export const SolidBrandsSlack: FC<Props> = memo(function SolidBrandsSlack(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.union}>{props.swap?.union || <UnionIcon className={classes.icon} />}</div>
      <div className={classes.union2}>{props.swap?.union2 || <UnionIcon2 className={classes.icon2} />}</div>
      <div className={classes.union3}>{props.swap?.union3 || <UnionIcon3 className={classes.icon3} />}</div>
      <div className={classes.union4}>{props.swap?.union4 || <UnionIcon4 className={classes.icon4} />}</div>
    </div>
  );
});
