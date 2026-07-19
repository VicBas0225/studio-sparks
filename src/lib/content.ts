// Bilingual content source of truth.
// Portrait initials are rendered as CSS avatars — no external images.

export type Bi = { ja: string; en: string };

export type Member = {
  id: string;
  initials: string;
  tone: string; // avatar background
  name: Bi;
  role: Bi;
  location: Bi;
  birth: string;
  skills: string[];
  bio: Bi;
  quote: Bi;
};

export const team: Member[] = [
  {
    id: "leader",
    initials: "K",
    tone: "oklch(0.55 0.18 30 / 0.14)",
    name: { ja: "チームリーダー", en: "Team Lead" },
    role: {
      ja: "リーダー / シニアバックエンド",
      en: "Team Lead / Senior Backend",
    },
    location: { ja: "東京 · 完全リモート", en: "Tokyo · Fully remote" },
    birth: "1993.07.12",
    skills: ["Go", "Python / FastAPI", "AWS", "Docker", "DB Design"],
    bio: {
      ja: "システム開発会社にて基幹バックエンドの構築に5年間従事後、独立。大規模Webサービスのインフラ刷新やAPI設計を多数経験。非エンジニアの意図を平易な言葉に翻訳し、手戻りのない要件定義を得意とする。本チームの発起人。",
      en: "5+ years building core backend systems at an enterprise studio before going independent. Led API design and infra overhauls for large-scale services. Translates non-technical intent into precise, low-rework specifications. Founder of the guild.",
    },
    quote: {
      ja: "「デザインは完璧なのに、決済やログインが複雑で形にできない」。そんな時、裏側は全て私に任せてください。",
      en: "“The design is perfect, but the auth or payment layer stalls it.” When that happens, hand the backend to me.",
    },
  },
  {
    id: "m2",
    initials: "S",
    tone: "oklch(0.65 0.12 200 / 0.14)",
    name: { ja: "佐藤 悠斗", en: "Yuto Sato" },
    role: { ja: "シニアフロントエンド", en: "Senior Frontend" },
    location: { ja: "大阪 · 完全リモート", en: "Osaka · Fully remote" },
    birth: "1994.02.08",
    skills: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
    bio: {
      ja: "受託開発と自社SaaSの双方で5年間フロントエンドを担当。Figmaの意図を1pxのずれもなくコードに再現する精度と、アクセシビリティを担保した実装に定評がある。",
      en: "5 years of frontend across agency and in-house SaaS. Known for 1-pixel-accurate Figma reproduction and accessibility-first React implementations.",
    },
    quote: {
      ja: "デザインの温度を落とさずに、動くプロダクトへ翻訳します。",
      en: "I translate design into product without losing a degree of its warmth.",
    },
  },
  {
    id: "m3",
    initials: "T",
    tone: "oklch(0.7 0.13 130 / 0.14)",
    name: { ja: "田中 涼", en: "Ryo Tanaka" },
    role: { ja: "フルスタック", en: "Full-stack Engineer" },
    location: { ja: "福岡 · 完全リモート", en: "Fukuoka · Fully remote" },
    birth: "1995.11.22",
    skills: ["Node.js", "NestJS", "React", "PostgreSQL", "GraphQL"],
    bio: {
      ja: "スタートアップ2社で0→1のプロダクト立ち上げを経験。API・フロント・DBを一人で貫通させる機動力を持ち、MVPを最短で世に出す。",
      en: "Shipped 0→1 products at two startups. Owns API, frontend, and DB end-to-end to push MVPs live on the tightest possible timelines.",
    },
    quote: {
      ja: "小さく速くリリースし、事実で次を決める。",
      en: "Ship small, ship fast, let evidence decide the next move.",
    },
  },
  {
    id: "m4",
    initials: "K",
    tone: "oklch(0.6 0.15 280 / 0.14)",
    name: { ja: "加藤 遼太", en: "Ryota Kato" },
    role: { ja: "SRE / インフラ", en: "SRE / Infra Engineer" },
    location: { ja: "仙台 · 完全リモート", en: "Sendai · Fully remote" },
    birth: "1990.05.03",
    skills: ["AWS", "Terraform", "Kubernetes", "Datadog", "Cloudflare"],
    bio: {
      ja: "金融系SIerでミッションクリティカルなインフラ運用に7年間従事。IaCによる再現性の高い環境構築と、24時間稼働する監視設計を得意とする。",
      en: "7 years operating mission-critical infra at a fintech integrator. Reproducible IaC environments and 24/7 observability are his standard.",
    },
    quote: {
      ja: "落ちない、遅くない、追跡できる。当たり前を当たり前に。",
      en: "Never down, never slow, always traceable. The basics, done right.",
    },
  },
  {
    id: "m5",
    initials: "N",
    tone: "oklch(0.62 0.13 60 / 0.14)",
    name: { ja: "中村 秀一", en: "Shuichi Nakamura" },
    role: { ja: "バックエンド / DB", en: "Backend / Database" },
    location: { ja: "北海道 · 完全リモート", en: "Hokkaido · Fully remote" },
    birth: "1991.09.30",
    skills: ["Go", "PostgreSQL", "Redis", "Docker", "GitHub Actions"],
    bio: {
      ja: "中堅SIerでECバックエンドと物流基幹のDB/API開発に7年間従事。膨大なデータ処理を超高速かつ整合性を保って実装するスペシャリスト。",
      en: "7 years designing DB and APIs for e-commerce and logistics at a mid-scale SI. Delivers high-throughput data processing with strict consistency.",
    },
    quote: {
      ja: "ユーザーが増えても遅くならない。将来の拡張に耐える設計を。",
      en: "Never slower as users grow — schemas built to age well.",
    },
  },
  {
    id: "m6",
    initials: "S",
    tone: "oklch(0.65 0.15 20 / 0.14)",
    name: { ja: "清水 拓海", en: "Takumi Shimizu" },
    role: { ja: "フルスタック / 決済", en: "Full-stack / Payments" },
    location: { ja: "愛知 · 完全リモート", en: "Aichi · Fully remote" },
    birth: "1996.06.14",
    skills: ["TypeScript", "Next.js", "Firebase", "Stripe", "LINE Login"],
    bio: {
      ja: "自社SaaSでフロント・バックを横断する3年間の経験。Stripe決済やSNS認証（LINE / Google）のスピード実装を得意とする。",
      en: "3 years across frontend and backend for an in-house SaaS. Fast, reliable Stripe checkout and social-auth (LINE / Google) integrations.",
    },
    quote: {
      ja: "『決済とログイン、明日から動かしたい』に即応します。",
      en: "“We need auth and payments live tomorrow.” — that’s my brief.",
    },
  },
  {
    id: "m7",
    initials: "K",
    tone: "oklch(0.7 0.1 340 / 0.14)",
    name: { ja: "小林 美咲", en: "Misaki Kobayashi" },
    role: { ja: "シニア UI/UX デザイナー", en: "Senior UI/UX Designer" },
    location: { ja: "京都 · 完全リモート", en: "Kyoto · Fully remote" },
    birth: "1992.12.05",
    skills: ["UI/UX", "Figma", "Design System", "Wireframing"],
    bio: {
      ja: "大手制作代理店で有名ブランドのWeb・アプリUIに6年間従事。認知心理に基づく直感的な画面設計と、実装しやすいFigmaデータ構築に強みを持つ。",
      en: "6 years designing UI for brand-name web and mobile at a major agency. Cognition-first layouts, and Figma files engineers actually enjoy handing off.",
    },
    quote: {
      ja: "美しさと、実装しやすさは両立できます。",
      en: "Beauty and implementability are not a trade-off.",
    },
  },
  {
    id: "m8",
    initials: "W",
    tone: "oklch(0.68 0.12 100 / 0.14)",
    name: { ja: "渡辺 玲奈", en: "Rena Watanabe" },
    role: { ja: "アートディレクター", en: "Art Director" },
    location: { ja: "広島 · 完全リモート", en: "Hiroshima · Fully remote" },
    birth: "1998.03.19",
    skills: ["Art Direction", "Branding", "Figma", "Photoshop"],
    bio: {
      ja: "クリエイティブスタジオで中小・スタートアップのブランディングとWebデザインに3年間従事。企業の世界観を引き出すビジュアル表現を得意とする。",
      en: "3 years of branding and web design for SMBs and startups at a creative studio. Extracts and expresses each company's distinct worldview.",
    },
    quote: {
      ja: "『技術的にできる？』を気にせず、まず一番美しい案を。",
      en: "Design the most beautiful version first — we'll make it technically real.",
    },
  },
];

export type Project = {
  id: string;
  year: string;
  category: Bi;
  title: Bi;
  summary: Bi;
  challenge: Bi;
  outcome: Bi;
  stack: string[];
  metrics: { label: Bi; value: string }[];
  hue: string; // css color for the visual
};

export const projects: Project[] = [
  {
    id: "subscription-cms",
    year: "2025",
    category: { ja: "サブスクリプション基盤", en: "Subscription Platform" },
    title: {
      ja: "会員限定コンテンツ配信 × 独自決済システム",
      en: "Members-only Content & Custom Subscription Payments",
    },
    summary: {
      ja: "ノーコード制作の既存サイトの世界観を100%維持したまま、大規模な会員管理とサブスク決済を裏側にアドオン。",
      en: "Kept the visual identity of a no-code marketing site 100% intact while grafting on a full membership + subscription backend.",
    },
    challenge: {
      ja: "ノーコードの標準機能では、ユーザー属性に応じた動的配信と複数プランのStripe決済が実現不能。デザイナーが失注の危機に。フロントとシステムを完全に分離する疎結合設計で解決。",
      en: "The no-code tool could not support attribute-based content delivery or multi-plan Stripe billing. We rescued the pitch with a decoupled frontend / backend architecture.",
    },
    outcome: {
      ja: "1.5ヶ月でリリース。技術由来の手戻りゼロ。月商300万円のサブスク基盤を安全に稼働。",
      en: "Shipped in 6 weeks. Zero technical rework. A subscription business generating ¥3M/month runs on this stack today.",
    },
    stack: ["Next.js", "Vercel", "Go", "FastAPI", "AWS ECS", "PostgreSQL", "Stripe"],
    metrics: [
      { label: { ja: "リリース期間", en: "Time to launch" }, value: "6 wks" },
      { label: { ja: "技術的手戻り", en: "Tech rework" }, value: "0" },
      { label: { ja: "月次サブスク売上", en: "MRR" }, value: "¥3M+" },
    ],
    hue: "oklch(0.62 0.14 30)",
  },
  {
    id: "realestate-portal",
    year: "2024",
    category: { ja: "マッチングポータル", en: "Marketplace Portal" },
    title: {
      ja: "不動産マッチングポータル / 大量データ検索基盤",
      en: "Real-estate Marketplace with High-Volume Search",
    },
    summary: {
      ja: "数万件の物件データ検索とお気に入り同期に耐えられなかった既存基盤を、DB設計とインフラからゼロベースで再構築。",
      en: "Rebuilt search and favorites infra from scratch to handle tens of thousands of listings without collapsing.",
    },
    challenge: {
      ja: "地域・価格・間取り・地図APIを跨ぐ複合検索で速度遅延が致命傷に。DB専門とインフラ担当がインデックス最適化とオートスケールを徹底実行。",
      en: "Compound search across geo, price, layout and third-party map APIs was crushing latency. Our DB and SRE leads owned index tuning and autoscaling.",
    },
    outcome: {
      ja: "TTFBを0.8秒から0.05秒へ約16倍高速化。Core Web Vitals最高評価を獲得。",
      en: "TTFB from 0.8s → 0.05s (≈16× faster). Achieved top scores across Core Web Vitals.",
    },
    stack: ["Nuxt.js", "TypeScript", "Go", "AWS Lambda", "Aurora MySQL", "Redis"],
    metrics: [
      { label: { ja: "TTFB", en: "TTFB" }, value: "50ms" },
      { label: { ja: "高速化率", en: "Speed-up" }, value: "16×" },
      { label: { ja: "同時接続", en: "Concurrent users" }, value: "10k+" },
    ],
    hue: "oklch(0.55 0.14 220)",
  },
  {
    id: "ec-relaunch",
    year: "2024",
    category: { ja: "EC刷新 / SNS認証", en: "E-commerce Rebuild / Social Auth" },
    title: {
      ja: "大規模ECサイトのバックエンド刷新 × LINEログイン連携",
      en: "Large-scale E-commerce Backend Rebuild + LINE Login",
    },
    summary: {
      ja: "月間数百万PVのアパレルECにおいて、UIリニューアルに合わせてAPI・DBを全面刷新し、LINE公式アカウント連携ログインを新規実装。",
      en: "Rebuilt API and DB for a multi-million monthly PV apparel store alongside a UI refresh, and added LINE Login through the brand's official account.",
    },
    challenge: {
      ja: "古い基幹とカートが複雑に絡み、新UIに対応不可の状態。フルスタック担当がStripe・LINEログイン仕様を翻訳し、画面仕様を1mm単位ですり合わせ。",
      en: "Legacy backend and cart logic could not accept the new UI. Our full-stack lead translated Stripe & LINE Login specs and aligned every screen down to the millimeter.",
    },
    outcome: {
      ja: "カゴ落ち率22%削減。システムエラー由来の問い合わせをほぼゼロに抑制。",
      en: "Cart abandonment down 22%. Support tickets caused by system errors reduced to near zero.",
    },
    stack: ["Next.js", "TypeScript", "Node.js", "Python", "AWS Fargate", "Stripe", "LINE Login"],
    metrics: [
      { label: { ja: "カゴ落ち削減", en: "Cart abandon ↓" }, value: "-22%" },
      { label: { ja: "月間PV", en: "Monthly PV" }, value: "3M+" },
      { label: { ja: "エラー起因の問合せ", en: "Error tickets" }, value: "≈0" },
    ],
    hue: "oklch(0.5 0.12 160)",
  },
];
