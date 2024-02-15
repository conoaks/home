import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './SolidBrandsAdobeIllustrator.module.css';
import { SubtractIcon2 } from './SubtractIcon2.js';
import { SubtractIcon } from './SubtractIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    subtract?: boolean;
    subtract2?: boolean;
  };
}
/* @figmaId 21:1826 */
export const SolidBrandsAdobeIllustrator: FC<Props> = memo(function SolidBrandsAdobeIllustrator(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.subtract && (
        <div className={classes.subtract}>
          <SubtractIcon className={classes.icon} />
        </div>
      )}
      {!props.hide?.subtract2 && (
        <div className={classes.subtract2}>
          <SubtractIcon2 className={classes.icon2} />
        </div>
      )}
    </div>
  );
});
