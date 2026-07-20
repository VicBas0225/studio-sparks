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
};

export const caseStudies: CaseStudy[] = [
  {
    id: "paid-video",
    year: "2025",
    category: { ja: "会員限定コンテンツ配信", en: "Members-only Video Platform" },
    title: {
      ja: "有料動画配信サイト × サブスク決済",
      en: "Paid Video Streaming & Subscription Payments",
    },
    before: {
      ja: "デザインと WordPress の実装はできるが、サブスク決済（Stripe）と動画の不正ダウンロード防止セキュリティが組めず、30万円の案件を諦めかけていた。",
      en: "The designer could build the UI and WordPress layer but had no path to Stripe subscriptions or video DRM — a ¥300k project nearly lost.",
    },
    solution: {
      ja: "デザイナー様の世界観を100%活かしたまま、バックエンド側で Vimeo API と Stripe を連携したセキュアな会員システムを構築。",
      en: "We preserved the designer's visual identity 100% while building a secure membership system wiring Vimeo API and Stripe on the backend.",
    },
    result: {
      ja: "フルパッケージ案件（総額80万円）として受注に成功。技術由来の手戻りゼロ。",
      en: "Won as a full-package deal at ¥800k total. Zero technical rework throughout.",
    },
    stack: ["WordPress", "PHP", "Stripe", "Vimeo API", "AWS EC2"],
    metrics: [
      { label: { ja: "受注単価向上", en: "Revenue lift" }, value: "2.6×" },
      { label: { ja: "技術的手戻り", en: "Tech rework" }, value: "0" },
      { label: { ja: "リリース期間", en: "Time to launch" }, value: "5 wks" },
    ],
    hue: "oklch(0.50 0.14 240)",
  },
  {
    id: "bubble-api",
    year: "2025",
    category: { ja: "ノーコード × 外部API連携", en: "No-code × External API Integration" },
    title: {
      ja: "Bubble マッチングアプリ × 基幹システム連携",
      en: "Bubble Matching App × Legacy System Integration",
    },
    before: {
      ja: "ノーコード（Bubble）の標準機能だけでは、クライアントが希望する基幹システムとのリアルタイム連携ができず、実装不可で失注寸前だった。",
      en: "Bubble's native capabilities couldn't handle the client's required real-time sync with a legacy inventory system — the project was about to be lost.",
    },
    solution: {
      ja: "バックエンド（Python / AWS Lambda）で中継用 API を独自開発。Bubble と既存システムを安全かつリアルタイムに同期させた。",
      en: "We built a custom relay API in Python on AWS Lambda to safely bridge Bubble with the legacy system in real time.",
    },
    result: {
      ja: "すべての開発要件をクリアし、無事検収完了。ノーコードの限界を技術で突破し、案件を守った。",
      en: "All requirements met, project accepted. The no-code ceiling was broken with custom backend code, saving the deal.",
    },
    stack: ["Bubble", "Python", "AWS Lambda", "REST API", "PostgreSQL"],
    metrics: [
      { label: { ja: "失注リスク回避", en: "Lost deal saved" }, value: "✓" },
      { label: { ja: "連携レイテンシ", en: "Sync latency" }, value: "<200ms" },
      { label: { ja: "検収", en: "Accepted" }, value: "100%" },
    ],
    hue: "oklch(0.45 0.12 160)",
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
    id: "designer-100man",
    date: "2025.05",
    tag: { ja: "お客様の声", en: "Client Story" },
    title: {
      ja: "「前払いナシで本当に動いてくれた」— フリーランスデザイナーAさんが初の100万円超え案件を獲得するまで",
      en: '"No upfront — and they actually delivered" — How freelance designer A landed her first ¥1M+ project',
    },
    intro: {
      ja: "WordPressのカスタマイズは得意だけど、決済機能は怖い。そんなAさんが Dream-cha を見つけて案件を一変させるまでのリアルな話。",
      en: "Strong at WordPress, terrified of payment backends. Here's how A's project changed once she found Dream-cha.",
    },
    profile: {
      ja: "Webデザイナー歴3年。主にWordPressで中小企業のサイト制作を受注。月単価20〜30万円が続いていた。",
      en: "3 years as a web designer. Mostly WordPress sites for SMBs. Monthly billings stuck around ¥200–300k.",
    },
    despair: {
      ja: "「会員サイトを作ってほしい。決済もStripeで」とクライアントに言われた時、正直頭が真っ白になりました。他の外注先に聞いたら70万円の見積もりで、クライアントの予算には合わなくて……」",
      en: '"When my client said they wanted a membership site with Stripe payments, I went blank. A quote from another dev came in at ¥700k — way over budget."',
    },
    response: {
      ja: "「LINEで相談したら、30分で仕様の方向性が出てきて驚きました。成果報酬なので、私の手出しはゼロ。バックエンドは全部Dream-chaさんに任せて、私はデザインだけに集中できました。」",
      en: '"A 30-minute LINE chat and we had a direction. Zero upfront from me — all backend handled by Dream-cha, so I could focus purely on design."',
    },
    future: {
      ja: "「総額110万円で検収完了。クライアントに大満足してもらえて、今は継続案件も2本走っています。もうシステム案件を怖がる必要がなくなりました。」",
      en: '"Project signed off at ¥1.1M total. Client loved it, and I now have two ongoing retainers. I\'m not scared of system projects anymore."',
    },
  },
  {
    id: "emergency-bug",
    date: "2025.03",
    tag: { ja: "緊急対応事例", en: "Emergency Case" },
    title: {
      ja: "WordPressが画面真っ白に……深夜の緊急バグをバックエンドのプロが30分で救出した話",
      en: "WordPress white screen at midnight — how a backend pro fixed a critical bug in 30 minutes",
    },
    intro: {
      ja: "本番サイトが突然クラッシュ。自分では直せない、でも翌朝9時には締め切りがある。そんな夜に届いた1本のLINEから始まった話。",
      en: "Production site down. Can't fix it myself. Deadline at 9am. The story that started with one LINE message late at night.",
    },
    profile: {
      ja: "ノーコードディレクター歴2年。STUDIOとBubbleを使った制作が得意で、WordPressは「なんとかなる程度」の使い手。",
      en: "2 years as a no-code director. Comfortable with STUDIO and Bubble, WordPress knowledge limited to 'just enough'.",
    },
    despair: {
      ja: "「プラグインの更新後に画面が真っ白になって、FTPもよく分からなくて、本当にパニックでした。翌朝クライアントにデモがあって……」",
      en: '"After a plugin update the whole site went white. I barely know FTP. Full panic — client demo at 9am next morning."',
    },
    response: {
      ja: "「深夜0時にLINEを送ったら、15分後には繋いでもらえて。サーバーのエラーログを確認してもらったら、プラグインの競合が原因だとすぐ特定。30分で完全復旧しました。」",
      en: '"Sent a LINE at midnight, got a reply in 15 minutes. Server error logs identified a plugin conflict immediately. Fully restored in 30 minutes."',
    },
    future: {
      ja: "「以来、新規案件はすべてDream-chaさんと組んでいます。自分一人では取れなかった受注が、今は普通に取れるようになりました。」",
      en: '"Every new project since has been with Dream-cha. I\'m winning work I could never have taken on alone."',
    },
  },
];
