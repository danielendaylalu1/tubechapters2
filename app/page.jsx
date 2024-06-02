import Form from "@/components/Form";
import { getSummery } from "../api/api";

export default function Home() {
  return (
    <main>
      <Form getSummery={getSummery} />
    </main>
  );
}
