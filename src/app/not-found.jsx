import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry, the page you are looking for is not found</p>
      <Link href="/">Go back home</Link>
    </div>
  );
};
export default NotFound;
