import { getPost } from "@/lib/data";
import Degree from "./_components/Degree/Degree";

export default async function Home() {
  
  const posts = await getPost();
  console.log(posts)

  return (
    <main>
      <Degree />
    </main>
  );
}
