# World-Countries
This is a web application that provides information about world countries for the FINETO IoT product firm project.
# Countries App

This repository contains a web application built using Vite and React that displays information about countries. The app provides data such as the country's name, flag, population, and languages spoken. The country data is fetched from the REST API provided by [restcountries.com](https://restcountries.com/v2/all), and it can be filtered using the search input.

## Features

- Table View: The app displays the country data in a table format, making it easy to browse through the information. Each row in the table represents a country and includes details such as the country's name, flag, population, and languages spoken.

- Card Component: In addition to the table view, the app offers a card component for each country. The card displays a concise overview of the country's information, including the flag, name, population, and languages spoken.

- Search Functionality: The application allows users to search for specific countries by entering a search term in the input field. As the user types, the displayed results are dynamically filtered based on the search query.

## Technologies Used

The following technologies were used to develop this application:

- Vite: A fast build tool that provides a modern development environment for JavaScript projects.

- React: A popular JavaScript library for building user interfaces.

- REST API: The application fetches country data from the REST API provided by [restcountries.com](https://restcountries.com/v2/all).

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository to your local machine using the following command:

    ```
    git clone https://github.com/Dawit-Mequanent/World-Countries.git
    ```

2. Navigate to the project directory:

    ```
    cd World-Countries/World
    ```

3. Remove the node_modules directory:
   ```
   rm -rf node_modules
   ```

4. Reinstall dependencies using npm:
   ```
  npm install
   ```

5. Start the development server:

    ```
    npm run dev
    ```

6. Open your browser and visit `http://localhost:5173` to access the application.

## Contributing

If you would like to contribute to this project, you can follow these steps:

1. Fork the repository on GitHub.

2. Clone your forked repository to your local machine.

3. Create a new branch for your feature or bug fix.

4. Make the necessary changes and commit them.

5. Push your changes to your forked repository.

6. Submit a pull request to the main repository, providing a detailed description of your changes.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

## Acknowledgments

- The country data used in this application is sourced from the REST API provided by [restcountries.com](https://restcountries.com/v2/all).

- The Vite and React communities for their excellent documentation and resources.

## Demo Link
https://exquisite-starburst-9ce8c1.netlify.app/
