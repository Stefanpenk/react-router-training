import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora optio
        neque doloremque vel dolorum explicabo rem atque, quam sunt possimus
        aliquam illo placeat sit commodi ea! Accusantium dolore laboriosam aut.
      </p>

      <p>
        Got to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
}
