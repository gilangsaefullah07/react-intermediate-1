import Header from "../components/organism/header";
import Hero from "../components/organism/hero";
import TabBar from "../components/organism/tabbar";
import ListCard from "../components/organism/listcard";
import Banner from "../components/organism/banner";
import Footer from "../components/organism/footer";

const Homepage = () => {
  return (
    <div className="bg-orange-50">
      <Header></Header>
      <main className="my-8">
        <div className="flex flex-col gap-4 p-4">
          <Hero
            title="Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"
            subtitle="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."
          ></Hero>
          <div className="w-full flex flex-col gap-2">
            <p className="w-full text-2xl font-bold">
              Koleksi Video Pembelajaran Unggulan
            </p>
            <p class="w-full text-sm">
              Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </p>
          </div>
          <TabBar></TabBar>
          <ListCard></ListCard>
          <ListCard></ListCard>
          <ListCard></ListCard>
          <Banner></Banner>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Homepage;
