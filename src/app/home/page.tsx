import Title from "@/components/title";
import InputSection from "@/components/inputSection";

export default async function Home() {
  return (
    <div className="absolute top-0 w-full bg-cover bg-center bg-[url('/inputPageBG/bg1.png')]">
      <div className="">
        <section className="bg-white rounded-3xl md:p-20 sm:p-12 p-6 md:my-12 my-6 bg-opacity-90 min-w-[360px] md:max-w-screen-md mx-auto lg:max-w-screen-lg w-[80%]">
          <Title title="Resume Generator" />
          <InputSection />
        </section>
      </div>
    </div>
  );
}
