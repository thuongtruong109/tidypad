"use client";

import type * as React from "react";

import { Alert, AlertDescription, AlertTitle } from "@/ui/alert";
import { CircleIcon, Lightbulb } from "lucide-react";

const features: FeatureItemData[] = [
  {
    id: 1,
    title: "Minimal & sleek",
    desc: "Clean, elegant, and distraction-free design.",
  },
  {
    id: 2,
    title: "Blazing fast",
    desc: "Optimized for speed and performance.",
  },
  {
    id: 3,
    title: "Developer-friendly",
    desc: "Pre-configured with ESLint, Prettier, and Husky.",
  },
  {
    id: 4,
    title: "Fully customizable",
    desc: "Tailwind CSS for rapid styling.",
  },
  {
    id: 5,
    title: "Dark mode support",
    desc: "Seamless light/dark mode switching.",
  },
  {
    id: 6,
    title: "Commit best practices",
    desc: "Built-in commit linting and formatting.",
  },
];

export function FeatureListSection(): React.ReactElement {
  return (
    <section className="flex flex-col text-pretty">
      <Alert>
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>
          Elevating your performance workflow with Tidypad. Why not?
        </AlertTitle>

        <ul className="mt-4 flex flex-col gap-1 text-pretty">
          {features.map((feature, i) => (
            <FeatureItem key={i} data={feature} />
          ))}
        </ul>
      </Alert>
    </section>
  );
}

export type FeatureItemData = {
  id: number;
  title: string;
  desc: string;
};

type FeatureItemProps = {
  data: FeatureItemData;
};

export function FeatureItem({ data }: FeatureItemProps): React.ReactElement {
  const { title, desc } = data;

  return (
    <AlertDescription className="group sm:hover:-translate-x-1 flex flex-col text-sm transition-all delay-75 duration-300 sm:flex-row sm:items-center">
      <div className="flex items-center gap-2 text-foreground/60 group-hover:text-foreground">
        <CircleIcon size={8} />
        <span className="font-medium">{title}</span>
      </div>
      <span className="mt-1 ml-4 text-muted-foreground sm:mt-0 sm:ml-2 sm:hidden sm:group-hover:inline">
        {desc}
      </span>
    </AlertDescription>
  );
}
