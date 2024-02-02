import { faFacebookF, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaLink = () => {
  return (
    <>
      <a className="mx-3" href="http://www.facebook.com/" target="_blank">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a className="mx-3" href="http://www.youtube.com/" target="_blank">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a className="mx-3" href="http://www.twitter.com/" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </>
  );
};

export default SocialMediaLink;
