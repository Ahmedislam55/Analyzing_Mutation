import { FaSpinner } from "react-icons/fa";
import classes from "./loading.module.css";
function Feedloading() {
  return (
    <div className={classes.loadingContainer}>
      <FaSpinner className={classes.spinner} />
    </div>
  )
}
export default Feedloading