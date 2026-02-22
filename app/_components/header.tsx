import { Button } from "./ui/button";
import { Plus } from "lucide-react";

interface IHeader {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: IHeader) {
  return (
    <div className="flex w-full justify-between p-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-slate-500">{title}</h1>
        <p className="text-gray-500">{subtitle}</p>
      </div>
      <Button className="bg-neon text-gray-500">
        <Plus />
        Novo produto
      </Button>
    </div>
  );
}
