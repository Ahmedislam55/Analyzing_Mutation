"use client";
import { useFormState } from "react-dom";
import classes from "./page.module.css";
import FormSubmit from "@/components/form-submited";
function PostForm({ action }) {
  const [state, formAction] = useFormState(action, {});
  return (
    <div className={classes.form}>
      <h1> Create a new post </h1>
      <form action={formAction}>
        <p className={classes["form-control"]}>
          <label htmlFor="title"> Title </label>
          <input type="text" id="title" name="title" required />
        </p>
        <p className={classes["form-control"]}>
          <label htmlFor="content"> Content </label>
          <textarea name="content" id="content" rows="5" required></textarea>
        </p>
        <p className={classes["form-control"]}>
          <label htmlFor="image"> Image </label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
            required
          />
        </p>
        <FormSubmit />
        {state.errors && (
          <ul className="form-errors">
            {state.errors.map((error) => (
              <li key={error}> {error} </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}
export default PostForm;
