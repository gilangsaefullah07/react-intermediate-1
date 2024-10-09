import IconStars from "../atom/iconstars";

const Card = () => {
  return (
    <div class="w-full flex flex-col gap-3 card bg-white rounded-md p-3">
      <div class="flex row gap-3 md:flex-col">
        <img
          class="rounded-md h-[80px] w-[80px] md:w-full md:h-full"
          src="../Card_1.png"
          alt="Not Found"
        />
        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-2">
            <p class="text-md font-bold">Big 4 Auditor Financial Analyst</p>
            <p class="text-sm text-gray-400 hidden md:line-clamp-2">
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik
            </p>
          </div>
          <div class="w-full flex gap-3 overflow-ellipsis">
            <img
              class="h-[36px] w-[36px]"
              src="../Avatar.png"
              alt="Avatar Image"
            />
            <div>
              <p class="w-full line-clamp-1 font-bold">Jenna Ortega</p>
              <p class="w-full line-clamp-1 text-sm text-gray-400">
                Senior Accountant di
                <span class="font-bold">Gojek</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between">
        <div class="flex gap-3 items-center">
          <IconStars></IconStars>
          <p class="underline underline-offset-1 text-gray-400">3.5 (86)</p>
        </div>
        <p class="text-2xl text-green-500 font-bold">300K</p>
      </div>
    </div>
  );
};

export default Card;
