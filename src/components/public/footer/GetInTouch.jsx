import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading3 from "@components/Heading3";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const GetInTouch = () => {
  const contactInfo = [
    { name: "Principal", email: "principle-puc@example.com", department: "Administration" },
    // { name: "Customer Support", email: "help@example.com", department: "Customer Service" },
  ];

  const address = ` 5HF5+FMP, Unnamed Road, Rajanukunte, Karnataka 560064`;

  const phoneNumbers = [
    { name: "Mr Karthik Ankar", number: "+919342736575", department: "Govt PU college" },
    { name: "Mr. Kantaraju B G", number: `+919845917244`, department: "Govt High School" },
    { name: "Mr Shreenivasa G", number: `+917204602103`, department: "Govt Primary School" },
    { name: "Mr. Rajendra Kumar R C", number: `+919901773645`, department: "BOG" },
  ];

  return (
    <>
      <Heading3 headingText={"Get in touch"} />

      <div className="p-4 text-gray-300 grid gap-6 mx-auto">
        {/* ==== Address === */}
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            className="text-4xl text-primary-regular"
            icon={faLocationDot}
          />
          <p>{address}</p>
        </div>

        {/* ======= Email =====  */}
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            className="text-4xl text-primary-regular"
            icon={faEnvelope}
          />
          <p>
            {contactInfo.map(({ name, email, department }) => (
              <a
                key={email}
                className="block hover:text-primary-regular hover:underline duration-500"
                href={`mailto:${email}`}
                title={`${department}`}
              >
                {name}: {email}
              </a>
            ))}
          </p>
        </div>

        {/* ======== Mobile Numbers======  */}
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            className="text-4xl text-primary-regular"
            icon={faPhone}
          />
          <p>
            {phoneNumbers.map(({ name, number, department }) => (
              <a
                key={number}
                className="block hover:text-primary-regular hover:underline duration-500"
                href={`tel:${number}`}
                title={`Department: ${department}`}
              >
                {name}: {number}
              </a>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
