# GatherTownJS (Unofficial) [![openbase](https://badges.openbase.com/js/rating/gathertown.js.svg)](https://openbase.com/js/gathertown.js?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge) [![huntr](https://cdn.huntr.dev/huntr_security_badge_mono.svg)](https://huntr.dev)

[![created by](https://img.shields.io/badge/created%20by-Waren%20Gonzaga-blue.svg?longCache=true&style=flat-square)](https://github.com/warengonzaga) [![discord](https://img.shields.io/discord/659684980137656340?color=%235865F2&label=discord&logo=discord&logoColor=white&style=flat-square)](https://wrngnz.ga/discord) [![release](https://img.shields.io/github/release/warengonzaga/gathertown.js.svg?style=flat-square)](https://github.com/warengonzaga/gathertown.js/releases) [![star](https://img.shields.io/github/stars/warengonzaga/gathertown.js.svg?style=flat-square)](https://github.com/warengonzaga/gathertown.js/stargazers) [![license](https://img.shields.io/github/license/warengonzaga/gathertown.js.svg?style=flat-square)](https://github.com/warengonzaga/gathertown.js/blob/main/license)

📢 Nominate ([@WarenGonzaga](https://warengonzaga.com)) as **[GitHub Star](https://stars.github.com/nominate)**. If you appreciate his hardwork and dedication to open source.

[![repo banner](.github/img/repo_banner.png)](https://gathertown.js.org)

A simple and lightweight but powerful NodeJS client for [Gather Town](http://gather.town) API.

## 😎 Demo

(coming soon)

## ⚡ Features

Currently supports **HTTP API** `GET` requests.

### HTTP API

- `GET getMap()`
- `GET getEmailGuestList()`
- `POST createSpace()`
- `POST setEmailGuestlist()`
- `POST setMap()`

> NOTE: Currently working on Websocket API support as suggested by the team at Gather. Check out the discussion here: [#10](https://github.com/WarenGonzaga/gathertown.js/issues/10) and [#11](https://github.com/WarenGonzaga/gathertown.js/issues/11).

## 📖 Documentation

The complete documentation can be found here:

[![docs](https://img.shields.io/badge/Docs-docs.warengonzaga.com/gathertownjs-blue.svg?longCache=true&style=for-the-badge)](https://docs.warengonzaga.com/gathertownjs)

## 🕹️ Usage

Example usage of the GatherTownJS.

```js
const GATHER = require('gathertown.js'); // add gather package
const access = require('./config.json'); // load your apikey
const gather = GATHER(access.key); // access keys

// some variables
const spaceId = 'space-id/space-name';
const mapId = 'map-name';

function map() {
  gather
    .getMap({ spaceId, mapId })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

map();
```

### ⚓ With Hooks

```js
const { useGather } = require('gathertown.js');
const access = require('./config.json'); // load your apikey

// some variables
const spaceId = 'space-id/space-name';
const mapId = 'map-name';

function map() {
  // load only needed functions
  const { getMap } = useGather(access.key);

  getMap({ spaceId, mapId })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

map();
```

## 🎯 Contributing

Contributions are welcome, create a pull request to this repo and I will review your code. Please consider to submit your pull request to the `dev` branch. Thank you!

Read the project's [contributing guide](./CONTRIBUTING.md) for more info.

## 💬 Discussions

For any questions, suggestions, ideas, or simply you want to share your experience in using this project, feel free to share and discuss it to the [community](https://github.com/warengonzaga/gathertown.js/discussions)!

## 🐛 Issues

If you're facing a problem in using GatherTownJS please let me know by [creating an issue here](https://github.com/warengonzaga/gathertown.js/issues/new). I'm here to help you!

## 🍀 Sponsors and Supporters

[![BuyMeaCoffee](https://img.shields.io/badge/Buymeacoffee-%23FFDD00.svg?&style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoff.ee/warengonzaga) [![Vercel](https://img.shields.io/badge/Vercel-%23000.svg?&style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com) [![CircleCI](https://img.shields.io/badge/CircleCI-%23000.svg?&style=for-the-badge&logo=CircleCI&logoColor=white)](https://vercel.com) [![GitBook](https://img.shields.io/badge/GitBook-%233884FF.svg?&style=for-the-badge&logo=gitbook&logoColor=white)](https://gitbook.io) [![Digital Ocean](https://img.shields.io/badge/Digital%20Ocean-%230080ff.svg?&style=for-the-badge&logo=digitalocean&logoColor=white)](https://digitalocean.com) [![Deepware](https://img.shields.io/badge/deepware-%23cb2653.svg?&style=for-the-badge&logoColor=white)](https://deepware.ai/) [![NOWPayments](https://img.shields.io/badge/NOWPayments-%2364ACFF.svg?&style=for-the-badge&logoColor=white)](https://nowpayments.io) [![StackHawk](https://img.shields.io/badge/Stackhawk-%2300CBC6.svg?&style=for-the-badge&logoColor=white)](https://stackhawk.com)

> Love what I do? **[Send me some coffees](https://buymeacoff.ee/wareneutron)**!
> Can't send coffees? Nominate me for a **[GitHub Star](https://stars.github.com/nominate)** instead!
> Your coffee donation and support will help me to continue working on open-source projects like this.

## 🌏 Community

Join to my growing tech community and get the latest updates!

[![community](https://discordapp.com/api/guilds/659684980137656340/widget.png?style=banner2)](https://wrngnz.ga/discord) [![community](https://discordapp.com/api/guilds/694612151444439081/widget.png?style=banner2)](https://wareneutron.com/discord)

## 📋 Code of Conduct

Read the project's [code of conduct](./code_of_conduct.md).

## 📃 License

GatherTownJS is licensed under [The MIT License](https://opensource.org/licenses/MIT).

## 📝 Author

GatherTownJS is created by **[Waren Gonzaga](https://github.com/warengonzaga)**, with the help of awesome [contributors](https://github.com/warengonzaga/gathertown.js/graphs/contributors).

---

💻 Made with 💖 and ☕ by **Waren Gonzaga** with **YHWH** 🙏 | Citizen of Heaven

[personal website]: https://warengonzaga.com
[business website]: https://wgcompanyhq.com
[biolink]: https://bio.link/warengonzaga
[facebook]: https://facebook.com/warengonzagaofficial
[twitter]: https://twitter.com/warengonzaga
[instagram]: https://instagram.com/warengonzagaofficial
[youtube]: https://youtube.com/warengonzaga
