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
![Spring Boot Logo](data:image/png;base64,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)
