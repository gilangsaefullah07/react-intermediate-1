import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconBrands from "../atom/iconbrands";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const CopyRight = () => {
  return (
    <div class="flex flex-col gap-4 md:flex-row md:justify-between">
      <p class="text-gray-400 w-full">
        @2023 Gerobak Sayur All Rights Reserved.
      </p>
      <div class="flex flex-row gap-2">
        <IconBrands>
          <FontAwesomeIcon
            icon={faLinkedin}
            className="flex h-[24px] w-[24px] justify-center items-center"
          />
        </IconBrands>
        <IconBrands>
          <FontAwesomeIcon
            icon={faFacebook}
            className="flex h-[24px] w-[24px] justify-center items-center"
          />
        </IconBrands>
        <IconBrands>
          <FontAwesomeIcon
            icon={faInstagram}
            className="flex h-[24px] w-[24px] justify-center items-center"
          />
        </IconBrands>
        <IconBrands>
          <FontAwesomeIcon
            icon={faTwitter}
            className="flex h-[24px] w-[24px] justify-center items-center"
          />
        </IconBrands>
      </div>
    </div>
  );
};

export default CopyRight;
