# Spring Boot CRUD Application with Angular

Featuring a collection of well-structured and thoroughly documented Spring Boot projects, this repository covers everything from building RESTful APIs to creating microservices and integrating with databases. This project specifically showcases a **Spring Boot CRUD Application** integrated with **Angular** for a seamless full-stack experience. Whether you're new to these technologies or looking for advanced implementations, you'll find useful code examples, best practices, and inspiration. Feel free to explore, contribute, or simply get ideas for your own Spring Boot and Angular projects. Let’s build something great together!

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Introduction
This **Spring Boot CRUD Application** provides a robust solution for managing employee records. It allows users to perform Create, Read, Update, and Delete (CRUD) operations on employee information through a RESTful API, with an Angular front-end for a rich user interface.

## Features
- **User Authentication**: Secure access to the application.
- **CRUD Operations**: Full management of employee records.
- **Pagination**: Efficient handling of large datasets.
- **Sorting**: Easily sort employees by various fields.
- **Exception Handling**: Graceful error responses.
- **Data Validation**: Ensures data integrity during input.

## Technologies Used
| Technology      | Description        |
|-----------------|--------------------|
| **Java**        | Version 17         |
| **Spring Boot** | Version 3.3.4      |
| **Hibernate**   | Version 5.6.5      |
| **MySQL**       | Server version: 9.0.1 MySQL Community Server - GPL |
| **Maven**       | Version 3.8.4      |
| **Angular CLI** | 18.2.8             |
|**Package Manager**| npm 9.9.3        |
| **OS**          |win32 x64           |
| **Node**        | Version 20.18.0    |
| **TypeScript**  | Version 4.3        |
| **Postman**     | For API testing    |

## Installation
To run this application locally, follow these steps:

### Backend Setup (Spring Boot)
1. **Clone the repository:**
    ```bash
    git clone https://github.com/ahmedkhan58555/java/spring-crud-application.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd spring-crud-application/backend
    ```

3. **Open the application in your preferred IDE:**
   - Examples: IntelliJ IDEA, Eclipse, or Spring Tool Suite.
   - I used VsCode...

4. **Configure the application properties:**
   - Update the `src/main/resources/application.properties` file to set your database credentials.
   - Example configuration:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
     spring.datasource.username=your_database_username
     spring.datasource.password=your_database_password
     spring.jpa.hibernate.ddl-auto=update
     spring.jpa.show-sql=true
     ```

5. **Install dependencies:**
   - Ensure Maven is installed on your machine.
   - From the project root, run:
     ```bash
     mvn install
     ```

6. **Run the application:**
    ```bash
    mvn spring-boot:run
    ```

### Frontend Setup (Angular)
1. **Navigate to the Angular project directory:**
    ```bash
    cd ../frontend
    ```

2. **Install Angular CLI** (if not already installed):
    ```bash
    npm install -g @angular/cli
    ```

3. **Install the necessary dependencies:**
    ```bash
    npm install
    ```

4. **Run the Angular application:**
    ```bash
    ng serve
    ```

5. **Open your browser and navigate to:**  
   `http://localhost:4200/`

## Setup
### MySQL Database Setup
To set up the MySQL database for this application:

1. **Install MySQL** if it is not already installed on your machine. You can download it from the [MySQL official website](https://dev.mysql.com/downloads/).

2. **Create a new database** for the application:
   - Open the MySQL command line or a MySQL GUI client (like MySQL Workbench).
   - Run the following SQL command:
     ```sql
     CREATE DATABASE your_database_name;
     ```

3. **Create the necessary tables**: The application will automatically create the necessary tables based on the entity classes when you run it for the first time, thanks to Hibernate's `ddl-auto` property set to `update`.

## Usage
Once both the backend and frontend applications are running, you can use Postman or any REST client to interact with the APIs.

### API Requests:

#### Employee API
| Method | URL                     | Description                      |
|--------|-------------------------|----------------------------------|
| POST   | `/api/employees`        | Create a new employee            |
| GET    | `/api/employees`        | Retrieve all employees           |
| GET    | `/api/employees/{id}`   | Retrieve employee by ID          |
| PUT    | `/api/employees/{id}`   | Update an existing employee      |
| DELETE | `/api/employees/{id}`   | Delete an employee               |

#### User API
| Method | URL                     | Description                      |
|--------|-------------------------|----------------------------------|
| POST   | `/api/users`            | Create a new user                |
| GET    | `/api/users`            | Retrieve all users               |
| GET    | `/api/users/{id}`       | Retrieve user by ID              |
| PUT    | `/api/users/{id}`       | Update an existing user          |
| DELETE | `/api/users/{id}`       | Delete a user                    |

## API Endpoints
| Method | Endpoint               | Description                     |
|--------|------------------------|---------------------------------|
| POST   | /api/employees         | Create a new employee           |
| GET    | /api/employees         | Retrieve all employees          |
| GET    | /api/employees/{id}    | Retrieve employee by ID         |
| PUT    | /api/employees/{id}    | Update an existing employee     |
| DELETE | /api/employees/{id}    | Delete an employee              |


### Exmaple Requests
#### Employee API

1. **Create Employee**
   - **Method:** `POST`
   - **URL:** `/api/employees`
   - **Request Body:**
     ```json
     {
       "name": "John Doe",
       "position": "Software Engineer",
       "department": "Engineering",
       "salary": 75000
     }
     ```
   - **Response:**
     ```json
     {
       "id": 1,
       "name": "John Doe",
       "position": "Software Engineer",
       "department": "Engineering",
       "salary": 75000
     }
     ```

2. **Get All Employees**
   - **Method:** `GET`
   - **URL:** `/api/employees`
   - **Response:**
     ```json
     [
       {
         "id": 1,
         "name": "John Doe",
         "position": "Software Engineer",
         "department": "Engineering",
         "salary": 75000
       },
       {
         "id": 2,
         "name": "Jane Smith",
         "position": "Product Manager",
         "department": "Product",
         "salary": 85000
       }
     ]
     ```

3. **Get Employee by ID**
   - **Method:** `GET`
   - **URL:** `/api/employees/{id}`
   - **Response:**
     ```json
     {
       "id": 1,
       "name": "John Doe",
       "position": "Software Engineer",
       "department": "Engineering",
       "salary": 75000
     }
     ```

4. **Update Employee**
   - **Method:** `PUT`
   - **URL:** `/api/employees/{id}`
   - **Request Body:**
     ```json
     {
       "name": "John Doe",
       "position": "Senior Software Engineer",
       "department": "Engineering",
       "salary": 80000
     }
     ```
   - **Response:**
     ```json
     {
       "id": 1,
       "name": "John Doe",
       "position": "Senior Software Engineer",
       "department": "Engineering",
       "salary": 80000
     }
     ```

5. **Delete Employee**
   - **Method:** `DELETE`
   - **URL:** `/api/employees/{id}`
   - **Response:**
     ```json
     {
       "message": "Employee deleted successfully"
     }
     ```

#### User API

1. **Create User**
   - **Method:** `POST`
   - **URL:** `/api/users`
   - **Request Body:**
     ```json
     {
       "username": "johndoe",
       "email": "johndoe@example.com",
       "password": "securepassword"
     }
     ```
   - **Response:**
     ```json
     {
       "id": 1,
       "username": "johndoe",
       "email": "johndoe@example.com"
     }
     ```

2. **Get All Users**
   - **Method:** `GET`
   - **URL:** `/api/users`
   - **Response:**
     ```json
     [
       {
         "id": 1,
         "username": "johndoe",
         "email": "johndoe@example.com"
       },
       {
         "id": 2,
         "username": "janesmith",
         "email": "janesmith@example.com"
       }
     ]
     ```

3. **Get User by ID**
   - **Method:** `GET`
   - **URL:** `/api/users/{id}`
   - **Response:**
     ```json
     {
       "id": 1,
       "username": "johndoe",
       "email": "johndoe@example.com"
     }
     ```

4. **Update User**
   - **Method:** `PUT`
   - **URL:** `/api/users/{id}`
   - **Request Body:**
     ```json
     {
       "username": "john_updated",
       "email": "john_updated@example.com"
     }
     ```
   - **Response:**
     ```json
     {
       "id": 1,
       "username": "john_updated",
       "email": "john_updated@example.com"
     }
     ```

5. **Delete User**
   - **Method:** `DELETE`
   - **URL:** `/api/users/{id}`
   - **Response:**
     ```json
     {
       "message": "User deleted successfully"
     }
     ```

### Note
Ensure that you have the backend running before making these API calls. Adjust the URLs according to your server's configuration.


## Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request. You can also open issues for suggestions or bugs.

## License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## Author
**Muhammad Ahmed Khan**  
GitHub: [ahmedkhan58555](https://github.com/ahmedkhan58555)  
Feel free to reach out through GitHub for any inquiries or feedback!

## Future Enhancements
I am planning to integrate additional features such as user roles and permissions, as well as advanced reporting functionalities. You are welcome to contribute to the project and be a part of it!
