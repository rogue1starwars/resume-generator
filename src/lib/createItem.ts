"use server";

export default async function createItem(formData: FormData) {
  const name = formData.get("name");
  console.log(name);
}
