# 💰 Digital Wallet Frontend

<div align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-1.9.5-764ABC?style=for-the-badge&logo=redux&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.0.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.3.2-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/RTK_Query-1.9.5-FF6B6B?style=for-the-badge&logo=react-query&logoColor=white" />
</div>

<p align="center">
  <strong>A secure, role-based Digital Wallet System similar to bKash or Nagad</strong>
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-demo">Demo</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-usage">Usage</a> •
  <a href="#-api-documentation">API</a>
</p>

---

## 🚀 Project Overview

This Digital Wallet Frontend is a comprehensive financial application built with React.js, Redux Toolkit, and RTK Query. It provides a secure, user-friendly interface for digital financial transactions with role-based access control for Users, Agents, and Admins.

### 🌟 Key Highlights
- **🔐 Secure JWT Authentication** with role-based access
- **📱 Fully Responsive Design** for all devices
- **⚡ Real-time State Management** with Redux Toolkit
- **🎨 Modern UI/UX** with Tailwind CSS
- **📊 Data Visualization** with interactive charts and tables
- **🔍 Advanced Filtering & Search** capabilities
- **🎯 Guided User Tours** for better onboarding
- **🌙 Dark/Light Mode** support

## ✨ Features

### 🏠 Public Landing Experience
- **Modern Landing Page** with hero banner and call-to-action
- **Sticky Navigation** with mega menu
- **About Us** - Service story and mission
- **Features Showcase** with icons and descriptions
- **Contact Form** with inquiry submission
- **FAQ Section** for common questions
- **Responsive Design** across all devices

### 🔐 Authentication System
- **JWT-based Login/Registration**
- **Role Selection** (User/Agent)
- **Persistent Sessions** (stays logged in after refresh)
- **Secure Logout** functionality
- **Role-based Redirections**

### 👤 User Dashboard
- **📊 Wallet Overview** with balance and quick stats
- **💰 Deposit Money** via agent cash-in simulation
- **🏧 Withdraw Funds** with validation
- **📤 Send Money** to other users (search by phone/email)
- **📝 Transaction History** with pagination and filtering
- **⚙️ Profile Management** - update personal info and password

### 🏪 Agent Dashboard
- **📈 Business Overview** with cash-in/out summary
- **💸 Add Money** to user wallets
- **🏦 Withdraw Money** from user accounts
- **📋 Transaction Management** - view all handled transactions
- **💼 Commission Tracking** (optional feature)
- **👤 Profile Settings** - manage agent information

### 🛡️ Admin Dashboard
- **📊 System Analytics** - total users, agents, transactions
- **👥 User Management** - view, block/unblock users
- **🏪 Agent Management** - approve, suspend agents
- **🔍 Advanced Transaction Monitoring** with multiple filters
- **⚙️ System Configuration** - adjust fees and limits
- **🔧 Admin Profile Management**

### 🎯 Enhanced User Experience
- **🔍 Smart Search & Filtering** on all listing pages
- **📄 Pagination** for better performance
- **📊 Data Visualizations** - cards, charts, tables
- **🔔 Toast Notifications** for user feedback
- **🎪 Guided Tours** with 5+ interactive steps
- **💀 Skeleton Loading** for smooth UX
- **🌓 Theme Toggle** (Light/Dark mode)

## 🎬 Demo

### 🌐 Live URLs
- **Frontend:** [https://digital-wallet-opal.vercel.app](https://digital-wallet-opal.vercel.app)
- **Backend API:** [https://digital-wallet-api-seven.vercel.app](https://digital-wallet-api-seven.vercel.app)

*Showcasing registration, login, wallet operations, and admin features*

## 🛠️ Tech Stack

### Frontend Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2.0 | UI Component Library |
| **TypeScript** | 5.0.4 | Type Safety |
| **Redux Toolkit** | 1.9.5 | State Management |
| **RTK Query** | 1.9.5 | API Data Fetching |
| **React Router** | 6.11.2 | Client-side Routing |
| **Tailwind CSS** | 3.3.2 | Utility-first Styling |
| **React Hook Form** | 7.44.3 | Form Handling |
| **React Hot Toast** | 2.4.1 | Notifications |
| **React Joyride** | 2.5.2 | Guided Tours |
| **Recharts** | 2.6.2 | Data Visualization |
| **Lucide React** | 0.263.1 | Modern Icons |

### Backend Integration
- **REST API** consumption via RTK Query
- **JWT Authentication** with automatic token refresh
- **Real-time Data** synchronization

## 🚀 Installation

### Prerequisites
- **Node.js** (v16.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Clone the Repository
```bash
# Clone the frontend repository
git clone https://github.com/rakibul561/digital-wallet-client
cd digital-wallet-frontend

# Clone the backend repository (if separate)
git clone https://github.com/rakibul561/digital-wallet-api
```

### Install Dependencies
```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### Environment Setup
Create a `.env` file in the root directory:
```env
# API Configuration
REACT_APP_API_BASE_URL=http://localhost:5000/api
REACT_APP_API_VERSION=v1

# Authentication
REACT_APP_JWT_SECRET=your-jwt-secret-key

# App Configuration
REACT_APP_APP_NAME=Digital Wallet
REACT_APP_APP_VERSION=1.0.0

# Optional: Analytics
REACT_APP_GOOGLE_ANALYTICS_ID=your-ga-id
```

## 🏃‍♂️ Usage

### Development Mode
```bash
# Start the development server
npm start
# or
yarn start

# The app will open at http://localhost:3000
```

### Build for Production
```bash
# Create an optimized production build
npm run build
# or
yarn build

# The build folder will contain optimized files
```

### Testing
```bash
# Run the test suite
npm test
# or
yarn test

# Run tests with coverage
npm run test:coverage
```

### Linting & Formatting
```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix

# Format code with Prettier
npm run format
```

## 🔧 Project Structure

```
digital-wallet-frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Basic UI elements
│   │   ├── forms/          # Form components
│   │   ├── charts/         # Chart components
│   │   └── layout/         # Layout components
│   ├── pages/              # Page components
│   │   ├── public/         # Public pages
│   │   ├── user/           # User dashboard
│   │   ├── agent/          # Agent dashboard
│   │   └── admin/          # Admin dashboard
│   ├── store/              # Redux store configuration
│   │   ├── api/            # RTK Query API slices
│   │   ├── slices/         # Redux slices
│   │   └── index.ts        # Store setup
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── types/              # TypeScript type definitions
│   ├── constants/          # App constants
│   └── styles/            # Global styles
├── .env.example           # Environment variables template
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🔐 Test Credentials

### Admin Access
```
Email: rakib101500@gmail.com
Password: 123456789A@
```



## 📱 API Documentation

### Base URL
```
Production: https://digital-wallet-api-seven.vercel.app/api
Development: http://localhost:5000/api
```

### Key Endpoints

#### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `POST /auth/refresh` - Refresh JWT token
- `POST /auth/logout` - User logout

#### User Operations
- `GET /user/profile` - Get user profile
- `PUT /user/profile` - Update profile
- `GET /user/balance` - Get wallet balance
- `GET /user/transactions` - Get transaction history

#### Transactions
- `POST /transactions/deposit` - Deposit money
- `POST /transactions/withdraw` - Withdraw money
- `POST /transactions/transfer` - Send money
- `GET /transactions` - Get all transactions

#### Admin Operations
- `GET /admin/users` - Get all users
- `PUT /admin/users/:id/status` - Block/unblock user
- `GET /admin/agents` - Get all agents
- `GET /admin/analytics` - System analytics

### Developer Information
- **Developer:** [Rakibul hasan]
- **Email:** devrakib2@gmail.com
- **LinkedIn:** [[Your LinkedIn Profile](https://www.linkedin.com/in/rakibul-hasan-b94123271/)]
- **GitHub:** [[Your GitHub Profile](https://github.com/rakibul561)]

