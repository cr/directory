import { Model } from 'components/fxos-mvc/dist/mvc';

export default class ListModel extends Model {
  getAppList() {
    return {
      'http://fxos.github.io/camera/dist/app/manifest.webapp': {
        manifestURL: 'http://fxos.github.io/camera/dist/app/manifest.webapp',
        name: 'camera',
        description: 'Take pictures and stuff.',
        author: 'Justin D\'Arcangelo',
        type: 'hosted',
        url: 'https://github.com/fxos/camera',
        revision: '8b5a7d9061a0d0210f24ff253110a8ce935104ca'
      },
      'http://fxos.github.io/dialer/dist/app/manifest.webapp': {
        manifestURL: 'http://fxos.github.io/dialer/dist/app/manifest.webapp',
        name: 'dialer',
        description: 'A replacement for the built-in dialer app.',
        author: 'Doug Sherk',
        type: 'hosted',
        url: 'https://github.com/fxos/dialer',
        revision: '835af6ccf608a51bc87711d1c40fc4f33a1fc12b'
      },
      'http://mikehenrty.github.io/fxos-cracked/manifest.webapp': {
        manifestURL: 'http://mikehenrty.github.io/fxos-cracked/manifest.webapp',
        name: 'cracked',
        description: 'A virtual cracked screen for your FirefoxOS device.',
        icon: 'http://mikehenrty.github.io/fxos-cracked/style/icons/128.png',
        author: 'David Flanagan',
        type: 'addon',
        url: 'https://github.com/mikehenrty/fxos-cracked',
        revision: '16016c86f464c23e0465b22d43c08f52c1cc7349'
      }
    };
  }
}

