import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center space-y-6 mt-20">
      <h2 className="text-4xl">Oops! 404 Error</h2>
      <h1 className="text-5xl">Page Not Found!</h1>
      <p>Oops! Looks Like Something Going Rong We can’t seem to find the page you’re looking for make sure that you have typed the currect URL</p>
      <Link className="btn btn-primary" to={"/"}>Home</Link>
    </div>
  );
};

export default ErrorPage;