# [is-which-device](https://www.npmjs.com/package/@adotee.me/is-which-device) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/adotee-me/is-which-device/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/@adotee.me/is-which-device.svg?style=flat)](https://www.npmjs.com/package/@adotee.me/is-which-device)

* Read this in other languages: [English](README.md), [Brazilian Portuguese](README.pt-br.md), [Italy](README.it.md)

## 🤔 &nbsp; What is it

is-which-device is a media query's library inside React files, so you can choose whether or not to render a component, and won't need to use ```display: none``` inside styling files.

## 🔥 &nbsp; Installation

Installing this library is very simple, just run

`yarn add @adotee.me/is-which-device`

Or, for people who prefer ```npm```

`npm install --save @adotee.me/is-which-device`

## :rocket: &nbsp; Example

```jsx
import React from 'react';
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
```

To test this example, you can clone the project and run it locally:

`git clone https://github.com/adotee-me/is-which-device.git`

Download the project's dependecies

`yarn install` or `npm install`

And start the project

`yarn start` or `npm run start`

With all that done, just use your browser's dev tools to modify the scren size and see the `span` tag changing its text according to the device


## :closed_book: &nbsp; Documentação

Currently the devices have their size defined in the code and there is no way to change that without modifying the library, however, for the future we want to add more device's sizes and that they are dynamic according with its necessity.

- isMobile will be `true` when `screen_width < 768`
- isTablet wil be `true` when `screen_width >= 768 && screen_width < 1024`
- isDesktop wil be `true` when `screen_width >= 1024`

Made with ❤️ by adotee.me team
