# vote for Team Tribore

# technologies

1. js
2. node.js
3. puppeteer

# prerequisite

You need to have [node](https://nodejs.org/en/) installed on your machine

# usage

run `npm install` to install the dependencies

run `npm start` to vote for Tream tribore

## would like to pass a message?

If you would like to pass a message, uncomment this peace of code
`
await page.type(textareaFieldSelector, '', {delay: 1000});
await page.screenshot({path: 'screenshot/' + Date.now() + '.png'});
`

# Author

@tadomikikuto-bit