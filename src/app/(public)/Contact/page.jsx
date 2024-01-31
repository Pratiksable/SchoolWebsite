import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading2 from "@components/Heading2";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
export const metadata = {
  title: "Contact us - The Government PU college, Rajanakunte",
  description:
    "lorem",
};
const ContactUs = () => {
  const address = "5HF5+FMP, Unnamed Road, Rajanukunte, Bangalore, Karnataka 560064";

  const contactDetails = [
    { category: "Govt PU College", name: "Mr. Karthik Ankar", phoneNumber: "9342736575" },
    { category: "Govt High School", name: "Mr. Kantaraju B G", phoneNumber: "9845917244" },
    { category: "Govt Primary School", name: "Mr. Shreenivasa G", phoneNumber: "7204602103" },
    { category: "BOG", name: "Mr. Rajendra Kumar R C", phoneNumber: "9901773645" },
  ];

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mx-auto max-w-screen-xl">
      <Heading2 headingText={"Reach Us"} />

      {/* ==== Address === */}
      <div className="flex items-center mb-6">
        <FontAwesomeIcon
          className="text-4xl text-primary-regular mr-3"
          icon={faLocationDot}
        />
        <p>{address}</p>
      </div>

      {/* ======== Contact Details ====== */}
      <div className='flex flex-col sm:flex-row gap-3'>
        {contactDetails.map((contact) => (
          <div key={contact.category} className="bg-white p-4 rounded-md mb-4 shadow-md">
            <FontAwesomeIcon
              className="text-2xl text-primary-regular mr-2"
              icon={faPhone}
            />
            <p className="font-semibold mb-1">{contact.category}</p>
            <p>{contact.name} - {contact.phoneNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;