// rafce

import Counter from "@/components/Counter";
import Image from "next/image";

const fetchTodos = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );

  const data = await res.json();
  return data;
};

const aboutPage = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // js
  const data = await fetchTodos();
  console.log("data", data);

  return (
    <div>
      <p>This is the about page.</p>

      <Counter />

      <ul>
        {data.map((item: { id: number; title: string }) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>

      <Image
        src="https://fastly.picsum.photos/id/791/200/300.jpg?grayscale&hmac=BeWMtmO0FemRpbDovWA5h-t58FbjhFvJjotU2VC9Bl0"
        alt="ภูเขา"
        width={200}
        height={300}
      />
    </div>
  );
};

export default aboutPage;