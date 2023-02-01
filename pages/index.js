import dynamic from "next/dynamic";
import useStore from "../lib/hooks/useStore";

const Board = dynamic(() => import("../components/Board"), { ssr: false });

export default function Home() {
  return <Board />;
}
