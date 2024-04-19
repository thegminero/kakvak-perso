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

## Usage

add index name, appID and search API-key when instantiating Algolia Client

## Events

- click on a product href to see a click event
- click on a add to cart button to see  conversion event.
- click on a facet filter to send a click event named "Filter Applied"
- When hits are rendered, a view event of name "Hits Viewed", maximum 20 objectID's per event, if more, split in multiple events

our doc ==> https://www.algolia.com/doc/guides/building-search-ui/events/js/#send-click-events