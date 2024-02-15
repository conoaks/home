import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ArrowCircleRight } from './ArrowCircleRight/ArrowCircleRight';
import { ArrowUpRight } from './ArrowUpRight/ArrowUpRight';
import { CallingIcon } from './CallingIcon.js';
import { Download } from './Download/Download';
import { Education } from './Education/Education';
import { FreelancerIcon } from './FreelancerIcon.js';
import classes from './Homepage.module.css';
import { ImageIcon } from './ImageIcon.js';
import { SendIcon } from './SendIcon.js';
import { Smiley } from './Smiley/Smiley';
import { SolidBrandsAdobeIllustrator } from './SolidBrandsAdobeIllustrator/SolidBrandsAdobeIllustrator';
import { SolidBrandsSlack } from './SolidBrandsSlack/SolidBrandsSlack';
import { ToolIcon } from './ToolIcon.js';
import { UnionIcon2 } from './UnionIcon2.js';
import { UnionIcon3 } from './UnionIcon3.js';
import { UnionIcon4 } from './UnionIcon4.js';
import { UnionIcon } from './UnionIcon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon5 } from './VectorIcon5.js';
import { VectorIcon6 } from './VectorIcon6.js';
import { VectorIcon7 } from './VectorIcon7.js';
import { VectorIcon8 } from './VectorIcon8.js';
import { VectorIcon9 } from './VectorIcon9.js';
import { VectorIcon10 } from './VectorIcon10.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  hide?: {
    unnamed?: boolean;
    oxfordUniversity?: boolean;
    unnamed2?: boolean;
    oxfordUniversity2?: boolean;
    subtract?: boolean;
    subtract2?: boolean;
  };
}
/* @figmaId 21:2948 */
export const Homepage: FC<Props> = memo(function Homepage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.header}>
        <div className={classes.navigation}>
          <div className={classes.logo}>
            <Smiley
              className={classes.smiley}
              classes={{
                vector: classes.vector,
                vector2: classes.vector2,
                vector3: classes.vector3,
                vector4: classes.vector4,
                vector5: classes.vector5,
              }}
              swap={{
                vector: (
                  <div className={classes.vector2}>
                    <VectorIcon className={classes.icon} />
                  </div>
                ),
                vector2: (
                  <div className={classes.vector3}>
                    <VectorIcon2 className={classes.icon2} />
                  </div>
                ),
                vector3: (
                  <div className={classes.vector4}>
                    <VectorIcon3 className={classes.icon3} />
                  </div>
                ),
                vector4: (
                  <div className={classes.vector5}>
                    <VectorIcon4 className={classes.icon4} />
                  </div>
                ),
              }}
            />
            <div className={classes.conner}>Conner</div>
          </div>
          <div className={classes.navItem}>
            <div className={classes.home}>Home</div>
            <div className={classes.about}>About</div>
            <div className={classes.work}>Work</div>
            <div className={classes.contact}>Contact</div>
            <button className={classes.button}>
              <div className={classes.conoaksGmailCom}>conoaks@gmail.com</div>
            </button>
          </div>
        </div>
        <div className={classes.frame552}>
          <div className={classes.rectangle34}></div>
          <div className={classes.content}>
            <div className={classes.heading6}>
              <div className={classes.frame43}>
                <div className={classes.devider}></div>
                <div className={classes.techEnthusiast}>Tech Enthusiast </div>
              </div>
              <div className={classes.helloIMConnerOaks}>
                <div className={classes.textBlock}>Hello, I’m</div>
                <div className={classes.textBlock2}>Conner Oaks.</div>
              </div>
            </div>
            <div className={classes.iMACurrentFloridaStateUniversi}>
              I’m a current Florida State University student majoring in Information Technology. I have a background in
              3D printing, CAD modeling, Photo Editing, Networking, Coding, and Basic Manufacturing.
            </div>
            <div className={classes.button2}>
              <button className={classes.button3}>
                <div className={classes.sayHello}>Say Hello</div>
              </button>
              <button className={classes.button4}>
                <div className={classes.sayHello2}>View Portfolio</div>
                <ArrowUpRight
                  classes={{ vector: classes.vector6 }}
                  swap={{
                    vector: <VectorIcon5 className={classes.icon5} />,
                    vector2: <VectorIcon6 className={classes.icon6} />,
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.devider2}></div>
      <div className={classes.about2}>
        <div className={classes.bG}></div>
        <div className={classes.about3}>
          <div className={classes.image}>
            <ImageIcon className={classes.icon15} />
          </div>
          <div className={classes.content2}>
            <div className={classes.visualDesignerWebflowDeveloper}>Visual Designer &amp; Webflow Developer.</div>
            <div className={classes.drivenITEnthusiastWithALoveOf3}>
              Driven IT enthusiast with a love of 3D modeling, coding, and networking. From stocking grocery shelves to
              leading the Frozen Food Department, I’ve honed my organizational prowess. Armed with certifications in
              Adobe tools and Autodesk Inventor, I’m ready to innovate and create. Let’s turn bits into brilliance!
            </div>
          </div>
          <div className={classes.button5}>
            <button className={classes.button6}>
              <Download
                classes={{ vector: classes.vector7 }}
                swap={{
                  vector: <VectorIcon7 className={classes.icon7} />,
                }}
              />
              <div className={classes.sayHello3}>Download Resume</div>
            </button>
          </div>
        </div>
        <div className={classes.resume}>
          <div className={classes.education4}>
            <div className={classes.heading7}>
              <div className={classes.rectangle8}></div>
              <div className={classes.education5}>Education</div>
            </div>
            <Education
              className={classes.fSU}
              classes={{ heading: classes.heading }}
              hide={{
                unnamed: true,
                oxfordUniversity: true,
              }}
              text={{
                _2021Present: <div className={classes._2021Present}>Expected Graduation 2025</div>,
                bachelorOfEngineeringBEng: (
                  <div className={classes.bachelorOfEngineeringBEng}>Florida State University (FSU)</div>
                ),
                bachelorSDegreeInComputerScien: (
                  <div className={classes.bachelorSDegreeInComputerScien}>
                    Bachelors Degree in Information Technology
                  </div>
                ),
              }}
            />
            <Education
              className={classes.tCC}
              classes={{ heading: classes.heading2 }}
              hide={{
                unnamed: true,
                oxfordUniversity: true,
              }}
              text={{
                _2021Present: <div className={classes._2021Present2}>Graduated 2021</div>,
                bachelorOfEngineeringBEng: (
                  <div className={classes.bachelorOfEngineeringBEng2}>Tallahassee Community College (TCC)</div>
                ),
                bachelorSDegreeInComputerScien: (
                  <div className={classes.bachelorSDegreeInComputerScien2}>Associates Degree for transfer to FSU</div>
                ),
              }}
            />
          </div>
          <div className={classes.workHistory}>
            <div className={classes.heading8}>
              <div className={classes.rectangle82}></div>
              <div className={classes.workHistory2}>Work History</div>
            </div>
            <Education
              className={classes.education}
              classes={{ heading: classes.heading3 }}
              text={{
                _2021Present: <div className={classes._2021Present3}>Jan ‘21 to Present</div>,
                unnamed: <div className={classes.unnamed}>-</div>,
                oxfordUniversity: <div className={classes.oxfordUniversity}>Winn-Dixie</div>,
                bachelorOfEngineeringBEng: (
                  <div className={classes.bachelorOfEngineeringBEng3}>Stocker/Frozen Food Lead</div>
                ),
                bachelorSDegreeInComputerScien: (
                  <div className={classes.bachelorSDegreeInComputerScien3}>
                    I started as the lowest man on the totem pole, stocking the grocery shelves and maintaining floor
                    conditions while helping customers to now running the Frozen Food Department of the store. My job
                    entails ordering the weekly ad, Stocking the trucks that arrive, building displays, and managing
                    back room inventory.
                  </div>
                ),
              }}
            />
            <Education
              className={classes.education2}
              classes={{ heading: classes.heading4 }}
              text={{
                _2021Present: <div className={classes._2021Present4}>Mar ‘19 to Dec ‘20</div>,
                unnamed: <div className={classes.unnamed2}>-</div>,
                oxfordUniversity: <div className={classes.oxfordUniversity2}>Tasty J’s</div>,
                bachelorOfEngineeringBEng: <div className={classes.bachelorOfEngineeringBEng4}>Cook/Server</div>,
                bachelorSDegreeInComputerScien: (
                  <div className={classes.bachelorSDegreeInComputerScien4}>
                    I worked here as a cook and a server, usually at the same time, bouncing between taking the orders
                    of people who walked in/called in, and cooking the orders for them, often being one of the only
                    employees in the building.
                  </div>
                ),
              }}
            />
            <Education
              className={classes.education3}
              classes={{ heading: classes.heading5 }}
              text={{
                _2021Present: <div className={classes._2021Present5}>‘19 to ‘21</div>,
                unnamed: <div className={classes.unnamed3}>-</div>,
                oxfordUniversity: <div className={classes.oxfordUniversity3}>FIRST Robotics Team 6145</div>,
                bachelorOfEngineeringBEng: (
                  <div className={classes.bachelorOfEngineeringBEng5}>Build Team Member/ Build Team Leader</div>
                ),
                bachelorSDegreeInComputerScien: (
                  <div className={classes.bachelorSDegreeInComputerScien5}>
                    I joined my High School&#39;s FIRST robotics team my sophomore year of school, joining the build
                    team, and learning to use a multitude of power tools including Angle Grinders, Miter Saws, Grinders,
                    CNC, 3D Printers and Laser Cutters to name a few.
                  </div>
                ),
              }}
            />
          </div>
          <div className={classes.toolUse}>
            <div className={classes.heading9}>
              <div className={classes.rectangle83}></div>
              <div className={classes.toolsIUSE}>Tools i USE</div>
            </div>
            <div className={classes.tools}>
              <div className={classes.row}>
                <div className={classes.tools2}>
                  <div className={classes.tool}>
                    <SolidBrandsSlack
                      className={classes.solidBrandsSlack}
                      swap={{
                        union: <UnionIcon className={classes.icon8} />,
                        union2: <UnionIcon2 className={classes.icon9} />,
                        union3: <UnionIcon3 className={classes.icon10} />,
                        union4: <UnionIcon4 className={classes.icon11} />,
                      }}
                    />
                  </div>
                  <div className={classes.slack}>Slack</div>
                </div>
                <div className={classes.tools3}>
                  <div className={classes.tool2}>
                    <div className={classes.image2}></div>
                  </div>
                  <div className={classes.slack2}>Figma</div>
                </div>
                <div className={classes.tools4}>
                  <div className={classes.tool3}>
                    <div className={classes.image6}></div>
                  </div>
                  <div className={classes.slack3}>Sketch</div>
                </div>
              </div>
              <div className={classes.row2}>
                <div className={classes.tools5}>
                  <div className={classes.tool4}>
                    <div className={classes.image3}></div>
                  </div>
                  <div className={classes.slack4}>Photoshop</div>
                </div>
                <div className={classes.tools6}>
                  <div className={classes.tool5}>
                    <SolidBrandsAdobeIllustrator
                      className={classes.solidBrandsAdobeIllustrator}
                      hide={{
                        subtract: true,
                        subtract2: true,
                      }}
                    />
                    <div className={classes.image4}></div>
                  </div>
                  <div className={classes.slack5}>Illustrator</div>
                </div>
                <div className={classes.tools7}>
                  <div className={classes.tool6}>
                    <div className={classes.image5}></div>
                  </div>
                  <div className={classes.slack6}>Adobe XD</div>
                </div>
              </div>
              <div className={classes.row3}>
                <div className={classes.tools8}>
                  <div className={classes.tool7}>
                    <div className={classes.image7}></div>
                  </div>
                  <div className={classes.slack7}>Notion</div>
                </div>
                <div className={classes.tools9}>
                  <div className={classes.tool8}>
                    <ToolIcon className={classes.icon16} />
                  </div>
                  <div className={classes.slack8}>Webflow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.devider3}></div>
      <div className={classes.awards}>
        <div className={classes.cards}>
          <div className={classes.card}>
            <div className={classes.icon17}>
              <div className={classes.w}>W.</div>
            </div>
            <div className={classes.content3}>
              <div className={classes.awwwardsJudge1920}>Awwwards Judge ‘19-20</div>
              <div className={classes.awwwardsIsAProfessionalWebDesi}>
                Awwwards is a professional web design and development competition body. It aims to recognize and
                promote.
              </div>
            </div>
          </div>
          <div className={classes.card2}>
            <div className={classes.icon18}>
              <div className={classes.unnamed4}>📜</div>
            </div>
            <div className={classes.content4}>
              <div className={classes.siteOfTheYearsForLewis}>Site of the Years for Lewis</div>
              <div className={classes.lewisUniversityOffersPractical}>
                Lewis University offers practical, goal-oriented education for undergraduate student, graduate.
              </div>
            </div>
          </div>
        </div>
        <div className={classes.content5}>
          <div className={classes.heading10}>
            <div className={classes.myAchievments}>My achievments</div>
            <div className={classes.sedSemperFelisAtFacilisisAucto}>
              Sed semper, felis at facilisis auctor, justo eros vulputate nulla, dapibus suscipit augue ex id dui.
              Integer a elit id enim eleifend tristique sed vel sem. Donec sodales urna sit amet mauris volutpat
              pellentesque. Suspendisse potenti. In ornare convallis nisi ut viverra.
            </div>
          </div>
          <div className={classes.languageICanSpeak}>
            <div className={classes.languageICanSpeak2}>Language i can speak</div>
            <div className={classes.row4}>
              <div className={classes.english}>
                <ul className={classes.list}>
                  <li>
                    <div className={classes.textBlock3}>English</div>
                  </li>
                </ul>
              </div>
              <div className={classes.mandarin}>
                <ul className={classes.list2}>
                  <li>
                    <div className={classes.textBlock4}>Mandarin</div>
                  </li>
                </ul>
              </div>
              <div className={classes.spanish}>
                <ul className={classes.list3}>
                  <li>
                    <div className={classes.textBlock5}>Spanish</div>
                  </li>
                </ul>
              </div>
              <div className={classes.hindi}>
                <ul className={classes.list4}>
                  <li>
                    <div className={classes.textBlock6}>Hindi</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.devider4}></div>
      <div className={classes.footer}>
        <div className={classes.cTA}>
          <div className={classes.haveAProjectIdeaInMindGetInTou}>
            <div className={classes.textBlock7}>Have a project idea in mind.</div>
            <div className={classes.textBlock8}>Get in touch and let&#39;s chat!</div>
          </div>
          <div className={classes.frame497}>
            <div className={classes.frame494}>
              <div className={classes.send}>
                <SendIcon className={classes.icon19} />
              </div>
              <div className={classes.content6}>
                <div className={classes.emailAddress}>Email Address</div>
                <div className={classes.howardstarkInfoCom}>howardstark@info.com</div>
              </div>
            </div>
            <div className={classes.frame495}>
              <div className={classes.calling}>
                <CallingIcon className={classes.icon20} />
              </div>
              <div className={classes.content7}>
                <div className={classes.phoneNumber}>Phone Number</div>
                <div className={classes._406555120}>(406) 555-0120</div>
              </div>
            </div>
            <div className={classes.frame496}>
              <div className={classes.freelancer}>
                <FreelancerIcon className={classes.icon21} />
              </div>
              <div className={classes.content8}>
                <div className={classes.availableOnFiverr}>Available on Fiverr.</div>
                <div className={classes.howardStark123}>howard.stark123</div>
              </div>
            </div>
          </div>
          <button className={classes.button7}>
            <div className={classes.sayHello4}>Request Quote</div>
            <ArrowCircleRight
              classes={{ vector: classes.vector8 }}
              swap={{
                vector: <VectorIcon8 className={classes.icon12} />,
                vector2: <VectorIcon9 className={classes.icon13} />,
                vector3: <VectorIcon10 className={classes.icon14} />,
              }}
            />
          </button>
        </div>
        <div className={classes.copyrights}>
          <div className={classes.allContent2024ConnerOaks}>All Content © 2024-Conner Oaks</div>
        </div>
      </div>
    </div>
  );
});
