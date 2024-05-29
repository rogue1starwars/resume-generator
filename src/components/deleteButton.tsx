import { InputChunkType } from "@/lib/types";

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
      className="text-2xl"
    >
      delete
    </button>
  );
}
