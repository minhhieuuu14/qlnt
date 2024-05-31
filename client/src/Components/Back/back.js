import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../Back/back.css";
function Back() {
  return (
    <div className="Back">
      <Link className="back" to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
    </div>
  );
}

export default Back;
