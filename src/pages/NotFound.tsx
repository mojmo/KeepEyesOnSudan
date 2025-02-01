import { Link } from "react-router-dom";
import "@styles/notFound.css";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to="/" className="not-found__link">Go back to Home</Link>
        </div>
    );
}

export default NotFound;