// Dream-cha content — bilingual source of truth

export type Bi = { ja: string; en: string };

export type Member = {
  id: string;
  initials: string;
  tone: string;
  name: Bi;
  role: Bi;
  location: Bi;
  birth: string;
  skills: string[];
  photo?: string;
  bio: Bi;
  quote: Bi;
};

export const team: Member[] = [
  {
    id: "leader",
    initials: "S",
    tone: "oklch(0.55 0.16 250 / 0.28)",
    name: { ja: "鈴木 雄平", en: "Suzuki Yuhei" },
    role: { ja: "チームリーダー / テクニカルディレクター", en: "Team Leader / Technical Director" },
    location: { ja: "東京都", en: "Tokyo" },
    birth: "1999.07.12",
    skills: ["Go", "Python / FastAPI", "AWS", "Docker", "DB設計", "要件定義"],
    photo: "/members/suzuki.jpg",
    bio: {
      ja: "現役のシニアバックエンドエンジニアであり、DreamChaの開発ディレクションを率いる技術責任者。大規模なデータベース最適化や、ミッションクリティカルなサーバーインフラ構築の豊富な実務経験を持つ。デザイナー様のFigmaやSTUDIOの設計意図をコードレベルで正確に解釈し、高度なAPI連携や決済ロジックをバグなしで安定稼働させるための強固な技術設計とディレクションを統括します。",
      en: "An active senior backend engineer and the technical lead directing DreamCha's development. With deep hands-on experience in large-scale database optimisation and mission-critical server infrastructure, he interprets designers' Figma and STUDIO intent at the code level and oversees the robust technical design and direction that keeps advanced API integration and payment logic running bug-free.",
    },
    quote: {
      ja: "皆様の『CTO（最高技術責任者）』として商談に同席し、クライアントを納得させる完璧な技術提案を組み立てます。バックエンドはすべて私たちに丸投げしてください。",
      en: "I sit in on your negotiations as your CTO and build the technical proposal that convinces the client. Hand the backend entirely to us.",
    },
  },
  {
    id: "inoue",
    initials: "I",
    tone: "oklch(0.55 0.15 230 / 0.28)",
    name: { ja: "井上 駿", en: "Shun Inoue" },
    role: { ja: "フルスタックエンジニア", en: "Full-stack Engineer" },
    location: { ja: "東京都", en: "Tokyo" },
    birth: "1996.02.14",
    skills: ["Node.js", "TypeScript", "STUDIO", "WordPress", "外部API連携", "React"],
    photo: "/members/inoue.png",
    bio: {
      ja: "見た目の美しさと、裏側のシステムの安定稼働を両立させるフルスタックエンジニア。最新のノーコード外部連携（STUDIO ✕ 外部API）や、WordPressの高度なカスタマイズ開発を得意とし、フットワーク軽く実装をサポートします。",
      en: "A full-stack engineer who balances visual polish with rock-solid stability. Specialises in no-code external integrations (STUDIO × external APIs) and advanced WordPress customisation, supporting implementation with a light footprint.",
    },
    quote: {
      ja: "ノーコードやWordPressの仕様限界も、フットワーク軽く突破します。デザインの美しさを保ったまま、裏側を安定して動かします。",
      en: "I break past the limits of no-code and WordPress with a light footprint — keeping the design beautiful while the backend runs stable.",
    },
  },
  {
    id: "yamazaki",
    initials: "Y",
    tone: "oklch(0.52 0.15 200 / 0.28)",
    name: { ja: "山崎 太陽", en: "Taiyo Yamazaki" },
    role: { ja: "バックエンドエンジニア", en: "Backend Engineer" },
    location: { ja: "大阪府", en: "Osaka" },
    birth: "2000.02.18",
    skills: ["Stripe API", "決済API連携", "セキュリティ", "Node.js", "PostgreSQL"],
    photo: "/members/yamazaki-taiyo.jpg",
    bio: {
      ja: "Stripeをはじめとする外部決済APIの組み込みや、高度なセキュリティ仕様の策定を専門とするバックエンドのプロ。クライアントからの『お金のやり取りが発生する堅牢なシステム』の要望に対して、寸分の狂いもない正確な実装を提供します。",
      en: "A backend pro specialising in external payment API integration (Stripe and beyond) and advanced security specification. Delivers flawlessly precise implementation for robust systems that handle money.",
    },
    quote: {
      ja: "お金のやり取りが発生する堅牢なシステムを、寸分の狂いもなく実装します。決済とセキュリティは私にお任せください。",
      en: "I implement robust money-handling systems with zero deviation. Leave payments and security to me.",
    },
  },
  {
    id: "noguchi",
    initials: "N",
    tone: "oklch(0.5 0.14 160 / 0.28)",
    name: { ja: "高橋 大樹", en: "Daiki Takahashi" },
    role: { ja: "バックエンドエンジニア / データベース最適化", en: "Backend Engineer / Database" },
    location: { ja: "福岡県", en: "Fukuoka" },
    birth: "1995.05.05",
    skills: ["Node.js", "Python", "MySQL", "PostgreSQL", "API設計", "高負荷対策"],
    photo: "/members/noguchi.jpg",
    bio: {
      ja: "大規模データベース設計・バックエンド開発5年。ユーザー数が増えても落ちないデータベースと高速APIの構築を専門とする。データ連携が必要な大規模案件にも対応。",
      en: "5 years in large-scale database design and backend development. Specialist in databases that never go down under load and APIs that run fast, even on large data-integration projects.",
    },
    quote: {
      ja: "ユーザー数が増えても絶対に落ちないデータベースと、高速で動くAPIを構築します。データ連携が必要な大規模案件も安心してお任せください。",
      en: "I build databases that never buckle under growth and APIs that stay fast. Large-scale data integration is my speciality.",
    },
  },
  {
    id: "nakamura",
    initials: "N",
    tone: "oklch(0.5 0.14 190 / 0.28)",
    name: { ja: "中村 蓮", en: "Ren Nakamura" },
    role: { ja: "バックエンドエンジニア / インフラ", en: "Backend & Infrastructure Engineer" },
    location: { ja: "北海道", en: "Hokkaido" },
    birth: "1991.09.30",
    skills: ["Go", "PostgreSQL", "Redis", "Docker", "GitHub Actions"],
    photo: "/members/nakamura.jpg",
    bio: {
      ja: "大規模なECサイト、セキュリティ構築、API連携をバグなしで安定稼働させる、DreamChaの誇る強固な開発実務部隊のバックエンド専門エンジニア。データベースの最適化からサーバーインフラの設計までを精密に行います。",
      en: "A backend specialist in DreamCha's core engineering unit — running large EC sites, security builds and API integrations bug-free and stable. Handles everything from database optimisation to server infrastructure design with precision.",
    },
    quote: {
      ja: "「ユーザーが増えてから重くなった」「決済のデータ連携が心配」といった裏側の不安を完全に解消し、将来の機能拡張に耐えるデータベースを設計します。",
      en: "\"It got slow as users grew,\" \"I'm worried about payment data sync\" — I eliminate those fears and design databases built to last.",
    },
  },
  {
    id: "hasegawa",
    initials: "H",
    tone: "oklch(0.55 0.15 250 / 0.28)",
    name: { ja: "長谷川 紀夫", en: "Norio Hasegawa" },
    role: { ja: "フルスタックエンジニア", en: "Full-stack Engineer" },
    location: { ja: "愛知県", en: "Aichi" },
    birth: "1997.11.22",
    skills: ["Node.js", "TypeScript", "Next.js", "Firebase", "Stripe", "LINE Login"],
    photo: "/members/hasegawa.jpg",
    bio: {
      ja: "フロントとバックを境界なく一人で完結できる機動力を持つフルスタックエンジニア。特にStripe等を利用した独自決済システムやSNS認証のスピード実装を得意とし、デザイナーの細かな画面要望にも裏側を柔軟に合わせて調整する。",
      en: "A full-stack engineer who owns both sides of the stack solo, with a speciality in fast Stripe payment integration and social auth (LINE / Google). Flexes the backend to match every detail of a designer's UI.",
    },
    quote: {
      ja: "「すぐに決済機能とログイン機能を連動させたい」といったスピードが求められる要件に即座に対応。裏側のプログラムを柔軟にデザインへ合わせます。",
      en: "\"We need payments and login live fast\" — that's my brief. I flex the backend to match your UI.",
    },
  },
  {
    id: "sato",
    initials: "S",
    tone: "oklch(0.62 0.12 340 / 0.28)",
    name: { ja: "佐藤 結衣", en: "Yui Sato" },
    role: { ja: "UI/UXデザイナー", en: "UI/UX Designer" },
    location: { ja: "京都府", en: "Kyoto" },
    birth: "1992.12.05",
    skills: ["UI/UX", "Figma", "ワイヤーフレーム", "デザインシステム"],
    photo: "/members/sato-chiki.jpg",
    bio: {
      ja: "大手制作代理店にて有名ブランドのWebサイトやiOS/AndroidアプリのUI/UXデザインに6年間従事。人間の認知心理に基づいた「直感的に迷わない画面レイアウト」と、コンポーネントを再利用しやすいFigmaデータの構築に絶対的な強みを持つ。エンジニアへのハンドオフが最もスムーズなデザイナー。",
      en: "6 years of UI/UX design for premium brands and iOS/Android apps at a major agency. Absolute strength in cognition-based layout and component-ready Figma files. Renowned for the smoothest designer-to-engineer handoffs.",
    },
    quote: {
      ja: "デザインのクオリティを担保しつつ、エンジニアが実装しやすいデータ設計をサポートします。デザインとバックエンドが等価に手を取り合うチームです。",
      en: "I keep design quality high while making implementation easy for engineers. Here, design and backend work as true equals.",
    },
  },
  {
    id: "kato",
    initials: "K",
    tone: "oklch(0.55 0.15 245 / 0.28)",
    name: { ja: "加藤 拓海", en: "Takumi Kato" },
    role: { ja: "フルスタックエンジニア", en: "Full-stack Engineer" },
    location: { ja: "広島県", en: "Hiroshima" },
    birth: "1998.03.19",
    skills: ["TypeScript", "Next.js", "Node.js", "Stripe", "API連携", "React"],
    photo: "/members/kato.png",
    bio: {
      ja: "かつてDreamChaのデザイナー（佐藤）に自作システムのUI/UXの課題を解決してもらい、「デザインの力が、システムの価値をここまで跳ね上げるのか」と猛烈に感動。それ以来、デザインへの深いリスペクトを胸にチームに参画。デザイナー様が技術の壁に怯えず、クリエイティブに集中できる環境を形にするエンジニア。",
      en: "After DreamCha's designer (Sato) solved the UI/UX of his own system, he was struck by how much design can raise a system's value — and joined the team with a deep respect for design. An engineer who builds the environment where designers can focus on creativity without fearing technical walls.",
    },
    quote: {
      ja: "デザインへの深いリスペクトを胸に、デザイナー様が技術の壁に怯えずクリエイティブに集中できる環境を形にします。",
      en: "With deep respect for design, I build the environment where designers can focus on creativity without fearing technical walls.",
    },
  },
];

export type CaseStudy = {
  id: string;
  year: string;
  category: Bi;
  title: Bi;
  before: Bi;
  solution: Bi;
  result: Bi;
  stack: string[];
  metrics: { label: Bi; value: string }[];
  hue: string;
  image?: string;
  link?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "closed-marketing",
    year: "2025.11",
    category: { ja: "会員制マーケティング / クローズドプラットフォーム", en: "Membership Marketing / Closed Platform" },
    title: {
      ja: "会員限定クローズドマーケティングプラットフォーム構築",
      en: "Closed Members-only Marketing Platform Build",
    },
    before: {
      ja: "デザイナーが設計した会員限定サイトに、LINEログイン連動の会員認証と、権限ごとに限定コンテンツを出し分ける仕組みが必要だったが、権限管理の実装が技術的な壁となっていた。",
      en: "A designer-built members-only site needed LINE-login authentication and role-based content gating, but permission management was a technical wall.",
    },
    solution: {
      ja: "デザインを1ミリも崩さず、LINEログイン連動の会員認証・ロール別のコンテンツ出し分け・決済連携をバックエンドに実装。鈴木が商談に同席し、先方のシステム担当者への技術説明も代行しました。",
      en: "Without altering the design at all, we built LINE-login authentication, role-based content gating and payment integration into the backend. Suzuki joined the negotiation and handled the technical explanation to the client's system team.",
    },
    result: {
      ja: "デザイナーは画面設計に集中したまま、クローズドな会員マーケティング基盤をフルパッケージで納品。受注単価が従来の3倍になりました。",
      en: "The designer stayed focused on the UI while a full-package closed membership marketing platform was delivered — tripling their project rate.",
    },
    stack: ["Next.js", "LINEログイン", "会員認証", "Stripe", "PostgreSQL"],
    metrics: [
      { label: { ja: "形態", en: "Type" }, value: "会員制" },
      { label: { ja: "認証", en: "Auth" }, value: "LINE" },
      { label: { ja: "受注単価", en: "Rate" }, value: "×3" },
    ],
    hue: "oklch(0.5 0.14 250)",
    image: "/cases/wordpress-video.jpg",
  },
  {
    id: "subscription-ec",
    year: "2026.01",
    category: { ja: "サブスクEC / 定期課金", en: "Subscription EC / Recurring Billing" },
    title: {
      ja: "定期課金・サブスクリプション型物販ECプラットフォーム",
      en: "Subscription-based Retail EC Platform",
    },
    before: {
      ja: "物販ECに月額課金の仕組みを載せたいという要望だったが、過去に別のエンジニアの実装でプラグインの不具合による決済エラーが多発し、大クレームになったトラウマがあった。",
      en: "The client wanted recurring monthly billing on a retail EC site, but a past engineer's plugin-based build had caused repeated payment errors and a major complaint — a real trauma.",
    },
    solution: {
      ja: "デザインの世界観を完璧に保ったまま、Stripe BillingのAPIを裏側で驚くほど強固に繋ぎ込み。定期課金・カード更新・失敗リトライを堅牢に構築しました。",
      en: "Keeping the design's worldview perfectly intact, we wired the Stripe Billing API into the backend remarkably robustly — recurring billing, card updates and retry logic, all rock-solid.",
    },
    result: {
      ja: "納品後のバグは一切なく、クライアントも大満足。継続課金型の物販ECを安定稼働で納品できました。",
      en: "Zero post-launch bugs and a delighted client. A stable subscription retail EC was delivered.",
    },
    stack: ["Stripe Billing", "Node.js", "EC", "PostgreSQL"],
    metrics: [
      { label: { ja: "課金", en: "Billing" }, value: "定期" },
      { label: { ja: "決済", en: "Payments" }, value: "Stripe" },
      { label: { ja: "納品後バグ", en: "Post-launch bugs" }, value: "0" },
    ],
    hue: "oklch(0.5 0.13 190)",
    image: "/cases/ec-fullscratch.jpg",
  },
  {
    id: "realestate-portal",
    year: "2026.02",
    category: { ja: "不動産ポータル / 外部データ同期", en: "Real Estate Portal / Data Sync" },
    title: {
      ja: "不動産物件情報・外部データ自動同期ポータルサイト",
      en: "Real-estate Listings Portal with External Data Sync",
    },
    before: {
      ja: "大手不動産会社からの案件で、システム要件の仕様書が難解すぎてデザイナーが頭を抱えていた。外部の物件DBと自動同期する大量データ処理はノーコードでは実装不可能だった。",
      en: "On a project for a major real-estate firm, the system-requirements spec was too complex for the designer, and auto-syncing large volumes of data from an external listings DB was impossible in no-code.",
    },
    solution: {
      ja: "佐藤がデザインの意図（余白や動線）をエンジニア陣に完璧に『翻訳』。外部APIと定期通信し物件データを正規化して自動同期するバックエンドをPythonで構築しました。",
      en: "Sato perfectly \"translated\" the design intent (spacing, flow) to the engineers, while we built a Python backend that polls the external API, normalises listings and auto-syncs them.",
    },
    result: {
      ja: "見た目の崩れが一切ない、超高速な検索システムが完成。「技術部門を丸ごと外注できる安心感」を実現しました。",
      en: "Delivered an ultra-fast search system with zero visual breakage — the reassurance of outsourcing an entire technical department.",
    },
    stack: ["Python", "外部API連携", "PostgreSQL", "自動同期"],
    metrics: [
      { label: { ja: "同期", en: "Sync" }, value: "自動" },
      { label: { ja: "検索", en: "Search" }, value: "超高速" },
      { label: { ja: "崩れ", en: "Breakage" }, value: "0" },
    ],
    hue: "oklch(0.5 0.13 160)",
    image: "/cases/aws-matching.jpg",
  },
  {
    id: "salon-booking",
    year: "2026.04",
    category: { ja: "予約システム / 美容・医療", en: "Booking System / Beauty & Clinic" },
    title: {
      ja: "美容サロン・医療クリニック向けリアルタイム動的予約システム",
      en: "Real-time Dynamic Booking System for Salons & Clinics",
    },
    before: {
      ja: "個人で受けるには荷が重すぎるシステム開発案件で、スタッフ・設備ごとの空き状況をリアルタイムに反映する動的予約やダブルブッキング制御など、裏側の要件が複雑すぎた。",
      en: "A system-development project too heavy to take on solo — real-time availability by staff and equipment, double-booking control, and other complex backend requirements.",
    },
    solution: {
      ja: "『前払い不要の完全成果報酬（着金ベース）』で参画し、立替リスクゼロで対応。空き枠をリアルタイムに計算・ブロックする予約エンジンと排他制御をDB層に構築しました。",
      en: "We joined on zero-upfront, fully performance-based (payment-triggered) terms, eliminating cash-advance risk, and built a real-time slot-blocking booking engine with exclusive-locking at the DB layer.",
    },
    result: {
      ja: "鈴木が技術的なリスクの責任を100%引き受け、孤独なフリーランスの恐怖を解消。取りこぼしのないリアルタイム予約システムを納品しました。",
      en: "Suzuki took 100% responsibility for the technical risk, easing the fear of freelancing alone. A real-time booking system with no missed slots was delivered.",
    },
    stack: ["Node.js", "WebSocket", "リアルタイム予約", "PostgreSQL"],
    metrics: [
      { label: { ja: "予約", en: "Booking" }, value: "動的" },
      { label: { ja: "立替リスク", en: "Cash advance risk" }, value: "0" },
      { label: { ja: "重複", en: "Conflicts" }, value: "0" },
    ],
    hue: "oklch(0.5 0.14 300)",
    image: "/cases/salon-booking.png",
  },
  {
    id: "studio-stripe",
    year: "2026.05",
    category: { ja: "STUDIO × Stripe / サブスク決済", en: "STUDIO × Stripe / Subscription" },
    title: {
      ja: "STUDIO構築サイトへのStripeサブスクリプション決済・顧客管理システム実装",
      en: "Stripe Subscription & Customer Portal on a STUDIO Site",
    },
    before: {
      ja: "「STUDIOで制作したデザインLPをそのまま活かしつつ、裏側にStripeを使った月額サブスクリプション決済と、ユーザーが自分で契約内容を変更できるマイページ（請求管理画面）を作りたい」と相談された共同開発事例。",
      en: "A designer asked us to keep their STUDIO-built landing page as-is while adding Stripe monthly subscriptions and a customer page where users manage their own billing.",
    },
    solution: {
      ja: "STUDIOの標準機能では実装不可能な「Stripe Payment Links」および「カスタマーポータル」の裏側ロジックを設計し、デザインを1ミリも崩さずにドッキングさせました。",
      en: "Designed the backend logic for Stripe Payment Links and the Customer Portal — impossible with STUDIO's standard features — and docked it in without altering the design at all.",
    },
    result: {
      ja: "「STUDIOでは会員登録や決済機能を作れない」というノーコードの致命的な限界を突破。紙媒体出身のデザイナーが、自分の縄張りを守ったまま企業のDX案件という超高単価市場を開拓しました。",
      en: "Broke past the fatal no-code limit that \"STUDIO can't do sign-up or payments,\" letting a print-background designer open up the high-value corporate DX market while keeping their own turf intact.",
    },
    stack: ["STUDIO", "Stripe API (Payment Links)", "Node.js"],
    metrics: [
      { label: { ja: "ツール", en: "Tool" }, value: "STUDIO" },
      { label: { ja: "決済", en: "Payments" }, value: "Stripe" },
      { label: { ja: "公開", en: "Live" }, value: "◎" },
    ],
    hue: "oklch(0.52 0.15 245)",
    image: "/cases/lms-rebuild.jpg",
    link: "https://studio.design",
  },
  {
    id: "manyu-randoselu",
    year: "2026",
    category: { ja: "EC・ブランドサイト / ランドセルメーカー", en: "EC & Brand Site / Randoseru Maker" },
    title: {
      ja: "手づくりランドセルブランドのEC・予約基盤構築",
      en: "EC & Reservation Platform for a Handmade Randoseru Brand",
    },
    before: {
      ja: "職人による手づくりランドセルの世界観を保ちながら、カタログ請求・全国店舗案内・展示会予約・オンライン購入までを一つの導線でつなぐ必要があった。",
      en: "The brand needed to preserve its artisan, handmade worldview while connecting catalog requests, a nationwide store guide, exhibition reservations and online purchase into one flow.",
    },
    solution: {
      ja: "ブランドのビジュアルを最大限に活かしたUIの上に、会員・カート機能、カタログ請求フォーム、販売スケジュール、店舗・展示会情報を動的に管理できる仕組みを構築。",
      en: "On a UI that showcases the brand's visuals, we built member/cart functionality, a catalog-request form, sales-schedule management and dynamic store/exhibition information.",
    },
    result: {
      ja: "情報収集から予約・購入までを回遊できるサイトとして公開。繁忙期の販売スケジュールにも耐える運用体制を実現した。",
      en: "Launched as a site that carries visitors from research through reservation and checkout, with an operation setup that holds up during peak sales seasons.",
    },
    stack: ["EC構築", "会員システム", "カタログ請求フォーム", "店舗・展示会管理"],
    metrics: [
      { label: { ja: "形態", en: "Format" }, value: "EC" },
      { label: { ja: "カタログ請求", en: "Catalog" }, value: "Web" },
      { label: { ja: "店舗案内", en: "Store locator" }, value: "◎" },
    ],
    hue: "oklch(0.58 0.10 45)",
    image: "/cases/manyu-randoselu.png",
  },
  {
    id: "libero-home",
    year: "2026",
    category: { ja: "コーポレート・ブランドサイト / 注文住宅", en: "Corporate & Brand Site / Custom Homes" },
    title: {
      ja: "工務店ブランドサイトとイベント予約導線の構築",
      en: "Home-Builder Brand Site with Event Reservation Flow",
    },
    before: {
      ja: "「山梨の暮らしをデザインする」という世界観を伝えながら、モデルハウス見学会や無料相談会の集客・予約をサイト上で完結させたかった。",
      en: "The builder wanted to convey its \"designing life in Yamanashi\" worldview while handling model-house tours and free-consultation bookings entirely on the site.",
    },
    solution: {
      ja: "大判ビジュアルによるブランド表現を軸に、イベント情報の更新・予約フォーム・完成見学会の告知を運用しやすいCMSとして構築。",
      en: "Built around large-format brand visuals, with an easy-to-run CMS for event updates, reservation forms and model-house tour announcements.",
    },
    result: {
      ja: "イベントごとに情報を差し替えられる集客基盤として公開。無料相談会予約への導線を明確化した。",
      en: "Launched as a lead-generation base where each event's information can be swapped in, with a clear path to free-consultation bookings.",
    },
    stack: ["ブランドサイト", "イベントCMS", "予約フォーム", "レスポンシブ"],
    metrics: [
      { label: { ja: "相談予約", en: "Booking" }, value: "Web" },
      { label: { ja: "イベント管理", en: "Events" }, value: "CMS" },
      { label: { ja: "エリア", en: "Area" }, value: "Yamanashi" },
    ],
    hue: "oklch(0.55 0.08 150)",
    image: "/cases/libero-home.png",
  },
  {
    id: "art-asada",
    year: "2026",
    category: { ja: "医療・クリニックサイト / 予約", en: "Medical Clinic Site / Reservations" },
    title: {
      ja: "不妊治療クリニックの予約・診療案内サイト構築",
      en: "Fertility Clinic Site with Reservations & Treatment Guide",
    },
    before: {
      ja: "初診のハードルが高い不妊治療において、患者が安心して来院できるよう、診療時間・治療内容・アクセスと予約をわかりやすく整理する必要があった。",
      en: "In fertility care, where the first visit is daunting, the clinic needed hours, treatments, access and reservations organized clearly so patients could visit with confidence.",
    },
    solution: {
      ja: "落ち着いたトーンのデザインで、診療時間表・治療/検査の案内・Web予約・採用情報を動的に管理できる医療機関サイトを構築。",
      en: "A calm, reassuring design with a medical-institution site that dynamically manages the hours table, treatment/exam guides, web reservations and recruitment.",
    },
    result: {
      ja: "予約・診療案内・採用までを1サイトに集約し、来院前の不安を軽減する情報導線を実現した。",
      en: "Consolidated reservations, treatment guidance and recruitment into one site, easing patients' pre-visit anxiety.",
    },
    stack: ["クリニックサイト", "Web予約", "診療案内", "採用情報", "レスポンシブ"],
    metrics: [
      { label: { ja: "予約", en: "Booking" }, value: "Web" },
      { label: { ja: "対応エリア", en: "Areas" }, value: "4市" },
      { label: { ja: "駅から", en: "From station" }, value: "2min" },
    ],
    hue: "oklch(0.72 0.11 70)",
    image: "/cases/art-asada.png",
  },
];

export type BlogPost = {
  id: string;
  date: string;
  tag: Bi;
  title: Bi;
  intro: Bi;
  profile: Bi;
  despair: Bi;
  response: Bi;
  future: Bi;
};

export const blogPosts: BlogPost[] = [
  {
    id: "fb-takahashi",
    date: "2025.11",
    tag: { ja: "お客様の声", en: "Client Voice" },
    title: {
      ja: "『LINEログイン連動の会員サイト』の商談を、鈴木の同席で一発クリア",
      en: "A LINE-login membership-site pitch, cleared in one shot with Suzuki in the room",
    },
    intro: {
      ja: "技術的な会話ができず失注しかけた会員サイト案件を、商談同席で受注に繋げた事例。",
      en: "A membership-site deal nearly lost over technical talk — won by joining the negotiation.",
    },
    profile: {
      ja: "フリーランスWebデザイナー / 高橋 健二 様",
      en: "Freelance Web Designer / Kenji Takahashi",
    },
    despair: {
      ja: "「クライアントから突然『LINEログインと連動した会員サイトを作りたい』と言われ、技術的な会話が全くできず失注しかけていました。」",
      en: '"My client suddenly said they wanted a members’ site with LINE login, and I couldn’t hold a technical conversation at all — I was about to lose the deal."',
    },
    response: {
      ja: "「DreamChaの鈴木さんが商談に同席してくれたおかげで、先方のシステム担当者も一発で納得。」",
      en: '"Because DreamCha’s Suzuki joined the negotiation, the client’s own system lead was convinced in one shot."',
    },
    future: {
      ja: "「私はFigmaでのデザインとフロント実装に100%集中でき、受注単価がこれまでの3倍になりました！」",
      en: '"I could focus 100% on Figma design and front-end, and my project rate tripled!"',
    },
  },
  {
    id: "fb-watanabe",
    date: "2026.01",
    tag: { ja: "お客様の声", en: "Client Voice" },
    title: {
      ja: "デザイン世界観を保ったまま、StripeのAPIを裏側で強固に繋ぎ込み",
      en: "Kept the design worldview intact while the Stripe API was wired in rock-solid behind the scenes",
    },
    intro: {
      ja: "過去の決済エラーのトラウマを、フルスタックの実装力で払拭したサブスクEC事例。",
      en: "A subscription-EC case that erased the trauma of past payment errors with full-stack skill.",
    },
    profile: {
      ja: "UI/UXデザイナー・ブランドディレクター / 渡辺 茜 様",
      en: "UI/UX Designer & Brand Director / Akane Watanabe",
    },
    despair: {
      ja: "「過去に別のエンジニアに頼んだ際、プラグインの不具合で決済エラーが多発し、大クレームになったトラウマがありました。」",
      en: '"With a previous engineer, plugin bugs caused repeated payment errors and a major complaint — it left me traumatised."',
    },
    response: {
      ja: "「DreamChaさんに相談したところ、フルスタックの方が私の作ったデザイン世界観を完璧に保ったまま、StripeのAPIを裏側で驚くほど強固に繋ぎ込んでくれました。」",
      en: '"When I consulted DreamCha, their full-stack engineer kept my design worldview perfectly intact and wired the Stripe API into the backend astonishingly robustly."',
    },
    future: {
      ja: "「納品後のバグも一切なく、クライアントも大満足です。」",
      en: '"There were zero post-launch bugs, and the client was thrilled."',
    },
  },
  {
    id: "fb-kobayashi",
    date: "2026.02",
    tag: { ja: "お客様の声", en: "Client Voice" },
    title: {
      ja: "デザインの意図を『翻訳』し、見た目の崩れゼロの超高速検索システムを実現",
      en: "“Translated” the design intent into an ultra-fast search system with zero visual breakage",
    },
    intro: {
      ja: "難解なシステム要件の不動産案件を、デザイン意図の翻訳で完遂した事例。",
      en: "A real-estate project with a daunting spec, completed by translating the design intent.",
    },
    profile: {
      ja: "Web制作会社経営・フリーランスデザイナー / 小林 拓也 様",
      en: "Web Studio Owner & Freelance Designer / Takuya Kobayashi",
    },
    despair: {
      ja: "「大手不動産会社からの案件で、システム要件の仕様書が難解すぎて頭を抱えていました。」",
      en: '"On a project for a major real-estate firm, the system-requirements spec was so complex it left me stumped."',
    },
    response: {
      ja: "「DreamChaの佐藤さんが私のデザインの意図（余白や動線）をチームのエンジニアたちに完璧に『翻訳』して伝えてくれたため、見た目の崩れが一切ない、超高速な検索システムが完成しました。」",
      en: '"DreamCha’s Sato perfectly ‘translated’ my design intent (spacing, flow) to the engineers, so an ultra-fast search system was built with zero visual breakage."',
    },
    future: {
      ja: "「技術部門を丸ごと外注できる安心感は凄いです。」",
      en: '"The peace of mind of outsourcing an entire technical department is incredible."',
    },
  },
  {
    id: "fb-saito",
    date: "2026.04",
    tag: { ja: "お客様の声", en: "Client Voice" },
    title: {
      ja: "完全成果報酬で立替リスクゼロ。孤独なフリーランスの恐怖から解放",
      en: "Fully performance-based, zero cash-advance risk — freed from the fear of freelancing alone",
    },
    intro: {
      ja: "荷の重い予約システム開発を、着金ベースの成果報酬でリスクなく挑戦できた事例。",
      en: "A heavy booking-system build, taken on risk-free on payment-triggered performance terms.",
    },
    profile: {
      ja: "フリーランスWebディレクター 兼 デザイナー / 斎藤 美咲 様",
      en: "Freelance Web Director & Designer / Misaki Saito",
    },
    despair: {
      ja: "「個人で受けるには荷が重すぎるシステム開発案件でした。」",
      en: '"It was a system-development project far too heavy to take on as an individual."',
    },
    response: {
      ja: "「DreamChaさんが『前払い不要の完全成果報酬（着金ベース）』で入ってくれたため、金銭的な立替リスクゼロで挑戦できました。」",
      en: '"Because DreamCha came in on ‘no-prepayment, fully performance-based (payment-triggered)’ terms, I could take it on with zero cash-advance risk."',
    },
    future: {
      ja: "「鈴木様が技術的なリスクの責任を100%引き受けてくれたおかげで、孤独なフリーランスの恐怖から解放されました。」",
      en: '"Because Suzuki took 100% responsibility for the technical risk, I was freed from the fear of freelancing alone."',
    },
  },
  {
    id: "fb-ito",
    date: "2026.05",
    tag: { ja: "お客様の声", en: "Client Voice" },
    title: {
      ja: "「デザインは1ミリも奪わない」— 紙媒体出身の私がDX案件を開拓できた",
      en: '"They didn\'t take a millimeter of my design" — a print designer opening up DX work',
    },
    intro: {
      ja: "Webシステム門外漢のデザイナーが、裏方に徹する開発でDX市場を開拓した事例。",
      en: "A designer new to web systems opening up the DX market with behind-the-scenes development.",
    },
    profile: {
      ja: "グラフィック 兼 クリエイティブディレクター / 伊藤 裕太 様",
      en: "Graphic & Creative Director / Yuta Ito",
    },
    despair: {
      ja: "「私はもともと紙媒体のデザイン事務所をやっており、Webシステムは完全に門外漢でした。」",
      en: '"I originally ran a print-design studio and was completely out of my depth with web systems."',
    },
    response: {
      ja: "「DreamChaさんは『私たちはデザインは1ミリも奪いません』と言ってくれ、本当にシステム裏方の開発インフラだけに徹してくれました。」",
      en: '"DreamCha told me, \'we won\'t take a millimeter of your design,\' and truly stuck to the backend development infrastructure only."',
    },
    future: {
      ja: "「おかげさまで、自分の縄張りを守ったまま、企業のDX案件という超高単価な市場を開拓できました！」",
      en: '"Thanks to them, I opened up the very high-value market of corporate DX work — while keeping my own turf intact!"',
    },
  },
];
