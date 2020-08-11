## Reading List App

An app to record reading list. The data is stored in the local storage so that it's not lost when user refreshes the page.

![Markdown Logo](https://mcusercontent.com/966fc1b875b92a9a36ccf1370/images/3382def0-d5c9-4eb0-bc23-b816fe945c9a.gif)

## Installation and Setup Instructions

### Prerequisite

You will need `node` and `npm` installed globally on your machine.

```bash

# install dependencies
npm install

#to start server:
npm start

#to visit app:
localhost:3000

#to create a build of the app:
npm run build
```

## Reflection
The project goals included using technologies learned up until this point and familiarizing myself React's Context API.

I wanted to build an application that uses React’s Context API to manage global application state without resorting to props drilling.
I started this process by using the `create-react-app` boilerplate. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into react hook and Context API. The technologies used in this app are React and CSS.

One challenge I had was that when user refreshed the page, any data user has entered was lost. To combat this I stored the data into local storage.
In the next iteration I plan on setting up a backend with a database to store data essentially making this a fullstack app. 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
1. Create your feature branch `git checkout -b feature/fooBar`
1. Commit your changes `git commit -am 'Add some fooBar'`
1. Push to the branch `git push origin feature/fooBar`
1. Create a new Pull Request
