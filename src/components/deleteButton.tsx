import { InputChunkType } from "@/lib/types";
import Image from "next/image";

type Props = {
  inputState: InputChunkType;
  setInputState: React.Dispatch<React.SetStateAction<InputChunkType>>;
  id: string;
  index: number;
};

export default function DeleteButton({
  inputState,
  setInputState,
  id,
  index,
}: Props) {
  return (
    <button
      type="button"
      onClick={() => {
        const newInputState: InputChunkType = {
          ...inputState,
        };
        newInputState[id].data.splice(index, 1);
        setInputState(newInputState);
      }}
      className="text-xs sm:col-span-1 justify-self-end col-span-2 col-end-11 m-2 px-auto sm:mt-0 mt-[-220px]"
    >
      <Image
        src="assets/trash.svg"
        alt="transh icon"
        width="20"
        height="20"
        className="mx-auto"
      />
    </button>
  );
}
