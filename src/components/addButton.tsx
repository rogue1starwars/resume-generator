import { InputChunkType } from "@/lib/types";

type Props = {
  inputState: InputChunkType;
  setInputState: React.Dispatch<React.SetStateAction<InputChunkType>>;
  id: string;
};

export default function AddButton({
  inputState,
  setInputState,
  id,
}: Props) {
  return (
    <button
      type="button"
      onClick={() => {
        const newInputState: InputChunkType = {
          ...inputState,
        };
        const lastDataItem = {
          ...newInputState[id].data[newInputState[id].data.length - 1],
        };
        Object.keys(lastDataItem).map((key) => {
          if ((lastDataItem as { [index: string]: any })[key] !== undefined) {
            (lastDataItem as { [index: string]: any })[key] = "";
          }
        });
        newInputState[id].data.push(lastDataItem);
        setInputState(newInputState);
      }}
      className="text-sm font-semibold text-white bg-red-400 hover:bg-red-500 py-2 px-3 rounded-full "
    >
      Add+
    </button>
  );
}
