
# Card Management System

The Card Management System is a web application built using React.js. It allows users to manage and view their cards, search by card name, and filter by card type.

## Getting Started

To run the Card Management System on your local machine, follow the instructions below.

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js (version 14 or above)
- npm (Node Package Manager, usually comes with Node.js installation)

### Installation

1. Clone the repository to your local machine using the following command:

   ```shell
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```shell
   cd card-management-system
   ```

3. Install the dependencies by running the following command:

   ```shell
   npm install
   ```

### Running the Application

Once the installation is complete, you can start the application by running the following command:

```shell
npm start
```

This command will start the development server and open the application in your default web browser. If it doesn't open automatically, you can access the application by visiting [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

If you want to build the application for production, you can run the following command:

```shell
npm run build
```

This command will create an optimized production build in the `build` directory. You can then deploy this build to a web server of your choice.

## Project Structure

The project follows a modular structure, with components organized in separate files. Here's an overview of the project structure:

- `src/`
  - `components/`: Contains the React components used in the application.
  - `data/`: Contains the JSON data used for cards.
  - `styles/`: Contains the CSS styles for the components.
  - `App.js`: The entry point of the application and the main container component.
  - `index.js`: The main entry file that renders the `App` component.

## Usage

- The card list is displayed on the home page. You can scroll down to load more cards.
- Use the search bar at the top to search for cards by name. The list will update dynamically as you type.
- Use the filter dropdown to filter cards by card type. The list will update immediately after selecting a filter option.

## Contributing

If you'd like to contribute to the Card Management System, you can follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes and commit your code.
4. Push the changes to your forked repository.
5. Submit a pull request to the original repository.

Please make sure to follow the existing code style and provide detailed information about your changes in the pull request.

## Live Demo

You can access a live demo of the Card Management System by visiting [https://card-management-apps.netlify.app/](https://card-management-apps.netlify.app/).

