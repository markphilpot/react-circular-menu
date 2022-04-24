import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CircleMenu } from './CircleMenu';
import { CircleMenuItem } from '../CircleMenuItem/CircleMenuItem';
import { TooltipPlacement } from '../Tooltip/library/types';

import { IoSunnyOutline, IoMoonOutline, IoSettingsOutline, IoReloadOutline, IoLogoGithub } from 'react-icons/io5';

import '../style.css';
import { CircleButton } from '../CircleButton/CircleButton';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'CircleMenu',
  component: CircleMenu,
} as ComponentMeta<typeof CircleMenu>;

export const FullCircle: ComponentStory<typeof CircleMenu> = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '500px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircleMenu
        startAngle={-90}
        rotationAngle={360}
        itemSize={2}
        radius={5}
        /**
         * rotationAngleInclusive (default true)
         * Whether to include the ending angle in rotation because an
         * item at 360deg is the same as an item at 0deg if inclusive.
         * Leave this prop for angles other than 360deg unless otherwise desired.
         */
        rotationAngleInclusive={false}
      >
        <CircleMenuItem
          onClick={() => alert('Clicked the item')}
          tooltip="Email"
          tooltipPlacement={TooltipPlacement.Right}
        >
          Mail
        </CircleMenuItem>
        <CircleMenuItem tooltip="Help">Help</CircleMenuItem>
        <CircleMenuItem tooltip="Location">Location</CircleMenuItem>
        <CircleMenuItem tooltip="Info">Info</CircleMenuItem>
      </CircleMenu>
    </div>
  );
};

export const UpperQuarter: ComponentStory<typeof CircleMenu> = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '500px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircleMenu
        startAngle={-135}
        rotationAngle={90}
        itemSize={2}
        radius={5}
        /**
         * rotationAngleInclusive (default true)
         * Whether to include the ending angle in rotation because an
         * item at 360deg is the same as an item at 0deg if inclusive.
         * Leave this prop for angles other than 360deg unless otherwise desired.
         */
        rotationAngleInclusive={true}
      >
        <CircleMenuItem
          onClick={() => alert('Clicked the item')}
          tooltip="Email"
          tooltipPlacement={TooltipPlacement.Right}
        >
          Mail
        </CircleMenuItem>
        <CircleMenuItem tooltip="Help">Help</CircleMenuItem>
        <CircleMenuItem tooltip="Location">Location</CircleMenuItem>
        <CircleMenuItem tooltip="Info">Info</CircleMenuItem>
      </CircleMenu>
    </div>
  );
};

export const UpperQuarterIcons: ComponentStory<typeof CircleMenu> = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '500px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircleMenu
        startAngle={-135}
        rotationAngle={90}
        itemSize={0.8}
        radius={3}
        /**
         * rotationAngleInclusive (default true)
         * Whether to include the ending angle in rotation because an
         * item at 360deg is the same as an item at 0deg if inclusive.
         * Leave this prop for angles other than 360deg unless otherwise desired.
         */
        rotationAngleInclusive={true}
        menuToggleElement={
          <CircleButton size={1}>
            <IoSunnyOutline />
          </CircleButton>
        }
        closeOnItemClick={true}
      >
        <CircleMenuItem tooltipComponent={<div>Sunny</div>}>
          <IoSunnyOutline />
        </CircleMenuItem>
        <CircleMenuItem tooltip="Dark">
          <IoMoonOutline />
        </CircleMenuItem>
        <CircleMenuItem tooltip="System">
          <IoSettingsOutline />
        </CircleMenuItem>
      </CircleMenu>
    </div>
  );
};
