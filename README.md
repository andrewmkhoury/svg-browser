# SVG File Browser

A simple web application to browse and search SVG files using Node.js, Express, and Fuse.js for fuzzy searching.

## Features

- Browse SVG files in a specified directory
- Fuzzy search functionality for file names
- Responsive grid layout for displaying SVG files
- Configurable SVG folder path using .env file

## Prerequisites

- Node.js (v12 or higher recommended)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:

        git clone https://github.com/yourusername/svg-file-browser.git
        cd svg-file-browser

2. Install dependencies:

        npm install
3. Create a `.env` file in the root directory and specify the path to your SVG folder:

        SVG_FOLDER=/path/to/your/svg/folder

## Usage

1. Start the application:
    npm start

2. Open a web browser and navigate to `http://localhost:3000`

3. Browse and search for SVG files in the specified directory

## Configuration

You can change the SVG folder path by editing the `.env` file or by setting the `SVG_FOLDER` environment variable when running the application.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)