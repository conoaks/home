import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Download.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    vector?: string;
  };
  swap?: {
    vector?: ReactNode;
  };
}
/* @figmaId 21:1766 */
export const Download: FC<Props> = memo(function Download(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vector2}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.vector3}>
        <VectorIcon2 className={classes.icon2} />
      </div>
      <div className={classes.vector4}>
        <VectorIcon3 className={classes.icon3} />
      </div>
      <div className={classes.vector5}>{props.swap?.vector || <VectorIcon4 className={classes.icon4} />}</div>
    </div>
  );
});
