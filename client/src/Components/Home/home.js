import Head from "../Home/Head/head";
import Body from "../Home/Body/body";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="Home">
      <Link style={{ textDecoration: "none" }} to="/">
        <Head />
        <Body />
      </Link>
    </div>
  );
}
export default Home;
