import Image from "next/image";

export default function Background() {
  const ellipses = [
    "Ellipse 1.svg",
    "Ellipse 2.svg",
    "Ellipse 3.svg",
    "Ellipse 4.svg",
    "Ellipse 5.svg",
    "Ellipse 6.svg",
  ];
  return (
    <div className="flex flex-col w-full h-full">
      {ellipses.map((ellipse, index) => (
        <Image
          key={ellipse}
          src={`/inputPageBG/${ellipse}`}
          alt="Ellipse"
          width="500"
          height="500"
          objectFit="cover"
          className={index % 2 === 0 ? "self-start" : "self-end"}
        />
      ))}
    </div>
  );
}
