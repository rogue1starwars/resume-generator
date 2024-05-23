import Title from "@/components/title";
import Image from "next/image";
import InputSection from "@/components/inputSection";

export default async function Home() {
  return (
    <>
      <Title title="Resume Generator" />
      <InputSection />
    </>
  );
}
