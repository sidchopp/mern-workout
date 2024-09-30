function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="2 8 16 24"
      width="16"
      height="24"
    >
      <path
        d="M 10 32 L 10 24 L 18 24 L 2 8 L 18 8 L 18 16 L 2 16 L 2 24 L 10 32 L 10 24 L 2 24"
        fill="var(--accent)"
      ></path>
    </svg>
  );
}

const NewFooter = ({ title = "", url = "" }) => {
  return (
    <footer>
      <a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer">
        <Logo />
      </a>
      <a
        href="https://www.framer.com/motion/animate-function"
        target="_blank"
        rel="noreferrer"
      >
        <code> Animation sequencing</code>
      </a>
    </footer>
  );
};

export { NewFooter };
