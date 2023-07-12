# Insights:true event bug

## Get started

To run this project locally, install the dependencies and run the local server:

```sh
npm install
npm start
```

Alternatively, you may use [Yarn](https://http://yarnpkg.com/):

```sh
yarn install
yarn start
```

Open http://localhost:3000 to see your app.

## Issue
Clicking add to cart triggers 2 events, 1 click, and 1 conversion

### To reproduce the "issue/bug":

- click on a product href to see a click event
- click on a add to cart button to see both a click & conversion event sent simultaneously.

our doc ==> https://www.algolia.com/doc/guides/building-search-ui/events/js/#send-click-events