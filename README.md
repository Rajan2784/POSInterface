# POS Interface

This is a React-based POS (Point of Sale) interface for managing and selling services. It includes features like a service listing, filtering, searching, adding items to a cart, and generating printable receipts.


## Setup Instructions

Follow these steps to set up and run the project on your local machine:

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Rajan2784/POSInterface.git
   cd POSInterface
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project

1. Start the development server:

   ```bash
   npm run dev
   # or
   yarn run dev
   ```

2. Open the application in your browser:

   ```
   http://localhost:5173
   ```
### Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

The build files will be available in the `build` directory.

## Features

1. **Service Listing**
   - Displays all available services with details like name, description, price, and an image.

2. **Add to Cart**
   - Users can add services to their cart. If a service is already in the cart, the "Add to Cart" button is disabled.

3. **Search Functionality**
   - A search bar allows users to find services by name instantly.

4. **Category Filtering**
   - A dropdown filter lets users filter services by categories like Fitness, Therapy, and Workshops.

5. **Cart Management**
   - Displays the services added to the cart with their name and cost.

6. **Receipt Generator**
   - Generates a detailed receipt containing customer details and the services purchased.
   - Includes a print receipt functionality.

7. **Toast Notifications**
   - Provides user feedback when services are added to the cart using toast messages.

8. **Responsive Design**
   - Optimized for both desktop and mobile devices.

## Assumptions and Limitations

### Assumptions

- Services have predefined categories like Fitness, Therapy, and Workshops.
- The application assumes users are familiar with basic POS interfaces.

### Limitations

- The application doesn't persist cart or service data between sessions.
- No authentication or user roles have been implemented (e.g., admin vs. customer).
- The filtering and search functionalities are case-sensitive.

## Usage Instructions

1. **Browse Services**: View the list of available services.
2. **Search and Filter**: Use the search bar or category dropdown to find services.
3. **Add to Cart**: Add services to the cart and view their details.
4. **Generate Receipt**: Provide customer details and generate a printable receipt.

## Folder Structure

```plaintext
services-pos-interface/
├── public/               # Static files
├── src/
│   ├── components/       # React components
│   ├── reduxStore/       # Redux slices and store
|   ├── pages             # Pages 
│   ├── App.jsx           # Main app component
│   └── main.jsx          # React entry point
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Dependencies

- **React**: UI library
- **Vite**:Bundle
- **Redux Toolkit**: State management
- **React Toastify**: Notifications
- **Tailwind CSS**: Styling
- **React Icons**: Icons for the UI
