const Dialog = ({ handleClick, title }) => {
  return (
    <button
      onClick={() =>
        window.confirm(
          `Are you sure? This action will permanently delete ${title} - workout.`
        ) && handleClick()
      }
    >
      x
    </button>
  );
};

export { Dialog };
