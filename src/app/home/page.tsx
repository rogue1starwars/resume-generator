import Title from "@/components/title";
import Image from "next/image";
import Input_section from "@/components/input_section";

export default async function Home() {
  return (
    <>
      <Title title="Resume Generator" />
      <Input_section />
    </>
  );
}
