
# Random Quote Generator

## Overview
This is a simple web application that displays a random quote each time the user clicks a button or refreshes the page. It fetches quotes from the [Quotable API](https://api.quotable.io/random) and includes a clean, responsive design with a touch of animation for a polished user experience.

## Features
- Displays a random quote and its author.
- "New Quote" button to fetch a fresh quote.
- Smooth fade-in animation for new quotes.
- Responsive design for mobile and desktop.
- Fallback quote in case of API failure.
- (Optional) Copy quote to clipboard or share on X.

## Technologies Used
- **HTML5**: Structure of the web page.
- **CSS3**: Styling and animations (Flexbox, transitions).
- **JavaScript (ES6)**: Fetch API for quote retrieval, DOM manipulation.
- **Quotable API**: Source of random quotes.

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/random-quote-generator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd random-quote-generator
   ```
3. Open `index.html` in a browser to run the app locally, or serve it using a local server (e.g., `npx live-server`).

## Usage
- Open the app in a browser.
- Click the "New Quote" button to generate a new quote.
- Enjoy the quote or copy/share it (if implemented).

## File Structure
```
random-quote-generator/
├── index.html       # Main HTML file
├── styles.css       # CSS for styling and animations
├── script.js        # JavaScript for fetching and displaying quotes
├── README.md        # Project documentation
```

## Future Enhancements
- Add a "Copy to Clipboard" button.
- Integrate sharing quotes directly to X.
- Allow users to filter quotes by category (e.g., motivation, humor).
- Store favorite quotes in localStorage.

## Deployment
The app can be deployed to [GitHub Pages](https://pages.github.com/) or any static hosting service:
1. Push the project to a GitHub repository.
2. Enable GitHub Pages in the repository settings.

## Credits
- Quotes provided by [Quotable API](https://api.quotable.io).
- Built with ❤️ by [Your Name].

## License
This project is licensed under the MIT License.
