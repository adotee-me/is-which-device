# [is-which-device](https://www.npmjs.com/package/@adotee.me/is-which-device) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/adotee-me/is-which-device/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/@adotee.me/is-which-device.svg?style=flat)](https://www.npmjs.com/package/@adotee.me/is-which-device)

* Leia em outra língua: [Inglês](README.md), [Português Brasileiro](README.pt-br.md), [Italiano](README.it.md)

## 🤔 &nbsp; O que é

is-which-device é uma biblioteca de media queries dentro dos arquivos de react, assim você pode escolher quando renderizar ou não um componente e não precisará utilizar de ```display: none``` dentro de arquivos de estilização.

## 🔥 &nbsp; Instalação

Para instalar esta biblioteca é muito simples, basta rodar

`yarn add @adotee.me/is-which-device`

Ou, para quem gosta de utilizar ```npm```

`npm install --save @adotee.me/is-which-device`

## :rocket: &nbsp; Exemplo

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

Para testar esse exemplo, você pode fazer o clone do projeto e rodar ele localmente:

`git clone https://github.com/adotee-me/is-which-device.git`

Baixar as dependências do projeto

`yarn install` ou `npm install`

E iniciar o projeto

`yarn start` ou `npm run start`

Feito isso, basta utilizar as ferramentas de desenvolvedor do seu navegador e para modificar o tamanho da tela e ver a tag `span` mudando seu texto conforme o device

## :closed_book: &nbsp; Documentação

Atualmente os devices têm seu tamanho definido no código e não como alterar isso sem modificar a biblioteca, porém, para o futuro queremos adicionar mais tamanhos de devices e que eles sejam dinâmicos de acordo com sua necessidade.

- isMobile será `true` quando `screen_width < 768`
- isTablet será `true` quando `screen_width >= 768 && screen_width < 1024`
- isDesktop será `true` quando `screen_width >= 1024`

Feito com ❤️ pelo time da adotee.me