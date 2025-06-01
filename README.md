# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



ecommerce-app/
│
├── public/
├── src/
│   ├── assets/               # Images, icons, etc.
│   ├── components/           # Reusable UI components (e.g., Button, Modal)
│   ├── pages/                # Route-level pages (Home, Product, Cart, etc.)
│   ├── features/             # Features like cart, auth, products
│   ├── hooks/                # Custom hooks
│   ├── context/              # Context providers (e.g., AuthContext)
│   ├── redux/                # If using Redux: actions, reducers, store
│   ├── utils/                # Helper functions, API clients
│   ├── App.js
│   ├── index.js
│   └── routes.js             # Route configuration
├── .env
├── package.json
└── README.md


🔧 Key Features to Build
🛍️ Customer-Facing Features
1. Product Listings – Grid with filtering, sorting (State, Props, List rendering)
2. Product Detail Page – Dynamic routing, useParams
3. Shopping Cart – useReducer, Context API or Redux
4. Search – Controlled inputs, debounce, useEffect
5. User Authentication
	Login / Signup pages
	Protected Routes (React Router)
6. User Profile
	View/update profile
	View order history
7. Checkout Flow
	Forms
	Step-by-step (multi-page routing or conditional rendering)

⚙️ Admin Dashboard
1. CRUD for Products – Forms, Modal handling
2. Manage Orders – Display, filter, update statuses
3. User Management – Role-based access control
4. Analytics – Charts using libraries like Recharts or Chart.js
5. Responsive Sidebar Navigation – Conditional layout rendering

