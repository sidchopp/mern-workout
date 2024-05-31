const Dialog = ({ handleClick }) => {
  return (
    <button
      onClick={() =>
        window.confirm(
          "Are you sure? This action will permanently delete this workout."
        ) && handleClick()
      }
    >
      x
    </button>
  );
};

export { Dialog };
