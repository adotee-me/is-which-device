# [is-which-device](https://www.npmjs.com/package/@adotee.me/is-which-device) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/adotee-me/is-which-device/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/@adotee.me/is-which-device.svg?style=flat)](https://www.npmjs.com/package/@adotee.me/is-which-device)

* Leggi in un'altra lingua: [Inglese](README.md), [Portoghese Brasiliano](README.pt-br.md), [Italiano](README.it.md)

## 🤔 &nbsp; Cos'è

is-which-device è una libreria di media queries all'interno dei file react, quindi puoi scegliere quando rendere o meno un componente e non avrai bisogno di usare ```display: none``` all'interno dei file di stile.

## 🔥 &nbsp; Installazione

Per installare questa libreria, digita sulla riga di comando:

`yarn add @adotee.me/is-which-device`

O se usi ```npm```

`npm install --save @adotee.me/is-which-device`

## :rocket: &nbsp; Esempio

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

Per testare questo esempio, puoi clonare il progetto ed eseguirlo localmente:

`git clone https://github.com/adotee-me/is-which-device.git`

Scarica le dipendenze del progetto

`yarn install` ou `npm install`

Ed esegui il progetto

`yarn start` ou `npm run start`

Dopodichè, usa gli strumenti di sviluppo del tuo browser per modificare la larghezza dello schermo e visualizzare il tag `span`, modificandone il testo in base al dispositivo

## :closed_book: &nbsp; Documentazione

Attualmente i dispositivi hanno la loro dimensione definita nel codice e non c'è modo di cambiarla senza modificare la libreria, tuttavia per il futuro vogliamo aggiungere più dimensioni dei dispositivi e renderli dinamici in base alle vostre necessità.

- isMobile sarà `true` quando `screen_width < 768`
- isTablet sarà `true` quando `screen_width >= 768 && screen_width < 1024`
- isDesktop sarà `true` quando `screen_width >= 1024`

Realizzato con ❤️ dal team di adotee.me
