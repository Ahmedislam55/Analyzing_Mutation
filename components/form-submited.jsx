"use client";
import { FaSpinner } from "react-icons/fa";
import classes from "./page.module.css";
import { useFormStatus } from "react-dom";
function FormSubmit() {
  const status = useFormStatus();
  if (status.pending) {
    return (
      <div className={classes["form-actions"]}>
        <div className={classes.loadingContainer}>
          <FaSpinner className={classes.spinner} />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <p className={classes["form-actions"]}>
          <button type="reset"> Reset </button>
          <button> Create Post </button>
        </p>
      </>
    );
  }
}
export default FormSubmit;
