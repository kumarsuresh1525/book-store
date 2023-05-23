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

Book Store UI

<img width="1581" alt="image" src="https://github.com/kumarsuresh1525/book-store/assets/29704613/f2f5957f-ed7e-4da9-81ac-13013d730d47">
video link for how UI is working


https://github.com/kumarsuresh1525/book-store/assets/29704613/4425c839-51ff-462f-a89b-572d2717f2c7

Backend API endpoints
to get All books list
http://localhost:3000/books
to create book record POST request
http://localhost:3000/books
payload
{
    "title": "SHERLOCK HOLMES: THE COMPLETE NOVELS",
    "author": "CONAN DOYLE",
    "imgUrl": "https://bc-img.s3.ap-south-1.amazonaws.com/images/cover/bc/9780143455264_16583773140.jpg",
    "price": 213,
    "rating": 3
}
