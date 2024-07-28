import { useLoaderData, useParams } from "react-router-dom";

function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          adipisci minus quam voluptatibus eligendi earum repellendus quos
          magnam deleniti esse, obcaecati sequi cum sapiente. Aperiam nesciunt
          ad repellat vel voluptatibus.
        </p>
      </div>
    </div>
  );
}
export default CareerDetails;

// loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error("Could not find that career");
  }

  return res.json();
};
