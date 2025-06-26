# Blog Application

A full-stack blog application that enables users to create accounts, write blog posts, upload images, and engage with content through comments. Built with modern web technologies for a seamless user experience.

## 🚀 Features

- **User Authentication**: Secure user registration, login, and logout with JWT
- **Blog Management**: Create, view, and manage blog posts
- **Image Upload**: Upload and display images with blog posts using Multer
- **Comments System**: Comment on your own and others' blog posts
- **Responsive Design**: Mobile-friendly interface that works across all devices
- **Session Management**: Secure user sessions with cookie-based authentication

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: EJS templating engine
- **Authentication**: JSON Web Tokens (JWT)
- **File Upload**: Multer middleware
- **Environment Management**: dotenv
- **Development**: Nodemon for auto-restart

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas account)
- [Git](https://git-scm.com/)

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/dharmendra016/blogApplication.git
cd blogApplication
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory and add the following variables:

```env
PORT=3000
JWT_SECRET=your_jwt_secret_key
DATABASE_URL=your_mongodb_connection_string
```

**Environment Variables Explanation:**
- `PORT`: The port number on which the server will run (default: 3000)
- `JWT_SECRET`: A secret key for JWT token signing (use a strong, random string)
- `DATABASE_URL`: Your MongoDB connection string

**For MongoDB Atlas:**
```
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/blogapp?retryWrites=true&w=majority
```

**For Local MongoDB:**
```
DATABASE_URL=mongodb://localhost:27017/blogapp
```

### 4. Start the Application

**Development mode (with auto-restart):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

### 5. Access the Application

Open your web browser and navigate to:
```
http://localhost:3000
```

## 📁 Project Structure

```
blogApplication/
├── configs/
│   └── databaseConnection.js    # Database configuration
├── controllers/
│   ├── blogController.js        # Blog-related logic
│   ├── commentController.js     # Comment handling
│   └── userController.js        # User authentication
├── middlewares/
│   └── auth.js                  # Authentication middleware
├── models/
│   ├── blogModel.js             # Blog data model
│   ├── commentModel.js          # Comment data model
│   └── userModel.js             # User data model
├── public/
│   ├── image/                   # Static images
│   └── uploads/                 # User uploaded files
├── routes/
│   ├── blogRoutes.js            # Blog routes
│   ├── commentRoutes.js         # Comment routes
│   ├── staticRoutes.js          # Static content routes
│   └── userRoute.js             # User routes
├── services/
│   └── auth.js                  # Authentication services
├── views/
│   ├── partials/                # EJS partial templates
│   ├── addBlog.ejs             # Create blog page
│   ├── blog.ejs                # Individual blog view
│   ├── home.ejs                # Homepage
│   ├── login.ejs               # Login page
│   └── signup.ejs              # Registration page
├── .env                        # Environment variables
├── index.js                    # Main application file
├── package.json                # Project dependencies
└── README.md                   # Project documentation
```

## 🔧 API Endpoints

### Authentication
- `POST /user/signup` - User registration
- `POST /user/login` - User login
- `GET /user/logout` - User logout

### Blog Management
- `GET /blog` - Get all blogs
- `POST /blog` - Create new blog
- `GET /blog/:id` - Get specific blog

### Comments
- `POST /comment/:blogId` - Add comment to blog
- `GET /comment/:blogId` - Get blog comments

## 🚀 Usage Guide

1. **Register**: Create a new account using the signup page
2. **Login**: Access your account with email and password
3. **Create Blog**: Navigate to "Add Blog" to create new posts
4. **Upload Images**: Add relevant images to your blog posts
5. **View Blogs**: Browse all blogs on the homepage
6. **Comment**: Engage with other users through comments

## 🔒 Security Features

- Password encryption and secure authentication
- JWT-based session management
- Input validation and sanitization
- Secure file upload handling
- Environment variable protection

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

## 📝 License

This project is licensed under the ISC License. See the LICENSE file for details.

## 🐛 Issues & Support

If you encounter any bugs or have questions:

1. Check existing [issues](https://github.com/dharmendra016/blogApplication/issues)
2. Create a new issue with detailed description
3. Include steps to reproduce the problem

## 📞 Contact

- **Author**: Dharmendra Singh
- **GitHub**: [@dharmendra016](https://github.com/dharmendra016)
- **Email**: [Your Email]

---

⭐ If you found this project helpful, please give it a star!
