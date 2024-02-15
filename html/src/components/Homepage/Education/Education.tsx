import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Education.module.css';

interface Props {
  className?: string;
  classes?: {
    heading?: string;
    root?: string;
  };
  hide?: {
    unnamed?: boolean;
    oxfordUniversity?: boolean;
  };
  text?: {
    _2021Present?: ReactNode;
    bachelorOfEngineeringBEng?: ReactNode;
    bachelorSDegreeInComputerScien?: ReactNode;
    unnamed?: ReactNode;
    oxfordUniversity?: ReactNode;
  };
}
/* @figmaId 21:1792 */
export const Education: FC<Props> = memo(function Education(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.heading || ''} ${classes.heading}`}>
        <div className={classes.funFact}>
          {props.text?._2021Present != null ? (
            props.text?._2021Present
          ) : (
            <div className={classes._2021Present}>2021 - Present</div>
          )}
          {!props.hide?.unnamed &&
            (props.text?.unnamed != null ? props.text?.unnamed : <div className={classes.unnamed}>•</div>)}
          {!props.hide?.oxfordUniversity &&
            (props.text?.oxfordUniversity != null ? (
              props.text?.oxfordUniversity
            ) : (
              <div className={classes.oxfordUniversity}>Oxford University</div>
            ))}
        </div>
        {props.text?.bachelorOfEngineeringBEng != null ? (
          props.text?.bachelorOfEngineeringBEng
        ) : (
          <div className={classes.bachelorOfEngineeringBEng}>Bachelor of Engineering (B. Eng.)</div>
        )}
      </div>
      {props.text?.bachelorSDegreeInComputerScien != null ? (
        props.text?.bachelorSDegreeInComputerScien
      ) : (
        <div className={classes.bachelorSDegreeInComputerScien}>
          Bachelor&#39;s Degree in Computer Science ABC Technical Institute, Jefferson, Missouri.
        </div>
      )}
    </div>
  );
});
