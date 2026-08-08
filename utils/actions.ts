"use server";

// export const createBook = async (_prevState, formData) => {
export const createBook = async (_prevState: string | null, formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("formData", formData);

  const title = String(formData.get("title") ?? "").trim();
  const price = Number(formData.get("price"));

  if (!title || !Number.isInteger(price) || price <= 0) {
    return "กรุณากรอกข้อมูลให้ถูกต้อง";
  }

  return "Book created successfully";
};