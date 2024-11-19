import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { TbBrandLinktree } from "react-icons/tb";
import ProfileLink from "../profileLink/profileLink";
import { BsInstagram } from "react-icons/bs";
import { SiMalt } from "react-icons/si";

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
        href="https://www.malt.fr/profile/priscilliaammeux1"
        ariaLabel="Link to malt profile"
        Icon={SiMalt}
        size={50}
      />
      <ProfileLink
        href="https://www.facebook.com/priscillia.selva/"
        ariaLabel="Link to Facebook profile"
        Icon={FaFacebook}
        size={20}
      />
      <ProfileLink
        href="https://www.instagram.com/priscillia_ammeux_web"
        ariaLabel="Link to Facebook profile"
        Icon={BsInstagram}
        size={20}
      />

      <ProfileLink
        href="https://www.threads.net/@priscillia_ammeux_web"
        ariaLabel="Link to Threads profile"
        Icon={FaThreads}
        size={20}
      />
      <ProfileLink
        href="https://github.com/PriscilliaAmmeux"
        ariaLabel="Link to GitHub profile"
        Icon={FaGithub}
        size={20}
      />
    </section>
  );
}
