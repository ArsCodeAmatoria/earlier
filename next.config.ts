import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

/** This repo’s root (directory containing this file). Pins tracing when a parent folder also has a lockfile. */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const tailwindcssPkg = path.join(projectRoot, "node_modules", "tailwindcss");
const twAnimatePkg = path.join(projectRoot, "node_modules", "tw-animate-css");
const shadcnTailwind = path.join(projectRoot, "node_modules", "shadcn", "dist", "tailwind.css");

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,
  /** Declared so a custom `webpack()` is allowed alongside production’s default Turbopack bundler (Next 16). */
  turbopack: {},
  /** When a parent folder has its own lockfile, webpack can use `~/` as `context`; pin resolution to this app. */
  webpack: (config) => {
    config.context = projectRoot;
    config.resolve ??= {};
    const nm = path.join(projectRoot, "node_modules");
    const modules = config.resolve.modules;
    config.resolve.modules = [nm, ...(Array.isArray(modules) ? modules : ["node_modules"])];

    const alias = config.resolve.alias;
    const extra = {
      tailwindcss: tailwindcssPkg,
      "tw-animate-css": twAnimatePkg,
      "shadcn/tailwind.css": shadcnTailwind,
    } as const;
    if (alias && typeof alias === "object" && !Array.isArray(alias)) {
      Object.assign(alias as Record<string, string>, extra);
    } else {
      config.resolve.alias = { ...extra };
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
