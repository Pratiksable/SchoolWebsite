import { impLinks } from "@/constants/notice";

const ImportantLink = () => {
  return (
    <div className="grid my-4">
      {impLinks.map((link, index) => (
        <div
          className="border-t border-b border-white w-full p-4 animation-on-scroll"
          key={index}
        >
          <a
            target="_blank"
            referrerPolicy="no-referrer"
            className="block duration-500 relative hover:translate-x-4"
            href={link.path}
          >
            {link.text}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImportantLink;
