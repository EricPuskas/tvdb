# Instructions

## Installation

- `npm install` in the root of the project for the back-end
- `cd` into client and `npm install` for the front-end

## Running the app

- `node server.js` in the root of the project to start the server.
- `cd` into client and `npm start` to boot up the front-end.

## Testing

- `cd` into client and `npm test` to run the tests.

### Test Coverage

- `npm test -- --coverage`

  - `npm test -- --coverage --watchAll=false` in case the test coverage comes up empty.
  - The flag `--watchALl=false` is required due to some potential issues with jest. [More on that here](https://github.com/facebook/create-react-app/issues/6888)

## Notes

- You will need to create a .env file in the root of the project
- Provide an `API_KEY` by signing up on [thetvdb.com](https://www.thetvdb.com/)
- If you are running AdBlock, the images coming from the API will be blocked, disable it to be able to see the images, otherwise a placeholder image will be shown.
