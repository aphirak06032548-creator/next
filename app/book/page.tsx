import Form from "@/components/Form";
import { prisma } from "@/lib/prisma";
import { deleteBook } from "@/utils/actions";

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
            <li key={book.id} className="my-2 border-b pb-2">
              <p className="font-semibold">ชื่อหนังสือ: {book.title}</p>
              <p>ราคา: {book.price.toLocaleString("th-TH")} บาท</p>

              <form action={deleteBook.bind(null, book.id)} className="mt-1">
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
                >
                  ลบ
                </button>
              </form>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default bookPage;