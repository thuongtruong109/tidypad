import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "app/lib/sw.ts",
  swDest: "public/sw.js",
});

export default withSerwist({
  // Your Next.js config
});
