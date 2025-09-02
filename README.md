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
- **Frontend:** [https://your-wallet-frontend.vercel.app](https://your-wallet-frontend.vercel.app)
- **Backend API:** [https://your-wallet-backend.herokuapp.com](https://your-wallet-backend.herokuapp.com)

### 🎥 Demo Video
[📺 Watch Full Demo (5-10 minutes)](https://your-demo-video-link.com)

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
git clone https://github.com/yourusername/digital-wallet-frontend.git
cd digital-wallet-frontend

# Clone the backend repository (if separate)
git clone https://github.com/yourusername/digital-wallet-backend.git
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
Email: admin@digitalwallet.com
Password: Admin@123
```

### Agent Access
```
Email: agent@digitalwallet.com  
Password: Agent@123
```

### User Access
```
Email: user@digitalwallet.com
Password: User@123
```

## 📱 API Documentation

### Base URL
```
Production: https://your-wallet-backend.herokuapp.com/api/v1
Development: http://localhost:5000/api/v1
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

## 🎯 Features Walkthrough

### 🎪 Guided Tour Steps
1. **Navigation Menu** - Explore different dashboard sections
2. **Dashboard Stats** - Understanding key metrics and data
3. **Chart Visualization** - Analyzing trends and patterns  
4. **Search & Filters** - Finding and filtering records efficiently
5. **Theme Toggle** - Switching between light and dark modes

### 📊 Data Visualization
- **Balance Cards** - Real-time wallet balances
- **Transaction Charts** - Monthly/weekly transaction trends
- **User Analytics** - Registration and activity patterns
- **Commission Tracking** - Agent earnings visualization

### 🔍 Advanced Features
- **Smart Search** - Search across multiple fields
- **Date Range Filtering** - Custom date selections
- **Status Filters** - Filter by transaction status
- **Amount Sorting** - Sort by transaction amounts
- **Export Options** - Download filtered data

## 🚀 Deployment

### Frontend Deployment (Vercel)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel --prod
```

### Backend Deployment (Heroku)
```bash
# Login to Heroku
heroku login

# Create Heroku app
heroku create your-wallet-backend

# Deploy
git push heroku main
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

### Developer Information
- **Developer:** [Your Name]
- **Email:** your.email@example.com
- **LinkedIn:** [Your LinkedIn Profile]
- **GitHub:** [Your GitHub Profile]

### Project Links
- **Frontend Repository:** [GitHub Link]
- **Backend Repository:** [GitHub Link]
- **Live Demo:** [Live URL]
- **API Documentation:** [API Docs Link]

---

<div align="center">
  <p><strong>⭐ If you found this project helpful, please give it a star! ⭐</strong></p>
  <p>Made with ❤️ by [Your Name]</p>
</div>