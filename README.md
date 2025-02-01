# KeepEyesOnSudan

KeepEyesOnSudan is a React-based web application designed to raise awereness about ongoing crisis in Sudan. It provides the latest news, social media posts, and statistics to keep the world informed about the situation. The application is built using React, TypeScript, and Node.js.

## Features

- **Latest News**: Fetches and displays the latest news about Sudan using the NewsAPI.
- **Social Media Posts**: Integrates Reddit API to show real-time social media updates.
- **Statistics**: Visualizes data about the Sudan war using charts from `data.unhcr.org`.
- **Responsive Design**: Fully responsive layout with a mobile-friendly design.

## Tech Stack
- **Frontend**: React, Vite
- **Styling**: Pure CSS
- **APIs**: NewsAPI, Reddit API
- **Backend**: Node.js, Express.js (for Reddit API)

## How to Run Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/mojmo/KeepEyesOnSudan.git
    ```
2. Navigate to the project folder:
    ```bash
    cd KeepEyesOnSudan
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root directory and add your NewsAPI and Reddit API keys:
    ```bash
    VITE_NEWS_API_KEY=your_news_api_key
    VITE_REDDIT_CLIENT_ID=your_reddit_client_id
    VITE_REDDIT_CLIENT_SECRET=your_reddit_client_secret
    VITE_REDDIT_USERNAME=your_reddit_username
    VITE_REDDIT_PASS=your_reddit_password
    ```
5. Start the development server:
    ```bash
    npm run dev
    ```
6. Start the backend server:
    ```bash
    npm server.js
    ```
7. Open your browser and navigate to `http://localhost:5173` to view the application.

## Contributing
Contributions are welcome! If you’d like to contribute, please fork the repository and create a pull request.

## License
This project is licensed under the MIT License.