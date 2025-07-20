import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { TbBrandLinktree } from "react-icons/tb";
import ProfileLink from "../profileLink/profileLink";
import { BsInstagram } from "react-icons/bs";

export default function SocialNetwork() {
  return (
    <section className="flex justify-between space-x-2">
      <ProfileLink
        href="https://linktr.ee/priscillia_ammeux"
        ariaLabel="Link to all social media profiles"
        Icon={TbBrandLinktree}
        size={20}
      />
      <ProfileLink
        href="https://www.linkedin.com/in/priscillia-ammeux/"
        ariaLabel="Link to LinkedIn profile"
        Icon={FaLinkedin}
        size={20}
      />

      <ProfileLink
        href="https://www.facebook.com/priscillia.selva/"
        ariaLabel="Link to Facebook profile"
        Icon={FaFacebook}
        size={20}
      />
      <ProfileLink
        href="https://www.instagram.com/priscillia_ammeux_web"
        ariaLabel="Link to Instagram profile"
        Icon={BsInstagram}
        size={20}
      />
    </section>
  );
}
