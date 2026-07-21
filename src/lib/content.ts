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
    initials: "M",
    tone: "oklch(0.35 0.12 240 / 0.18)",
    name: { ja: "村上 豪", en: "Go Murakami" },
    role: { ja: "リーダー / シニアバックエンドエンジニア", en: "Team Lead / Senior Backend Engineer" },
    location: { ja: "東京都・完全リモート", en: "Tokyo · Fully remote" },
    birth: "1993.07.12",
    skills: ["Go", "Python / FastAPI", "AWS", "Docker", "DB設計", "要件定義"],
    photo: "/members/murakami.jpg",
    bio: {
      ja: "システム開発会社にてバックエンドの基幹システム構築に5年間従事後、フリーランスとして独立。大規模Webサービスのインフラ刷新やAPI設計を多数経験。非エンジニアの意図を日常の言葉に「翻訳」し、手戻りのない堅牢な要件定義を行うスキルに定評がある。本チームの発起人。",
      en: "5 years building core backend systems at an enterprise studio before going independent. Led API design and infra overhauls for large-scale services. Known for translating non-technical intent into precise, low-rework specifications. Founder of Dream-cha.",
    },
    quote: {
      ja: "「デザインは完璧なのに、ログイン機能や決済の要件が複雑で形にできない」。そんなデザイナー様のピンチを裏側から支える黒子です。バックエンドはすべて私に丸投げしてください。",
      en: "\"The design is perfect, but auth or payments stall it.\" Hand the backend to me and focus on your craft.",
    },
  },
  {
    id: "m2",
    initials: "M",
    tone: "oklch(0.42 0.14 240 / 0.18)",
    name: { ja: "峰岡 大円", en: "Daien Mineoka" },
    role: { ja: "バックエンドエンジニア / インフラ", en: "Backend Engineer / Infrastructure" },
    location: { ja: "東京都・完全リモート", en: "Tokyo · Fully remote" },
    birth: "1999.02.14",
    photo: "/members/mineoka.jpg",
    skills: ["PHP / WordPress", "Python", "Go", "AWS", "決済API連携", "セキュリティ対策"],
    bio: {
      ja: "バックエンド開発・サーバーインフラ構築6年。WordPressのコアカスタマイズから AWS 構築まで対応。全体の戦略と堅牢なバックエンドを設計し、複雑な決済や会員システムを裏側から支える。",
      en: "6 years in backend development and server infrastructure. From WordPress core customisation to AWS architecture. Designs overall strategy and robust backend systems.",
    },
    quote: {
      ja: "「全体の戦略と堅牢なバックエンドを設計します。デザイナー様が受注を迷うような複雑な決済や会員システムを、最も安全に、最も美しく裏側から組み上げます。」",
      en: "\"I design the overall strategy and a robust backend. Complex payment and membership systems that make designers hesitate — I build them safely and cleanly from behind.\"",
    },
  },
  {
    id: "m3",
    initials: "Y",
    tone: "oklch(0.58 0.12 340 / 0.18)",
    name: { ja: "山崎", en: "Yamazaki" },
    role: { ja: "フロントエンドエンジニア / UI・UXディレクター", en: "Frontend Engineer & UI/UX Director" },
    location: { ja: "大阪府・完全リモート", en: "Osaka · Fully remote" },
    birth: "1994.12.18",
    photo: "/members/yamazaki.jpg",
    skills: ["HTML5 / CSS3", "JavaScript", "React", "Figma", "STUDIO", "Bubble"],
    bio: {
      ja: "フロントエンド開発・UIデザイン5年。チーム内の唯一のフロントエンド・UI窓口として、デザイナーのFigmaデータを1ミリのズレもなくコードへ落とし込み、バックエンドと繋ぐ橋渡し役を担う。",
      en: "5 years in frontend development and UI design. The team's sole frontend/UI point of contact — translates Figma with pixel-perfect accuracy and bridges the gap to backend.",
    },
    quote: {
      ja: "「デザイナー様のこだわりやFigmaのデザインデータを1ミリのズレもなく完璧にコードへ落とし込み、バックエンドへと繋ぎます。」",
      en: "\"I translate your Figma with zero deviation — pixel-perfect code, perfectly wired to the backend.\"",
    },
  },
  {
    id: "m4",
    initials: "N",
    tone: "oklch(0.48 0.14 160 / 0.18)",
    name: { ja: "野口 政志", en: "Masashi Noguchi" },
    role: { ja: "バックエンド / データベース最適化", en: "Backend & Database Specialist" },
    location: { ja: "福岡県・完全リモート", en: "Fukuoka · Fully remote" },
    birth: "1995.05.05",
    photo: "/members/noguchi.jpg",
    skills: ["Node.js", "Python", "MySQL", "PostgreSQL", "API設計", "高負荷対策"],
    bio: {
      ja: "大規模データベース設計・バックエンド開発5年。ユーザー数が増えても落ちないデータベースと高速APIの構築を専門とする。データ連携が必要な大規模案件にも対応。",
      en: "5 years in large-scale database design and backend development. Specialist in databases that never go down under load and APIs that run fast.",
    },
    quote: {
      ja: "「ユーザー数が増えても絶対に落ちないデータベースと、高速で動くAPIを構築します。データ連携が必要な大規模案件も安心してお任せください。」",
      en: "\"I build databases that never buckle under growth and APIs that stay fast. Large-scale data integration projects are my speciality.\"",
    },
  },
  {
    id: "nakamura",
    initials: "N",
    tone: "oklch(0.42 0.14 200 / 0.18)",
    name: { ja: "中村 秀一", en: "Shuichi Nakamura" },
    role: { ja: "バックエンド / データベースエンジニア", en: "Backend & Database Engineer" },
    location: { ja: "北海道・完全リモート", en: "Hokkaido · Fully remote" },
    birth: "1991.09.30",
    photo: "/members/nakamura.jpg",
    skills: ["Go", "PostgreSQL", "Redis", "Docker", "GitHub Actions"],
    bio: {
      ja: "中堅SIerにてECサイトのバックエンドや物流基幹システムのDB設計・API開発に7年間従事。膨大なデータが交差する処理を「超高速」かつ「整合性を保って」実装するスペシャリスト。Dockerを用いた一貫性のある開発環境の構築や、テスト・デプロイの自動化に長けている。",
      en: "7 years of backend and DB design for e-commerce and logistics at a mid-scale SIer. Specialises in high-throughput data processing with strict consistency. Expert in Docker-based dev environments and CI/CD automation.",
    },
    quote: {
      ja: "「ユーザーが増えてからサイトが重くなった」「決済処理のデータ連携が心配」といった裏側の不安を完全に解消します。将来的な機能拡張に耐えられる美しいデータベースを設計します。",
      en: "\"The site slowed down as users grew\" and \"I'm worried about payment data sync\" — I eliminate those fears. I design databases built to last.",
    },
  },
  {
    id: "shimizu",
    initials: "H",
    tone: "oklch(0.48 0.16 55 / 0.18)",
    name: { ja: "長谷川 紀夫", en: "Norio Hasegawa" },
    role: { ja: "フルスタックエンジニア", en: "Full-stack Engineer" },
    location: { ja: "愛知県・完全リモート", en: "Aichi · Fully remote" },
    birth: "1997.11.22",
    photo: "/members/hasegawa.jpg",
    skills: ["Node.js", "TypeScript", "Next.js", "Firebase", "Stripe", "LINE Login"],
    bio: {
      ja: "自社SaaS開発企業にてフルスタックエンジニアとして3年間勤務。フロントとバックを境界なく一人で完結できる機動力を持ち、特にStripe等を利用した独自決済システムやSNS認証のスピード実装を得意とする。",
      en: "3 years as a full-stack engineer at an in-house SaaS company. Owns both sides of the stack solo, with a speciality in fast Stripe payment integration and social auth (LINE / Google).",
    },
    quote: {
      ja: "「すぐに決済機能とログイン機能を連動させたい」といったスピード感が求められる要件に即座に対応します。デザイナーさんの細かな画面要望にも、裏側のプログラムを柔軟に合わせて調整できます。",
      en: "\"We need payments and login live ASAP.\" — that's my brief. Full-stack context means I flex the backend to match every detail of your UI.",
    },
  },
  {
    id: "kobayashi",
    initials: "S",
    tone: "oklch(0.62 0.10 340 / 0.18)",
    name: { ja: "佐藤 千希", en: "Chiki Sato" },
    role: { ja: "シニアUI/UXデザイナー", en: "Senior UI/UX Designer" },
    location: { ja: "京都府・完全リモート", en: "Kyoto · Fully remote" },
    birth: "1992.12.05",
    photo: "/members/sato-chiki.jpg",
    skills: ["UI/UX", "Figma", "ワイヤーフレーム", "デザインシステム"],
    bio: {
      ja: "大手制作代理店にて有名ブランドのWebサイトやiOS/AndroidアプリのUI/UXデザインに6年間従事。人間の認知心理に基づいた「直感的に迷わない画面レイアウト」と、コンポーネントを再利用しやすいFigmaデータの構築に絶対的な強みを持つ。エンジニアへのハンドオフが最もスムーズなデザイナーとして定評がある。",
      en: "6 years of UI/UX design for premium brands and iOS/Android apps at a major agency. Absolute strength in cognition-based layout design and component-ready Figma files. Renowned for the smoothest designer-to-engineer handoffs.",
    },
    quote: {
      ja: "「ワイヤーフレームが引けない」「エンジニアへのデザインの渡し方がわからない」と困ったデザイナー仲間の相談窓口です。デザインのクオリティを担保しつつ、実装しやすいデータ設計をサポートします。",
      en: "Stuck on wireframing or designer-to-dev handoff? I'm the sounding board for fellow designers. Quality design, implemented cleanly.",
    },
  },
  {
    id: "watanabe",
    initials: "K",
    tone: "oklch(0.65 0.12 100 / 0.18)",
    name: { ja: "木戸 もも", en: "Momo Kido" },
    role: { ja: "Webデザイナー / アートディレクター", en: "Web Designer & Art Director" },
    location: { ja: "広島県・完全リモート", en: "Hiroshima · Fully remote" },
    birth: "1998.03.19",
    photo: "/members/kido.jpg",
    skills: ["Webデザイン", "Figma", "Photoshop", "アートディレクション", "ブランディング"],
    bio: {
      ja: "クリエイティブスタジオにて中小企業やスタートアップのブランディング、Webデザインを3年間担当。企業の強みや世界観を引き出すグラフィック・ビジュアル表現が得意。エンジニアチームと初期段階から密に連携し、技術制約に縛られない自由で美しいクリエイティブを提案している。",
      en: "3 years of branding and web design for SMBs and startups at a creative studio. Extracts and expresses each company's distinct worldview. Collaborates with engineers from day one to propose creatives unbounded by technical limits.",
    },
    quote: {
      ja: "「こんな表現をしたいけれど、システム的にできるのかな？」と諦める前に相談してください。エンジニアチームが裏側を100%支えてくれるからこそ、技術の限界を気にせず最高に美しいクリエイティブを提案できます。",
      en: "\"Can we even build this?\" — ask before giving up. With our engineers handling the backend 100%, I propose the most beautiful creative without worrying about technical limits.",
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
};

export const caseStudies: CaseStudy[] = [
  {
    id: "wordpress-video",
    year: "2025",
    category: { ja: "WordPressカスタマイズ / 会員決済システム", en: "WordPress Custom / Members Payment System" },
    title: {
      ja: "有料動画配信・決済会員システム 新規構築",
      en: "Paid Video & Subscription Membership System Build",
    },
    before: {
      ja: "Figmaのフロントデザインは完成済みだが、動画の不正ダウンロード防止・Stripe連携・会員DB構築の技術的ブラックボックスにより失注寸前だった。",
      en: "Front-end Figma design was complete, but video DRM, Stripe integration and membership DB were technical black boxes — the project was nearly lost.",
    },
    solution: {
      ja: "デザインを100%活かしたまま、Vimeo APIとStripe WebhookをWordPressコアへ安全に繋ぎ込み。決済直後に閲覧権限が自動付与されるセキュアな動的会員システムを構築。",
      en: "Preserved the design 100% while safely wiring Vimeo API and Stripe Webhooks into WordPress core. Built a secure dynamic membership system that grants access rights automatically upon payment.",
    },
    result: {
      ja: "デザイナーはデザイン業務に100%集中したまま、システム構築を含むフルパッケージ案件として受注に成功。",
      en: "The designer focused 100% on design while the full-package project — including system build — was won and delivered.",
    },
    stack: ["WordPress", "PHP", "Stripe Webhook", "Vimeo API", "MySQL"],
    metrics: [
      { label: { ja: "受注形態", en: "Delivery type" }, value: "Full" },
      { label: { ja: "技術的手戻り", en: "Tech rework" }, value: "0" },
      { label: { ja: "デザイン再現率", en: "Design fidelity" }, value: "100%" },
    ],
    hue: "oklch(0.50 0.14 240)",
    image: "/cases/wordpress-video.jpg",
  },
  {
    id: "aws-matching-app",
    year: "2025",
    category: { ja: "AWS × API開発 / マッチングアプリ新規構築", en: "AWS × API / Matching App New Build" },
    title: {
      ja: "マッチングアプリケーション構築（完全成果報酬）",
      en: "Matching App Build — Full Performance-based",
    },
    before: {
      ja: "UI/UXデザインコンペ獲得後、開発フェーズで他社から高額な着手金を要求され、手元資金不足と「本当に動くか」という不安から案件辞退を検討していた。",
      en: "Won the UI/UX design pitch, but facing demands for large upfront payments from other developers — lack of funds and uncertainty about delivery led to considering dropping the project.",
    },
    solution: {
      ja: "「初期費用0円・完全成果報酬」で締結。AWS（EC2/RDS）上にスケーラブルなインフラ基盤を迅速構築し、フロントとDBを繋ぐ独自APIを開発。",
      en: "Partnered on zero-upfront, full performance-based terms. Built scalable infrastructure on AWS (EC2/RDS) and developed custom APIs connecting frontend to database.",
    },
    result: {
      ja: "デザイナー側の立替リスクを完全排除し、24時間365日安定稼働する商用アプリを納品。着金後にクリーンな報酬分配を完了。",
      en: "Eliminated all financial risk for the designer. Delivered a commercially stable app running 24/7. Clean revenue split completed after client payment.",
    },
    stack: ["AWS EC2", "AWS RDS", "Python", "REST API", "React"],
    metrics: [
      { label: { ja: "初期費用", en: "Upfront cost" }, value: "¥0" },
      { label: { ja: "稼働率", en: "Uptime" }, value: "99.9%" },
      { label: { ja: "立替リスク", en: "Cash advance risk" }, value: "0" },
    ],
    hue: "oklch(0.45 0.14 200)",
    image: "/cases/aws-matching.jpg",
  },
  {
    id: "nocode-api-sync",
    year: "2025",
    category: { ja: "外部API連携 / ノーコード × 社内DB同期", en: "External API / No-code × Internal DB Sync" },
    title: {
      ja: "ノーコード × 社内データベースのリアルタイム同期",
      en: "No-code × Internal Database Real-time Sync",
    },
    before: {
      ja: "ノーコードのブランドサイトリニューアル中、「既存DBと予約データをリアルタイム同期させたい」というノーコードの仕様限界を超える要求を受けて対応不能に。",
      en: "During a no-code brand site refresh, the client requested real-time sync between an existing DB and booking data — far beyond no-code capabilities.",
    },
    solution: {
      ja: "既存PostgreSQLの仕様を解析し、Python / AWS Lambdaを中継地点として構築。Webhookから送信されるデータを安全に暗号化して自動同期するAPIを開発。",
      en: "Analysed the existing PostgreSQL schema and built a Python / AWS Lambda relay. Developed an API that securely encrypts and auto-syncs data from no-code Webhooks.",
    },
    result: {
      ja: "「ノーコードだから不可能」を覆し、競合コンペに勝利。既存サイトの機能拡張リニューアルを完遂。",
      en: "Proved \"impossible for no-code\" wrong. Won the competitive pitch and fully completed the site's feature expansion.",
    },
    stack: ["Python", "AWS Lambda", "PostgreSQL", "REST API", "Webhook"],
    metrics: [
      { label: { ja: "同期方式", en: "Sync type" }, value: "RT" },
      { label: { ja: "コンペ結果", en: "Pitch result" }, value: "Won" },
      { label: { ja: "連携レイテンシ", en: "Latency" }, value: "<200ms" },
    ],
    hue: "oklch(0.48 0.13 160)",
    image: "/cases/nocode-api.jpg",
  },
  {
    id: "ec-fullscratch",
    year: "2024",
    category: { ja: "フルスクラッチ開発 / ECバックエンド刷新", en: "Full-scratch / EC Backend Rebuild" },
    title: {
      ja: "デザイン完全準拠型 EC バックエンドフルスクラッチ構築",
      en: "Design-faithful EC Backend Built from Scratch",
    },
    before: {
      ja: "ECリニューアルでこだわりのUI/UXを再設計したが、パッケージやプラグインの仕様制限で「このデザインは実装できない」と妥協を迫られていた。",
      en: "After redesigning a meticulous UI/UX for an EC refresh, plugin and package constraints forced compromise — \"we can't build this design.\"",
    },
    solution: {
      ja: "既存制限をすべて撤廃するため、カスタムECバックエンド（注文・在庫管理API）をRuby on Railsでフルスクラッチ開発。Figmaの意図を1ミリのズレもなく実装。",
      en: "Removed all constraints by building a custom EC backend (order and inventory management API) from scratch in Ruby on Rails. Implemented the Figma design with zero deviation.",
    },
    result: {
      ja: "クリエイティブを100%引き立てる、バグのない堅牢なECシステムとして完全リニューアル。担当デザイナーが専属メンバーとして正式加入。",
      en: "Fully relaunched as a bug-free, robust EC system that showcases the creative 100%. The designer joined as a dedicated team member after this project.",
    },
    stack: ["Ruby on Rails", "PostgreSQL", "AWS", "Docker", "Stripe"],
    metrics: [
      { label: { ja: "デザイン再現率", en: "Design fidelity" }, value: "100%" },
      { label: { ja: "バグ件数", en: "Post-launch bugs" }, value: "0" },
      { label: { ja: "成果", en: "Outcome" }, value: "加入" },
    ],
    hue: "oklch(0.52 0.13 30)",
    image: "/cases/ec-fullscratch.jpg",
  },
  {
    id: "lms-rebuild",
    year: "2024",
    category: { ja: "上流マーケティング / LMSリニューアル", en: "Upstream Strategy / LMS Rebuild" },
    title: {
      ja: "単独エンジニアの下請け脱却 × LMS大規模リニューアル",
      en: "Solo Engineer Escapes Subcontracting via Large-scale LMS Rebuild",
    },
    before: {
      ja: "高いシステム構築スキルを持ちながらも、デザインスキル不足により制作会社の下請けに甘んじ、既存LMSのデバッグ・修正を低単価で請け負い続けていた。",
      en: "Skilled engineer stuck in low-paid subcontract work — debugging and patching an existing LMS for agencies due to lack of design skills.",
    },
    solution: {
      ja: "「デザイナー向けマーケティング戦略」プロジェクトにアサイン。大手スクールのLMS大規模リニューアルにおいて、Ruby on Railsによる高スケーラブルなAPI開発の実働を担当。",
      en: "Assigned to the \"designer-targeted marketing strategy\" project. Led high-scalable API development in Ruby on Rails for a major school's large-scale LMS rebuild.",
    },
    result: {
      ja: "下請けではなく対等な立場で上流のシステムリニューアルに参画。プロジェクト成功後、戦略基盤に基づくクリーンな利益分配を目の当たりにし、コアメンバーとして正式加入。",
      en: "Participated as an equal partner — not a subcontractor — in upstream system renewal. After project success, witnessed the clean profit-sharing model and joined as a core member.",
    },
    stack: ["Ruby on Rails", "AWS", "PostgreSQL", "Redis", "Docker"],
    metrics: [
      { label: { ja: "参画形態", en: "Role" }, value: "対等" },
      { label: { ja: "単価変化", en: "Rate change" }, value: "↑3×" },
      { label: { ja: "成果", en: "Outcome" }, value: "加入" },
    ],
    hue: "oklch(0.44 0.12 280)",
    image: "/cases/lms-rebuild.jpg",
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
    id: "join-takuya",
    date: "2025.06",
    tag: { ja: "加入ストーリー", en: "Member Story" },
    title: {
      ja: "下請けの限界とデザインの壁を突破し、コアチームへ加入するまで",
      en: "Breaking through the subcontracting ceiling and joining the core team",
    },
    intro: {
      ja: "個人でクラウドソーシングから裏側だけを受注していたバックエンドエンジニアが、DreamChaの戦略に衝撃を受け、チームの一員になるまでの話。",
      en: "A backend engineer who only took subcontract work from platforms discovered Dream-cha's strategy and decided to join from the inside.",
    },
    profile: {
      ja: "岡田 拓也 氏 / バックエンドエンジニア。クラウドソーシングで下請け受注を続けていたが、デザインスキルのなさから常に買い叩かれる状況に疲弊していた。",
      en: "Takuya O. / Backend Engineer. Took subcontract-only work via platforms, constantly undercut because of no design skills.",
    },
    despair: {
      ja: "「個人でシステムの裏側だけを受注していましたが、デザインスキルがないため、常に制作会社の下請けとして買い叩かれ、心身ともに疲弊していました。」",
      en: '"I only took backend subcontracts, and without design skills I was constantly undercut by agencies. It was exhausting mentally and physically."',
    },
    response: {
      ja: "「あるWebアプリの案件でDreamChaチームと偶然マッチングし、共に開発を遂行する機会を得ました。彼らの『初期費用0円・完全成果報酬』という姿勢と、デザイナーをファン化して上流から高単価案件を引っ張ってくるという戦略に計り知れない衝撃を受けました。」",
      en: '"A chance match on a web app project gave me my first look at how Dream-cha operated. Their zero-upfront, performance-based model and their strategy of turning designers into advocates — it was a revelation."',
    },
    future: {
      ja: "「案件を完遂した段階で、私の実力と貢献度を100%評価したクリーンな報酬分配を受け取りました。このチームの頭脳と仕組みがあれば、個人の技術者は孤独や安買いから解放されると確信し、その場でメンバーへの参加を志願しました。現在はコアチームのバックエンドを支える一員として、誇りを持って開発に挑んでいます。」",
      en: '"After completing the project I received a clean, 100% merit-based split. I was convinced this team could free any independent engineer from loneliness and low pay — and applied to join on the spot. I now proudly support the core team backend."',
    },
  },
  {
    id: "join-misaki",
    date: "2025.06",
    tag: { ja: "加入ストーリー", en: "Member Story" },
    title: {
      ja: "前払い外注リスクの恐怖から救われ、専属メンバーへの合流を決意した理由",
      en: "Rescued from the fear of upfront outsourcing risk — why I decided to join as a dedicated member",
    },
    intro: {
      ja: "高単価案件を前にバックエンド費用の立替リスクに怯えたデザイナーが、DreamChaの成果報酬モデルで初のフルパッケージ納品を成功させ、チームへ加入するまで。",
      en: "A designer paralysed by upfront outsourcing costs on a high-value project used Dream-cha's performance model to deliver her first full package — and never looked back.",
    },
    profile: {
      ja: "清水 美咲 氏 / Web・UIデザイナー。フリーランスとして活動中、高単価のフルパッケージ案件をバックエンドの知識不足と立替資金不足から断り続けていた。",
      en: "Misaki S. / Web & UI Designer. Freelancing, but repeatedly forced to decline high-value full-package projects due to backend knowledge gaps and no upfront budget.",
    },
    despair: {
      ja: "「エンドクライアントから独自決済とサブスク会員システムが必須の高単価案件を相談されましたが、バックエンドの知識がなく、企業に外注しようにも手元に数十万円の立替予算もありませんでした。本当に動くシステムが納品されるかも分からず、リスクに怯えて失注寸前でした。」",
      en: '"My client needed custom payments and a subscription system, but I had no backend knowledge and no budget to outsource upfront. I had no idea if anything would actually get built. I was about to lose the deal entirely."',
    },
    response: {
      ja: "「DreamChaに相談したところ、商談前の壁打ちからFigmaデータの解析まで、リスクゼロで並走してくれました。完全成果報酬制だったため、一円の身銭も切ることなく、無事クライアントへ完璧なフルパッケージを納品・検収まで繋ぐことができました。」",
      en: '"Dream-cha ran alongside me from pre-pitch brainstorming to Figma analysis, all at zero risk to me. With full performance-based payment, I delivered a complete package to my client without spending a single yen of my own."',
    },
    future: {
      ja: "「私のクリエイティブと立場を100%尊重し、最強のエンジンとして裏から支えてくれた恩義は忘れません。クリエイターをリスクから解放するという理念を、今度は自分が提供する側になりたいと考え、案件遂行後にチームへの加入を希望しました。デザインとバックエンドが等価に手を取り合う、最高の組織です。」",
      en: '"I\'ll never forget how they respected my creativity 100% and powered everything from behind. I wanted to be the one offering that to others — so I applied after the project. Design and backend as true equals. It\'s the best team I know."',
    },
  },
  {
    id: "figma-api",
    date: "2025.04",
    tag: { ja: "外部デザイナー事例", en: "Partner Story" },
    title: {
      ja: "Figmaを渡しただけ。複雑なAPI連携と顧客管理システムを丸投げして受注成功",
      en: "Just handed over the Figma. Complex API integration and CRM — fully delegated, project won",
    },
    intro: {
      ja: "デザインとフロントしか持たないチームが、美容サロンの予約×CRM連携という大規模案件をDreamChaへの丸投げで完遂した話。",
      en: "A design-and-frontend-only team tackled a large salon booking × CRM integration by delegating the entire backend to Dream-cha.",
    },
    profile: {
      ja: "長谷川 亮 氏 / Webディレクター 兼 デザイナー（独立2年目）。デザインとフロントコーディングは得意だが、バックエンド連携の経験がない。",
      en: "Ryo Hasegawa / Web Director & Designer (2nd year freelancing). Strong in design and frontend, no backend integration experience.",
    },
    despair: {
      ja: "「美容系サロンから、店舗予約システムと独自CRMを連携させた大規模サイト制作を依頼されました。自社にはデザインとフロントコーディングのスタッフしかおらず、システムの繋ぎ込みをどう処理すべきか分からず、諦める一歩手前でした。」",
      en: '"A beauty salon asked us to build a site connecting their booking system with a custom CRM. We only had design and frontend people — no idea how to handle the system integration. We were one step from giving up."',
    },
    response: {
      ja: "「DreamChaに相談したところ、こちらで制作したFigmaのデータを渡しただけで、裏側の複雑なAPI連携やDB最適化をすべてノイズレスに仕上げてくれました。窓口が1つで済むため、難解な専門用語をぶつけられることもなく、仕様の翻訳から実装までワンストップ。」",
      en: '"I passed them our Figma files and they handled every complex API connection and DB optimisation without any noise. One point of contact, no jargon, specification translation to implementation — completely seamless."',
    },
    future: {
      ja: "「納品した成果物を見たクライアントからは『ここまでスムーズに動くシステムは初めてだ』と大絶賛され、そのまま月額の保守運用契約まで獲得できました。デザインの領域には一切口出しせず、裏方に徹してくれる最高のパートナーです。」",
      en: '"The client said it was the smoothest system they\'d ever seen, and we walked away with a monthly maintenance retainer. They never touched our design — pure engine-room partners."',
    },
  },
  {
    id: "zero-budget",
    date: "2025.04",
    tag: { ja: "外部デザイナー事例", en: "Partner Story" },
    title: {
      ja: "初期費用0円・完全成果報酬だから踏み出せた、手元資金ゼロからの大逆転",
      en: "Zero upfront, full performance-based — how a designer with no budget landed a ¥2M project",
    },
    intro: {
      ja: "200万円の着手金見積もりに絶望した個人デザイナーが、成果報酬モデルで一円も払わずマッチングアプリを完成させた話。",
      en: "A solo designer facing a ¥2M upfront quote used Dream-cha's performance model to build a matching app without paying a single yen.",
    },
    profile: {
      ja: "佐々木 健太 氏 / フリーランスUIデザイナー（経験2年）。マッチングアプリのデザイン依頼を受けるも、バックエンド費用の工面ができず案件消化に頭を抱えていた。",
      en: "Kenta Sasaki / Freelance UI Designer (2 years). Received a matching app design brief but had no way to fund the backend costs.",
    },
    despair: {
      ja: "「マッチングアプリの設計と構築の相談を受けましたが、バックエンド開発のために他の開発企業から提示された見積もりは200万円。しかも着手金として前払いが必要でした。個人デザイナーの私にそんな予算があるはずもなく、案件を断るしかないと絶望していました。」",
      en: '"The backend quote from agencies came in at ¥2M — with upfront payment required. As a solo designer I had no such budget. I had no choice but to turn the project down. Or so I thought."',
    },
    response: {
      ja: "「DreamChaの『初期費用0円・完全成果報酬』というシステムに出会いました。クライアントから私に着金した段階での分配だったため、私の立替リスクは完全にゼロ。事前の契約書も非常にクリーンで、お金に関する不安が一切ない状態で開発を進めることができました。」",
      en: '"Dream-cha\'s zero-upfront, performance-based model changed everything. Payment only triggers when my client pays me — zero cash advance risk. The contract was clean and clear. I moved forward with zero financial anxiety."',
    },
    future: {
      ja: "「技術力の高さはもちろんですが、個人クリエイターの財布事情や心理的ハードルをここまで理解し、リスクを半分背負ってくれるチームは日本中どこを探しても他にありません。」",
      en: '"The technical quality is outstanding, but what\'s truly rare is a team that deeply understands the financial reality and psychological barriers of solo creatives — and shares the risk. There\'s no other team like this in Japan."',
    },
  },
  {
    id: "studio-backend",
    date: "2025.03",
    tag: { ja: "外部デザイナー事例", en: "Partner Story" },
    title: {
      ja: "STUDIOの仕様限界を突破。ノーコードに「強力なバックエンド」を宿す手法",
      en: "Breaking STUDIO's limits — how a no-code designer added a powerful backend to her workflow",
    },
    intro: {
      ja: "STUDIOメインの制作者が、ノーコードでは絶対に実装できない在庫基幹システムとのリアルタイム同期をDreamChaとの連携で実現した話。",
      en: "A STUDIO-first designer solved a real-time inventory sync requirement — impossible in no-code — by partnering with Dream-cha.",
    },
    profile: {
      ja: "伊藤 舞 氏 / ホームページ制作・STUDIOデザイナー。ノーコードツールをメインに制作するが、システム連携案件では毎回壁にぶつかっていた。",
      en: "Mai Ito / Homepage Creator & STUDIO Designer. Works mainly with no-code tools but hits a wall every time system integration is required.",
    },
    despair: {
      ja: "「クライアントから『社内の在庫基幹システムとWebサイトのデータをリアルタイムで自動同期させたい』という、ノーコードの仕様上どうしても実装不可な要件を突きつけられて困り果てていました。」",
      en: '"My client needed real-time auto-sync between their internal inventory system and the website. Completely impossible within no-code constraints. I had no idea what to do."',
    },
    response: {
      ja: "「DreamChaとパートナー契約を結んで案件に挑んだところ、彼らが外部に独自のバックエンドサーバー（AWS/Python）を構築し、STUDIOと基幹システムを安全に中継するAPIシステムを組んでくれました。私はいつも通りSTUDIOでのデザインとフロント実装に集中するだけでした。」",
      en: '"Dream-cha built a custom backend server on AWS with Python and created an API that safely bridged STUDIO and the inventory system. I just did what I always do — design and front-end in STUDIO."',
    },
    future: {
      ja: "「ノーコードの限界を遥かに超えたシステムサイトが完成。今では『バックエンドにもめちゃくちゃ強いデザイナー』として、競合の制作会社と相見積もりになっても100%勝てるようになりました。」",
      en: '"The result blew past every no-code limitation. Now I pitch myself as a designer with serious backend firepower — and I win every competitive quote against full agencies."',
    },
  },
];
