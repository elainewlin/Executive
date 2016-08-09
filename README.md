Executive
===

## Requirements
* node v6.2.2

## Quick start

1. Clone this repo
2. `npm install`
3. `npm start`

The development server by default is at `localhost:3000`

## Commands
* `npm run start` - Start the dev server (with watcher)
* `npm run start:prod` - Start the dev server with prod settings
* `npm run start:tunnel` - Starts dev server with ngrok, making it publically available
* `npm run generate <part>` - Use the generator scripts to generate template files for application parts (components, containers, routes) (see react-boilerplate docs)
* `npm run build` - Build the application to `/build` after linting, testing, optimizing, minimizing, etc for production
* `npm run test` - Run all unit tests
* `npm run test:<firefox|safari|ie>` - Test with a browser
* `npm run test:watch` - Run tests when file changes
* `npm run pagespeed` - Runs Google Pagespeed insights`
* `npm run lint` - Lint js and css for code style

## Tips
* Run test and lint before committing
* JS and CSS linting settings are in package.json if something is unreasonable

## Deploying with Ansible
You'll need:

* Ansible 2.X
* SSH access to the destination server

### Staging
1. `cd ansible`
2. `ap -i staging deploy.yml`

Add `--tags build` to just build the project or `--tags copy` to copy an already built project to the server

#### [Boilerplate documentation](https://github.com/mxstbr/react-boilerplate/tree/master/docs)
