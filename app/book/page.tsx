import Form from "@/components/Form";
import { prisma } from "@/lib/prisma";

const bookPage = async () => {
  const books = await prisma.book.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <>
      <Form />

      <h1>รายการหนังสือ</h1>

      {books.length === 0 ? (
        <p>ไม่มีหนังสือ</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <p className="font-semibold">ชื่อหนังสือ: {book.title}</p>
              <p>ราคา: {book.price.toLocaleString("th-TH")} บาท</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default bookPage;