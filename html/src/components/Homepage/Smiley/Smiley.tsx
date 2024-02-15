import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Smiley.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    vector?: string;
    vector2?: string;
    vector3?: string;
    vector4?: string;
    vector5?: string;
    root?: string;
  };
  swap?: {
    vector?: ReactNode;
    vector2?: ReactNode;
    vector3?: ReactNode;
    vector4?: ReactNode;
  };
}
/* @figmaId 21:185 */
export const Smiley: FC<Props> = memo(function Smiley(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.vector2 || ''} ${classes.vector2}`}>
        {props.swap?.vector || <VectorIcon className={classes.icon} />}
      </div>
      <div className={`${props.classes?.vector3 || ''} ${classes.vector3}`}>
        {props.swap?.vector2 || <VectorIcon2 className={classes.icon2} />}
      </div>
      <div className={`${props.classes?.vector4 || ''} ${classes.vector4}`}>
        {props.swap?.vector3 || <VectorIcon3 className={classes.icon3} />}
      </div>
      <div className={`${props.classes?.vector5 || ''} ${classes.vector5}`}>
        {props.swap?.vector4 || <VectorIcon4 className={classes.icon4} />}
      </div>
    </div>
  );
});
