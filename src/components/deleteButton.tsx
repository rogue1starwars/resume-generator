import { InputChunkType } from "@/lib/types";
import Image from "next/image";

type Props = {
  inputState: InputChunkType;
  setInputState: React.Dispatch<React.SetStateAction<InputChunkType>>;
  id: string;
  index: number;
};

export function DeleteButton({ inputState, setInputState, id, index }: Props) {
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
      className="sm:block hidden text-xs col-span-1 justify-self-end col-start-10 m-2 px-auto mt-0"
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

export function DeleteButtonSm({
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
      className="sm:hidden block text-xs justify-self-end col-span-2 col-start-9 m-2 px-auto"
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
