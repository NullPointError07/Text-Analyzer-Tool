# WSD Text Analyzer Service

## Table of Contents

- [Installation](#Installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [Starting Corn Services](#starting-cron-services)
- [Running Tests](#running-tests)
- [Authors](#authors)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/NullPointError07/Text-Analyzer-Tool.git
   ```

2. **Go to the project directory**
   ```sh
   cd Toxic Text-Analyzer-Tool
   ```
3. **Install dependencies**

   Make sure you have Node.js installed. Then run:

   ```sh
   npm install
   ```

## Configurations

1. **Environment Variables**

   Create a `.env` file in the root of the project and add necessary environment variables given below:

   ```sh
   PORT=
   MONGO_URI=
   SECRET=YOUR_OWN_SECRET_KEY
   GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
   GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
   ```

## Running the Project

1. **Build the development Server**

   ```sh
   npm run build

   ```

2. **Start the development Server**

   ```sh
   npm run start

   ```

   You can see in server log

   `Server is running on http://localhost:YOUR_PORT`

3. **Running Tests**

   To run tests with Jest, use the following command:

   ```sh
   npx jest

   ```

## Authors

- [Md Taukir Alam](https://github.com/NullPointError07)
