# Steps for building this application with Amplify

1. Clone the repo

2. Install amplify in your computer and configure it (https://docs.amplify.aws/start/getting-started/installation/q/integration/react)

3. Install this app in your computer

```
$ npm install
```

4. Run this app

```
$ npm start
```

5. Initalize this app with amplify. Follow the steps in the console.

```
$ amplify init
```

6. Add authentication - create a default configuration with username

```
$ amplify add auth
```

7. Push the changes to the cloud

```
$ amplify push
```

8. Create the front-end for the authentication

```
$ cp base/App-01.js src/App.js
$ cp base/App-01.css src/App.css
$ cp base/index-01.html public/index.html
```

9. After the changes were pushed to the cloud you can test your app and create an account.

10. Add an GraphQL API with Cognito User pools as auth. Pick that you dont have an annotated graphql schema and that you want help with the schema creation.

```
$ amplify add api
```

Copy this schema in the schema.graphql file that pops up.

```
type Note @model @auth(rules: [{allow: owner}]) {
	id: ID!
	note: String!
}
```

11. Then push the changes to the cloud. Accept all the defaults and continue.

```
$ amplify push
```

12. Modify the frontend to have the api.

```
$ cp base/App-02.js src/App.js
```

13. When the changes are all in the cloud test your page.

14. If you want to add search. You can go and modify your graphql schema.

```
type Note @model @auth(rules: [{allow: owner}]) @searchable {
	id: ID!
	note: String!
}
```

and then push the changes to the cloud
