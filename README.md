# Test-Dev-Front-PL

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### This system is about to manage a contacts list

***

#### Prerequisites:

* Node >= 14.17.0
* Yarn global

***
## Installing / Getting started

```shell
git clone git@github.com:pedroida/Test-Dev-Front-PL.git

cd project

cp .env.example .env //update the variable following your context

yarn install

yarn serve
```
 ***

## Building

```
yarn build
```

***

## Project structure

```shell
- project
     - public
       - images
     - src
       - assets
         - images
         - scss
       - components
       - contracts
       - entities
         - factories
       - router
       - services
         - Domain
           - DM -> DataMapper
           - Service.ts
         - Shared.ts -> Shared resources
       - store
         - domain -> module
       - views
         - Index.vue -> Root component
         - authenticated
         - unauthenticated
```

