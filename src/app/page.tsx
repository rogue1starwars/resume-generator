import Title from "@/components/title";
import { fetchData } from "@/lib/data";
import Image from "next/image";
import Input_section from "@/components/input_section";

export default function Home() {
  const input_data = fetchData();
  return (
    <>
      <Title title="Resume Generator" />
      <Input_section inputData={input_data} />;
    </>
  );
}
