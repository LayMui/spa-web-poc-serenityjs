# Serenity/JS Cucumber WebdriverIO Template 

## Note on update browser version

1. Go to google chrome,
   Click About google chrome to update to the latest version

2. Sync the chromedriver version by download and update
   _In MacOS_

```
brew install chromedriver
sudo xattr -r -d com.apple.quarantine /usr/local/bin
chromedriver
```

3. Make sure to update the chromedriver in the package.json

```
yarn add chromedriver
```

4. Make sure there is a .env file

```
BASE_URL=https://dev-farmer-spain.eu.auth0.com/
```

5. The Login is slow, add some timeout at the Given steps
{ timeout: 60000}

6. To run the test
```
yarn stage
```

7. To run on browserstack
```
yarn bs
```

8. To view the dashboard on browserstack
```
https://automate.browserstack.com/
```

9. To upgrade to latest version of dependencies package
```
yarn upgrade --latest
```

Run yarn or yarn install again

Make sure to run the test to make sure the new version does not affect
