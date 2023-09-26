This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.




# Customer Portal

### Backends


### Frontend
For front end of CRUZ uses **next.js** to create components along with with **Redux** for storing the state to create a clean looking and responsive website
that will feel very modern and easy to use for a user.
There are several other programs used in the project.

- Node.js
- nextJs
- SST
- AWS
* S3
* DynamDB
* Cognito
- React
- Redux
- Html5
- Css
- Git
- Javascript

## Database Schema Design

`<insert database schema design here image from DBDiagram>`

## API Documentation

## USER AUTHENTICATION/AUTHORIZATION

### All endpoints that require authentication

All endpoints that require a current user to be logged in.

* Request: endpoints that require authentication
* Error Response: Require authentication
  * Status Code: 401
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Authentication required",
      "statusCode": 401
    }
    ```

### All endpoints that require proper authorization

All endpoints that require authentication and the current user does not have the
correct role(s) or permission(s).

* Request: endpoints that require proper authorization
* Error Response: Require proper authorization
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Forbidden",
      "statusCode": 403
    }
    ```

### Get the Current User
User: Customer Service


Returns the information about the current user that is logged in. For backend use to get informaiton about a specific customer.

* Require Authentication: true
* Request
  * Method: GET
  * URL: /user/:userId
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "firstName": "Steve",
      "lastName": "Johnson",
      "email": "steve.johnson@gmail.com",
      "username": "SteveJohnson"
    }
    ```

### Log In a User
User: Home Owner

Logs in a current user with valid credentials and returns the current user's
information.

1. User opens up the web application with login screen with options to use Google/Facebook/Existing email account and clicks button of the service
2. User enters credentials and is brought to the user's HomePage

* Require Authentication: false
* Request
  * Method: POST
  * URL: /user/login
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "credential": "steve.johnson@gmail.com",
      "password": "secret password"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "firstName": "Steve",
      "lastName": "Johnson",
      "email": "Steve.Johnson@gmail.com",
      "username": "Steve",
      "token": ""
    }
    ```

* Error Response: Invalid credentials
  * Status Code: 401
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Invalid credentials",
      "statusCode": 401
    }
    ```

* Error response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "credential": "Email or username is required",
        "password": "Password is required"
      }
    }
    ```

### Sign Up a User
User: Home Owner

Creates a new user, logs them in as the current user, and returns the current
user's information.

1. A new user opens up the web appicliation and clicks on the sign up button.
2. A sign up form page appears and the user inputs the information and submits. If successful the user is brought to the home screen and a welcome email is sent.
3. The user is prompted to create their first project

* Require Authentication: false
* Request
  * Method: POST
  * URL: /user/signup
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "firstName": "Steve",
      "lastName": "Johnson",
      "username": "SteveJohnson",
      "email": "Steve.Johnson@gmail.com",
      "password": "secret password"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "firstName": "Steve",
      "lastName": "Johnson",
      "username": "SteveJohnson",
      "email": "Steve.Johnson@gmail.com",
      "token": ""
    }
    ```

* Error response: User already exists with the specified email
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "User already exists",
      "statusCode": 403,
      "errors": {
        "email": "User with that email already exists"
      }
    }
    ```

* Error response: User already exists with the specified username
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "User already exists",
      "statusCode": 403,
      "errors": {
        "username": "User with that username already exists"
      }
    }
    ```

* Error response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "email": "Invalid email",
        "username": "Username is required",
        "firstName": "First Name is required",
        "lastName": "Last Name is required"
      }
    }
    ```

## Projects

### Create A Project




### Get Projects based on User

User: Home Owner
Returns all the projects created by the current user.

* Require Authentication: true
* Request
  * Method: GET
  * URL: /user/:userId/projects
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "Projects": [
        {
      "id": 1,
      "itemId": 1,
      "name": "address + Username?",
      "address": "123 Happy Lane",
      "email": "steve.johnson@gmail.com",
      "phone": "617-482-5988",
      "signatureDate": "default",
      "salesRep": "default",
      "surveyScheduleDate": "default",
      "surveyScheduleTime": "default",
      "surveyStatus": "default",
      "surveyCompleteDate":"default",
      "welcomeCallStatus": "default",
      "welcomeCallCompleteDate":"default",
      "dealStatus": "default",
      "overallStatus": "default",
      "ntpStatus": "default",
      "ntpCompletedDate": "default",
      "designStatus": "default",
      "designSubmittedDate": "default",
      "desiginReceivedDate": "default",
      "permitStatus": "default",
      "permitReceivedDate": "default",
      "permitApplied":"default",
      "permitAppliedDate": "default",
      "installStatus": "default",
      "installCompletedDate": "default",
      "systemPrice": "default",
      "ahjInspectionStatus": "default",
      "ahjInspectionDate": "default",
      "economicReviewStatus": "default",
      "economicReviewDate": "default",
      "mpuStatus": "default",
      "mpuDate": "default",
      "ptoStatus": "default",
      "ptoDate": "default",
      "panelQty": "default",
      "leadSource": "default",
      "setter": "default",
      "redline": "default",
      "systemPrice": "default",
      "downPayment": "default",
      "dealerPercentage": "default",
      "dealerFeeAmount": "default",
      "mp1": "default",
      "systemSize": "default",
      "adders": "default",
      "principle": "default",
      "netAdditional": "default",
      "PPW": "default",
      "netPPW": "default",
      "addersTotal": "default",
      "updates": "default",
    }
      ]
    }
    ```


* Error response: Couldn't find a Project with the specified user id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Project couldn't be found",
      "statusCode": 404
    }
    ```


### Create a Project

Creates and returns a new project with or without an album.

* Require Authentication: true
* Request
  * Method: POST
  * URL: /projects
  * Headers:
    * Content-Type: application/json
  * Body :


    ```json
    {
      "Projects": [
        {
      "id": 1,
      "itemId": 1,
      "name": "address + Username?",
      "address": "123 Happy Lane",
      "email": "steve.johnson@gmail.com",
      "phone": "617-482-5988",
      "signatureDate": "default",
      "salesRep": "default",
      "surveyScheduleDate": "default",
      "surveyScheduleTime": "default",
      "surveyStatus": "default",
      "surveyCompleteDate":"default",
      "welcomeCallStatus": "default",
      "welcomeCallCompleteDate":"default",
      "dealStatus": "default",
      "overallStatus": "default",
      "ntpStatus": "default",
      "ntpCompletedDate": "default",
      "designStatus": "default",
      "designSubmittedDate": "default",
      "desiginReceivedDate": "default",
      "permitStatus": "default",
      "permitReceivedDate": "default",
      "permitApplied":"default",
      "permitAppliedDate": "default",
      "installStatus": "default",
      "installCompletedDate": "default",
      "systemPrice": "default",
      "ahjInspectionStatus": "default",
      "ahjInspectionDate": "default",
      "economicReviewStatus": "default",
      "economicReviewDate": "default",
      "mpuStatus": "default",
      "mpuDate": "default",
      "ptoStatus": "default",
      "ptoDate": "default",
      "panelQty": "default",
      "leadSource": "default",
      "setter": "default",
      "redline": "default",
      "systemPrice": "default",
      "downPayment": "default",
      "dealerPercentage": "default",
      "dealerFeeAmount": "default",
      "mp1": "default",
      "systemSize": "default",
      "adders": "default",
      "principle": "default",
      "netAdditional": "default",
      "PPW": "default",
      "netPPW": "default",
      "addersTotal": "default",
      "updates": "default",
    }
      ]
    }
    ```

For a visual you can go to 	[Db Diagram](https://dbdiagram.io/) and test out how you want your schema to look.

![DB Diagram](./public/CustomerPortal.png)
