import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CK Lifestyle" },
    { name: "description", content: "CK Lifestyle" },
  ];
}

export default function Home() {
  return <Welcome />;
}
