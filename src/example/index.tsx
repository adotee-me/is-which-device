import React from 'react';
// @ts-ignore
import useIsWhichDevice from '@adotee.me/is-which-device';

export default function Example() {
  const { isMobile, isTablet, isDesktop } = useIsWhichDevice();
  return (
    <div>
      { isMobile && <span>this is a mobile</span>}
      { isTablet && <span>this is a tablet</span>}
      { isDesktop && <span>this is a desktop</span>}
    </div>
  );
}
