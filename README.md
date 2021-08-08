<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, Task-Manager-API, twitter_handle, matthewjkale@gmail.com, Task Manager API, project_description
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Task Manager API</h3>

  <p align="center">
    API to manage tasks with the ability to create and login as a user then create tasks and manage both users and tasks
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![alt text](https://github.com/Matthewk7/Task-Manager-API/blob/main/img/Project_Image.png?raw=true)

### Built With

- [Nodejs](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com)
- [Heroku](https://www.heroku.com)
- [OpenAPI](https://www.openapis.org)

<!-- USAGE EXAMPLES -->

## Usage

### User

To get started select the create user endpoint **/users**.

This will allow you to create a user login and profile that is stored in the database.

![alt text](https://github.com/Matthewk7/Task-Manager-API/blob/main/img/Create_User.png?raw=true)

Select **Try it out** to test the endpoint.

You must enter your account data in the request body.

**Note:** the sample body may not work if it is already an account in the database

After you execute the **GET** request, a **201** response will be returned if the user was successfully created.

![alt text](https://github.com/Matthewk7/Task-Manager-API/blob/main/img/User_Created.png?raw=true)

In order to authenticate the endpoints that would need a user to login, copy the token string in the response and enter it into the Authorize button at the beginning of the page.

![alt text](https://github.com/Matthewk7/Task-Manager-API/blob/main/img/Authorize.png?raw=true)

Now you are able to test any other user enpoints. Be sure to include any response bodies or parameters that are neccessary shown by the documentation.

**Note:** If the user is logged out, you must login again and replace the token with the updated token in order to authenticate.

### Tasks

When logged in, you can create and manager tasks for a user. Select Create a task endpoint **POST /tasks** to get started.

![alt text](https://github.com/Matthewk7/Task-Manager-API/blob/main/img/Create_Task.png?raw=true)

Be sure to provide the neccessary response body.

When the task is created, copy the the task id value **\_id**. This value will be used to delete and update a specific task.

You can check all of the users tasks by running **GET /tasks**.

When deleting and updating a specific task, provide the task id you got from creating a task or reading all tasks in the **Task ID** parameter.

## Contact

Matthew Kale - [Email](matthewjkale@gmail.com)

Project Link: [https://github.com/Matthewk7/Task-Manager-API](https://github.com/Matthewk7/Task-Manager-API)
