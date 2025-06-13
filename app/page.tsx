"use client";

import { FeatureListSection } from "@/app/_components/features";
import { Footer } from "@/app/_components/footer";
import Logo from "@/app/_components/logo";
import * as FadeIn from "@/components/motion/fade";
import { Sparkles, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleStartWriting = () => {
    router.push("/all");
  };

  return (
    <FadeIn.Container className="mx-auto flex max-w-screen-sm flex-col space-y-6 px-4 py-8 md:px-6 md:py-12 lg:py-24">
      <FadeIn.Item>
        <div className="flex flex-row items-center space-x-3">
          <Logo />
          <div className="flex flex-col space-y-1 font-medium">
            <span className="font-semibold">Tidypad</span>
            <span className="text-muted-foreground text-xs">
              Snap your mind instantly
            </span>
          </div>
        </div>
      </FadeIn.Item>

      <FadeIn.Item>
        <p className="text-sm leading-relaxed">
          <strong className="font-semibold">Tidypad</strong> is a simple and
          elegant note-taking app that helps you capture and organize your
          ideas.
        </p>
      </FadeIn.Item>

      <FadeIn.Item>
        <button
          type="button"
          aria-label="started"
          onClick={handleStartWriting}
          className="flex items-center space-x-1 justify-self-center rounded-sm bg-black px-2 py-1 font-medium text-sm text-white transition-all hover:opacity-80"
        >
          <Sparkles width={16} />
          <span>Start writing</span>
        </button>
      </FadeIn.Item>

      <FadeIn.Item>
        <FeatureListSection />
      </FadeIn.Item>

      <FadeIn.Item>
        <div className="flex flex-col space-y-1">
          <h2 className="flex items-center space-x-1 font-semibold text-lg">
            <UserRound width={18} />
            <span>Contact Us</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Have questions or feedback? Reach out to us at{" "}
            <a
              href="mailto:thuongtruongofficial@gmail.com"
              className="text-blue-500 hover:underline"
            >
              email
            </a>{" "}
            or follow us on{" "}
            <a
              href="https://facebook.com/truong.poetic"
              className="text-blue-500 hover:underline"
            >
              facebook
            </a>
          </p>
        </div>
      </FadeIn.Item>

      <hr className="border-dashed" />

      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
