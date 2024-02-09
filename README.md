#Blog Application
This is a simple blog application where users can create accounts, login, logout, create blog posts, and view posts created by other users. The application is built using Node.js for the backend, MongoDB for the database, and EJS for the frontend.

Installation
Clone the repository to your local machine:
git clone https://github.com/dharmendra016/blogApplication.git

Navigate to the project directory:
cd blogApplication

Install dependencies:
npm install

Create a .env file in the root directory of the project and add the following environment variables:

PORT=3000
DATABASE_URL=your_mongodb_connection_string

Replace your_mongodb_connection_string with your MongoDB connection string.

Usage
Start the server:

npm start
Open your web browser and navigate to http://localhost:3000 to access the application.

Features

User Authentication: Users can sign up, log in, and log out securely.
Create Blog Posts: Logged-in users can create new blog posts.
View Blog Posts: Users can view all blog posts created by other users.
Responsive Design: The application is designed to work seamlessly across different screen sizes.
FileUpload: you can upload photo related to the blog post.

Technologies Used

Node.js: Backend JavaScript runtime environment.
Express.js: Web application framework for Node.js.
MongoDB: NoSQL database for storing user data and blog posts.
EJS: Embedded JavaScript templates for rendering dynamic content on the frontend.
Express Session: Middleware JWT for managing user sessions.
Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.
