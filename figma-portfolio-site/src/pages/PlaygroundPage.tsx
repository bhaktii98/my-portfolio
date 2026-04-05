import { Link } from "react-router-dom";

export function PlaygroundPage() {
  return (
    <article className="simple-page">
      <h1>Playground</h1>
      <p>
        Experiments and side projects live here on the Framer build.{" "}
        <a
          href="https://bhaktidangri.framer.website/playground"
          target="_blank"
          rel="noreferrer"
        >
          View the playground on Framer
        </a>{" "}
        or head <Link to="/">back home</Link>.
      </p>
    </article>
  );
}
