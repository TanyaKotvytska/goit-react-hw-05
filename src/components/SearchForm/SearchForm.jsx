import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "./SearchForm.module.css";

export default function SearhForm({ onSubmit }) {
  const notify = () =>
    toast.warn("Please, input value for search", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const value = form.elements.searchingFilms.value.trim();

    if (value === "") {
      notify();
      console.log("Please, input value for search");
      return;
    }

    onSubmit(value);
    form.reset();
  }
  return (
    <form onSubmit={handleSubmit} className={css.formContainer}>
      <input
        className={css.inputsearch}
        type="text"
        name="searchingFilms"
        autoComplete="off"
        placeholder="Movies title"
      />
      <button type="submit" className={css.btnsearch}>Search</button>
      <ToastContainer />
    </form>
  );
}