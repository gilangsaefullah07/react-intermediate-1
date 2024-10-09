import Button from "../atom/button";

const Hero = (props) => {
  const { title, subtitle } = props;
  return (
    <div
      className="w-full flex flex-col gap-4 p-10 rounded-md"
      style={{
        backgroundImage: "url(../Background_banner.png)",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full justify-center items-center flex flex-col gap-2">
        <p className="w-full text-center item text-white font-bold text-2xl">
          {title}
        </p>
        <p className="w-full text-white text-sm text-center">{subtitle}</p>
      </div>
      <Button>Temukan Video Course untuk Dipelajari!</Button>
    </div>
  );
};

export default Hero;
