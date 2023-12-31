# URL Shortener

This REST API is used to make long URL to a shorter  form which can be easily remembered and copy pasted. 

### Tech Stack
- **NodeJs** to create the server to run the API.
- **ExpressJS** for building  the API.
- **Mongoose** to connect to  MongoDB and  perform CRUD operations in database.
- **Nanoid** to generate random string ID which which is  used to shorten URLs
- **JasonWebToken** to authenticate user with the help  of username and password.
- **bycrpt** to  encrypt password.
- **Cookie Parser** to check user valiation and perform API actions.

## Functionalities:
- Users can submit a lengthy URL through a POST request to shorten.
- The API generates a unique short URL for the submitted original URL and store it in the database.
- The response includes both the original and shortened URLs. 
- Users can access the original URL by a  GET request with the shortened URL . 
- User registration and login functionalities for secure access enabled by JWT.
## Installation

To install and  run the API in your local system, download  the code in a zip file and extract it. 

- Open the folder containing  the code  in VS code and run the following command : 

```bash
  npm install
  npm start
```




## Documentation

Base URL for  documentation `localhost/8080`

### Registering New  User

To register user need to send a `POST` request and username and password in request body.


``` bash
http://localhost:8080/user/register
```

![image](https://github.com/Riteshk229/URLshortner-API/assets/100128015/4a4765e6-6451-4ec5-99a1-9157b7061f37)


### Logging in
To login user need to send a `POST` request and username and password in request body.


``` bash
http://localhost:8080/user/login
``` 
![image](https://github.com/Riteshk229/URLshortner-API/assets/100128015/05eaac98-55a1-4487-b4cc-34533ed69a9d)


### Shorten URL

To shorten URL, user need to  send a `Post` request with the original URL in request body.

````bash
http://localhost:8080/api/shorten
````

![image](https://github.com/Riteshk229/URLshortner-API/assets/100128015/af6adf0f-3e65-4d9d-827e-6cee730820c5)

### Go to Original URL
User can go to  the  original URL by sendig a `GET` request and sending  the  shorten URL in request body.

````bash
http://localhost:8080/api/shortenURL
````

![image](https://github.com/Riteshk229/URLshortner-API/assets/100128015/e8cec1f6-4408-4f52-8b2e-08c44352828b)


Documentation by Postman : [URL shortener](https://documenter.getpostman.com/view/27315533/2s9YkrazLC)

API Hosted  link : https://url-shortner-523d.onrender.com

