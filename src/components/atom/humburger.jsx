import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Humburger = () => {
  return (
    <div className="p-2 md:hidden">
      <FontAwesomeIcon
        icon={faBars}
        className="flex w-[24px] h-[24px] justify-center items-center"
      />
    </div>
  );
};

export default Humburger;
