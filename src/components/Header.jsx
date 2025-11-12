import styles from "./styles/Header.module.css";

export function Header() {
  return (
    <header className={styles.topBar}>
      <h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.34em"
          height="1em"
          viewBox="0 0 32 24"
        >
          <path
            fill="currentColor"
            d="m10 19.674l-.874.874a.55.55 0 0 1-.4.175a.55.55 0 0 1-.4-.175L.18 12.402a.546.546 0 0 1 0-.8l8.139-8.149a.55.55 0 0 1 .4-.175a.55.55 0 0 1 .4.175l.874.874a.546.546 0 0 1 0 .8l-6.87 6.87l6.87 6.87c.107.1.174.242.174.4v.011a.55.55 0 0 1-.168.397zM20.329 1.023l-6.52 22.566a.57.57 0 0 1-.268.339l-.003.001a.48.48 0 0 1-.413.043l.003.001l-1.084-.297a.57.57 0 0 1-.339-.268l-.001-.003a.52.52 0 0 1-.043-.432l-.001.004L18.18.411a.57.57 0 0 1 .268-.339l.003-.001a.48.48 0 0 1 .413-.043l-.003-.001l1.084.297c.147.043.267.14.339.268l.001.003a.52.52 0 0 1 .043.432zm11.484 11.379l-8.146 8.145a.547.547 0 0 1-.804 0l-.874-.874a.547.547 0 0 1 0-.804l6.87-6.87l-6.87-6.87a.547.547 0 0 1 0-.804l.874-.874a.547.547 0 0 1 .804 0l8.146 8.146a.547.547 0 0 1 0 .804z"
          />
        </svg>
        Analisís sintactico de cadenas
      </h2>
      <nav>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://colab.research.google.com/drive/1icjXddQ58nNAszJGrvRppOq5VSqiYZxc?usp=sharing"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7.71 3.5L1.15 15l3.43 6l6.55-11.5M9.73 15L6.3 21h13.12l3.43-6m-.57-1L15.42 2H8.57l6.86 12z"
            />
          </svg>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/JARABRAMA/AnalisisSintactico"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
            />
          </svg>
        </a>
      </nav>
    </header>
  );
}
