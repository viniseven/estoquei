interface IHeader {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: IHeader) {
  return (
    <div className="p-8 flex flex-col gap-2">
      <h1 className="text-gray-sixth">{title}</h1>
      <p className="text-gray-fifth">{subtitle}</p>
    </div>
  );
}
