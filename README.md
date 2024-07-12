# Brooklyn Stoop Sale

Brooklyn Stoop Sale is a web application designed to promote and manage a community stoop sale event in Brooklyn. It provides users with an interactive platform to discover sales, view event details, and participate in the local community event.

## Features

- **Interactive Map**: Explore sale locations plotted on an interactive map.
- **Event Details**: Get information about date, time, and participating sellers.
- **Shareability**: Easily share event details via social media platforms.
- **Responsive Design**: Access the application seamlessly across devices.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- [Map API] (Link to map API documentation)

## Installation

To run this application locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/aishwaryamensinkai/Brooklyn-Stoop.git
    ```

2. Navigate to the project directory:

   ```bash
   cd Brooklyn-Stoop
   ```

3. Install the packages using the command:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

## Project Structure

The project structure is organized as follows:

```bash
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── App.js
│   ├── component
│   │   ├── featured
│   │   │   ├── Carousel.js
│   │   │   ├── CountDown.js
│   │   │   └── index.js
│   │   ├── footer.js
│   │   ├── header
│   │   │   ├── Header.js
│   │   │   └── SideDrawer.js
│   │   ├── highlights
│   │   │   ├── Description.js
│   │   │   ├── Discount.js
│   │   │   └── index.js
│   │   ├── location
│   │   │   └── index.js
│   │   ├── pricing
│   │   │   └── index.js
│   │   ├── utils
│   │   │   └── Button.js
│   │   └── venueInfo
│   │       └── index.js
│   ├── index.js
│   └── resources
│       ├── images
│       │   ├── icons
│       │   │   ├── calendar.png
│       │   │   ├── location.png
│       │   │   ├── menu.png
│       │   │   └── ticket.png
│       │   ├── slide_five.jpg
│       │   ├── slide_four.jpg
│       │   ├── slide_one.jpg
│       │   ├── slide_six.jpg
│       │   ├── slide_three.jpg
│       │   └── slide_two.jpg
│       └── styles.css
└── yarn.lock
```

## Resources

- To include the tree structure of the project install tree by using command in mac
  ```bash
  brew install tree
  tree -L 5 -I node_modules
  ```

## Contributing

Contributions are welcome! If you'd like to add new features, improve existing ones, or fix any bugs, feel free to fork the repository and submit a pull request.
Here's how you can contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/improvement`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/improvement`).
6. Create a new Pull Request.

Please follow our Code of Conduct and Contributing Guidelines when contributing.

## License

This project is licensed under the MIT License.
