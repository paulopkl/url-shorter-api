<h1 align="center">
  URL Shortener
</h1>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">An API who enables you to encode URL's to shorter URL's</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
</p>

## Description

This repository is a shorten API, who ables you to shorten your URL in the simplest way. It stores the most accessed URL's and redirects to the full URL.

## Routes

<h4>Shorten URL</h4>

*You should use this route to short your URL, just putting the "originalUrl" in the body, when making request*

- **URL**: `/`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "originalUrl": "https://www.google.com"
  }

---
<h4>Top 100 most accessed URL's</h4>

*You should use this route to get the top 100 most accessed URL's by users*

- **URL**: `/most-accessed-urls`
- **Method**: `GET`

---
<h4>Put the short URL to be redirected to the full URL</h4>

*You should use this 'dynamic' route to be redirected to the full URL, just put the shortest URL that you get in Shorten URL*

- **URL**: `/:shortURL`
- **Method**: `GET`

---

## Installation

```cmd
cd url-shorter-api
npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Feel free to get in touch to contribute to this project, or just open a pull-request for helping this API growth.

## Stay in touch

- Author - [Paulo Ricardo](https://kamilmysliwiec.com)

