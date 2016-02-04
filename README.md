# nodeApp

This is simple node js application developed with angularjs, expressjs, and jade framework. 

What this app contains.

1. A user login and resgistration page.
2. Ebook page that contains book content like page name and page content
3. Add new pages to ebook.
4. Update existing pages in ebook.

How to use this app.

1. Take a pull from https://github.com/sintu-patel/nodeApp.git
2. Open command prompt in nodeApp directory
3. Run npm install
4. Run bower install
5. Run gulp
6. Run gulp watch
7. Run node ./bin/www
8. Visit http://localhost:3001/ in browser
9. Register username
10. Login with username and password

How to run css unit test
To run the tests:

1. Start the Karma server: `./jake.sh karma` (Unix/Mac) or `jake karma` (Windows)
2. Open `http://localhost:9876` in one or more browsers.
3. Run `./jake.sh loose=true` (Unix/Mac) or `jake loose=true` (Windows) every time you want to build and test. Alternatively, use `./watch.sh loose=true` (Unix/Mac) or `watch loose=true` (Windows) to automatically run `jake` whenever files change.

Remove the `loose=true` parameter for strict Node and browser version checking.

To run the app:

1. Run `./jake.sh run` (Unix/Mac) or `jake run` (Windows).
2. Open `http://localhost:8080` in a browser.
3. Click the coffee cup icon to see the text appear and disappear.
