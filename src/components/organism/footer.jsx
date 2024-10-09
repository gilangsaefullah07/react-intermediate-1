import LinkFooter from "../atom/linkfooter";
import BodyFooter from "../molecul/bodyfooter";
import ProfileFooter from "../molecul/profilefooter";
import CopyRight from "../molecul/copyright";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col gap-4 p-4 bg-white border-b-2 border-gray-200">
        <div className="flex flex-col md:flex-row justify-between w-full gap-4">
          <ProfileFooter></ProfileFooter>
          <BodyFooter title="Kategori">
            <LinkFooter>Digital & Teknologi</LinkFooter>
            <LinkFooter>Pemasaran</LinkFooter>
            <LinkFooter>Manajemen Bisnis</LinkFooter>
            <LinkFooter>Pengembangan Diri</LinkFooter>
            <LinkFooter>Desain</LinkFooter>
          </BodyFooter>
          <BodyFooter title="Perusahaan">
            <LinkFooter>Tentang Kami</LinkFooter>
            <LinkFooter>FAQ</LinkFooter>
            <LinkFooter>Kebijakan Privasi</LinkFooter>
            <LinkFooter>Ketentuan Layanan</LinkFooter>
            <LinkFooter>Bantuan</LinkFooter>
          </BodyFooter>
          <BodyFooter title="Komunitas">
            <LinkFooter>Tips Sukses</LinkFooter>
            <LinkFooter>BLog</LinkFooter>
          </BodyFooter>
        </div>
        <div class="h-0.5 bg-gray-300 w-full"></div>
        <CopyRight></CopyRight>
      </div>
    </footer>
  );
};

export default Footer;
