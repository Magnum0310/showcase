import { facebook, twitter, instagram } from "../assets/icons/index";

const SocialBar = () => {
  return (
    <section>
      <ul className=" relative flex h-[500px] w-10 flex-col items-center justify-evenly gap-10">
        <li>
          <a href="https://facebook.com">
            <img src={facebook} width={25} className="pr-2" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com">
            <img src={instagram} width={25} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com">
            <img src={twitter} width={25} />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SocialBar;
