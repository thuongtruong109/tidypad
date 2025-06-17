"use client";

import { FeatureListSection } from "@/components/features";
import { Footer } from "@/components/footer";
import Logo from "@/components/logo";
import * as FadeIn from "@/motion/fade";
import { GitBranch, Sparkles, UserRound } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Home() {
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

      <h1 className="max-w-3xl font-serif text-4xl tracking-tight md:text-5xl">
        A clean space to write your thoughts.
      </h1>
      <p className="max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
        Minimal app for writing notes, thoughts, and ideas — no distractions,
        just writing.
      </p>

      <FadeIn.Item className="flex justify-center gap-3">
        <Button className="px-6" asChild>
          <Link href="/all">
            <Sparkles width={16} />
            <span>Start writing</span>
          </Link>
        </Button>
        <Button variant="outline" className="px-6" asChild>
          <Link
            href="https://github.com/tanlucvn/miniwrit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitBranch width={16} />
            <span>GitHub</span>
          </Link>
        </Button>
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
