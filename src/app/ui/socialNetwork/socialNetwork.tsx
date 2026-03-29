import { FaLinkedin } from "react-icons/fa";
import ProfileLink from "../profileLink/profileLink";
import { BsInstagram } from "react-icons/bs";

export default function SocialNetwork() {
  return (
    <section className="flex justify-between space-x-2">
      <ProfileLink
        href="https://www.linkedin.com/in/priscillia-ammeux/"
        ariaLabel="Link to LinkedIn profile"
        Icon={FaLinkedin}
        size={20}
      />
      <ProfileLink
        href="https://www.instagram.com/pixeliaandco/"
        ariaLabel="Link to Instagram profile"
        Icon={BsInstagram}
        size={20}
      />
    
    </section>
  );
}
