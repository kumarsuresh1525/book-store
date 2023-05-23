# Book Store web App

### Prerequisites

- Install [node](https://nodejs.org/en/download/) - v16.14.1
- Install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

Alternatively(for MAC) install homebrew

```Shell
xcode-select --install
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew doctor
brew install node
```

## Installation

```bash
$ npm install
```

## Running the app
lerna used as monorepo


```bash
# development
# build client
$ npm run build:client

# start client
$ npm run start:client

# build server
$ npm run build:server

# start client
$ npm run start:server

``