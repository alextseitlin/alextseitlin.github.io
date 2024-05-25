import Container from "@/app/_components/container";
import cn from "classnames";

type Props = {
  published?: boolean;
  style?: "light" | "dark";
  children?: React.ReactNode;
};

export default function Alert({ published, children, style }: Props) {
  return (
    <div
      className={cn("border-b border-neutral-200 py-2 text-center text-sm", {
        "bg-neutral-800 border-neutral-800 text-white": style === "dark", // Apply dark style
        "bg-neutral-50 border-neutral-200": style === "light", // Apply light style
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">{children}</div>
      </Container>
    </div>
  );
}

Alert;
