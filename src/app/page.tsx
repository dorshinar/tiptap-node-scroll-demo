import { Exp } from "./exp";
import { Tiptap } from "./tiptap";

export default function Home() {
  return (
    <div className="flex gap-16 h-screen">
      <Tiptap />
      <Exp />
    </div>
  );
}
