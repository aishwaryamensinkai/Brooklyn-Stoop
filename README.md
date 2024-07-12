# Brooklyn Stoop Sale

Brooklyn Stoop Sale is a web application designed to promote and manage a community stoop sale event in Brooklyn. It provides users with an interactive platform to discover sales, view event details, and participate in the local community event.

Link for the hackathon
https://codedex.notion.site/Track-2-Brooklyn-Stoop-Sale-01895caec65548f4bdf21d6dd7144ef2

![Image](./Screenshot.png)

## Features

- **Interactive Map**: Explore sale locations plotted on an interactive map.
- **Event Details**: Get information about date, time, and participating sellers.
- **Shareability**: Easily share event details via social media platforms.
- **Responsive Design**: Access the application seamlessly across devices.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Map
  
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
├── LICENSE
├── README.md
├── build
│   ├── asset-manifest.json
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── service-worker.js
│   └── static
│       ├── css
│       │   ├── main.b92b8615.css
│       │   └── main.b92b8615.css.map
│       ├── js
│       │   ├── main.2065dc1f.js
│       │   └── main.2065dc1f.js.map
│       └── media
│           ├── slide_five.4e54a2c5.jpg
│           ├── slide_four.601453b9.jpg
│           ├── slide_one.1fe9f82f.jpg
│           ├── slide_six.3f407461.jpg
│           ├── slide_three.9c2731f9.jpg
│           └── slide_two.51a251aa.jpg
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── App.js
│   ├── component
│   │   ├── Discount
│   │   │   └── index.js
│   │   ├── Items
│   │   │   └── index.js
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
