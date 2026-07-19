import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LangProvider } from "../lib/i18n";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <span className="label-jp">404 · Not Found</span>
      <h1 className="mt-4 font-serif text-5xl">見つかりませんでした</h1>
      <p className="mt-3 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-8 border-b border-foreground pb-1 text-sm">Return home →</Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <span className="label-jp">Something went wrong</span>
      <h1 className="mt-4 font-serif text-4xl">This page didn't load</h1>
      <button
        onClick={() => { router.invalidate(); reset(); }}
        className="mt-8 border-b border-foreground pb-1 text-sm"
      >
        Try again
      </button>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "結 Yui — 日本のフリーランス開発ギルド | Bilingual Web Development Guild" },
      { name: "description", content: "東京・大阪・福岡・北海道から集まった8名の精鋭フリーランスによる、Web開発・デザイン一気通貫のギルド型スタジオ。A remote-first guild of eight independent engineers and designers building web products end-to-end in Japan." },
      { name: "author", content: "Yui Guild Studio" },
      { property: "og:title", content: "結 Yui — Bilingual Web Development Guild" },
      { property: "og:description", content: "8-person remote guild in Japan. Fullstack, infra, and design under one roof." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;600&family=Noto+Sans+JP:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LangProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </LangProvider>
    </QueryClientProvider>
  );
}
