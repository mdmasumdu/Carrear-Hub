import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-5xl font-bold text-center mt-20">
            <h1>Opss</h1>
            <Link to={'/'}>Go home</Link>
        </div>
    );
};

export default ErrorPage;