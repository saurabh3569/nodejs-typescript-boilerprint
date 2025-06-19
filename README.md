# Node.js + TypeScript Boilerplate

A clean and scalable boilerplate setup for building secure and well-structured **Node.js** backend applications using **TypeScript**.

## 🔧 Tech Stack

- **Node.js**
- **TypeScript**
- **Express.js**
- **ESLint + Prettier** for linting and formatting
- **Dotenv** for environment variables
- **Modular structure** with MVC architecture

## 📁 Project Structure

```

\|-- .env # Environment variables
\|-- .gitignore # Files to ignore in Git
\|-- .prettierrc # Prettier configuration
\|-- eslint.config.js # ESLint configuration
\|-- tsconfig.json # TypeScript configuration
\|-- src
\|-- index.ts # Entry point
\|-- configs # Configurations (DB, env)
\|-- constants # Constants and enums
\|-- controllers # Route controllers
\|-- middleware # Express middlewares
\|-- models # Mongoose/DB models
\|-- routes # API route definitions
\|-- utils # Helper utilities
\|-- validation # Schema validations

```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/saurabh3569/nodejs-typescript-boilerprint.git
cd nodejs-typescript-boilerprint
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/your-db
JWT_SECRET=your-secret-key
```

### 4. Start the development server

```bash
npm run dev
```

Or, to build and run production:

```bash
npm run build
npm start
```

## ✅ Available Scripts

| Script           | Description                      |
| ---------------- | -------------------------------- |
| `npm run dev`    | Start server in development mode |
| `npm run build`  | Compile TypeScript to JavaScript |
| `npm start`      | Start server from compiled build |
| `npm run lint`   | Run ESLint for code linting      |
| `npm run format` | Format code using Prettier       |

## 🛡️ Features

- Modular architecture
- JWT-based authentication
- Centralized error handling
- Schema validation middleware
- Environment-based configuration
- Easily scalable folder structure

## 🧪 Coming Soon

- Unit & integration tests (Jest or Mocha)
- Swagger API documentation
- Dockerization support

## 📄 License

This project is licensed under the MIT License.
