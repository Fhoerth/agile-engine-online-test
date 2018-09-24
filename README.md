## Development server

Run `npm run start` for a dev server.
Navigate to `http://localhost:4200/`.
The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project.
The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Production Server
This feature isn't included due to lack of time.

##
The module `words-interaction` uses `window.getSelection()` API. Some browsers doesn't support this feature.
Please, refer to https://caniuse.com/#feat=selection-api for more info.
