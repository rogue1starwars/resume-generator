"use server";

import { createClient } from "@supabase/supabase-js";
import { InputChunkType } from "./types";

export default async function saveData(
  userID: string,
  inputData: InputChunkType
) {
  // console.log(inputData);

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  //insert if user_id does not exist, update otherwise
  const { data, error } = await supabase
    .from("user_data")
    .upsert({ user_id: userID, data: inputData }, { onConflict: "user_id" })
    .select();
  console.log(data, error);
}
