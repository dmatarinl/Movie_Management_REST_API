# Movie_Management_REST_API

### Movie Management Rest Api, made it with Node.js javascript, no DBMS.

Rest Api with the main functions GET, POST, PUT and DELETE, that makes it possible to manage movies attributes.

You can use **Postman** to make the requests.

We will be using:

- {GET, POST} localhost:3000/api/movies, to get or post a movies or the list of movies
- {PUT, DELETE} localhost:3000/api/movies/:id , filtering with the id, you can edit any movie that is present in the list of movies or delete it by id.

Just out of curiosity, I added in routes, the route about users, it fetches data from a rest api to our rest api and then send it to our client app. I imported (node-fetch) and fetched the url to **fetch('https://jsonplaceholder.typicode.com/users')** , website dedicated to practice obtaining fake data to use it as ours in the make of requests.

So if you use:

- Get localhost:3000/api/users it will show you the data it fetched from the website.
