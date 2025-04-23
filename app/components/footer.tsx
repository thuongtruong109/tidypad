import Link from "@/components/link";
import { ThemeSwitcher } from "@/components/theme";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="px-0.5 text-muted-foreground text-xs">
        Built by {" "}
        <Link
          href="https://facebook.com/truong.poetic"
          text="thuongtruong"
          className="font-semibold underline decoration-wavy underline-offset-2 hover:text-foreground"
        />
      </div>
      <div className="text-muted text-xs">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export { Footer };
