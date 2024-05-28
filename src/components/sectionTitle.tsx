import { Sections } from "@/lib/types";

type Props = {
  sec: {
    title: string;
    description: string;
  };
};

export default function ({ sec }: Props) {
  return (
    <div className="my-4">
      <h2 className="font-semibold text-xl">{sec.title}</h2>
      <p className="text-gray-600">{sec.description}</p>
    </div>
  );
}
