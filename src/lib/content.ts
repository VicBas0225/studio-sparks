// Dream-cha content — bilingual source of truth

export type Bi = { ja: string; en: string };

export type Member = {
  id: string;
  initials: string;
  tone: string;
  name: Bi;
  role: Bi;
  skills: string[];
  bio: Bi;
  quote: Bi;
};

export const team: Member[] = [
  {
    id: "backend",
    initials: "K",
    tone: "oklch(0.35 0.12 240 / 0.18)",
    name: { ja: "バックエンドエンジニア", en: "Backend Engineer" },
    role: { ja: "バックエンド・インフラ専門エンジニア", en: "Backend & Infrastructure Engineer" },
    skills: ["PHP / WordPress", "Python", "Go", "AWS", "決済API", "セキュリティ"],
    bio: {
      ja: "基幹システムの開発から AWS インフラ設計、決済 API 連携まで一手に担う。非エンジニアの言葉を仕様に翻訳し、手戻りのない設計を得意とする。",
      en: "Owns backend architecture, AWS infrastructure and payment API integration end-to-end. Translates non-technical intent into precise, low-rework specifications.",
    },
    quote: {
      ja: "「見えない裏側を、最も安全に、最も美しく組み上げます。システムの仕様で迷ったら商談前でもお気軽にご相談ください。」",
      en: "\"I build the invisible layer — safe, clean, and engineered to last. Reach out before the pitch if you're unsure about the spec.\"",
    },
  },
  {
    id: "designer",
    initials: "D",
    tone: "oklch(0.65 0.10 55 / 0.18)",
    name: { ja: "UI/UXデザイナー", en: "UI/UX Designer" },
    role: { ja: "UI/UXデザイナー 兼 フロントエンドエンジニア", en: "UI/UX Designer & Frontend Engineer" },
    skills: ["Figma", "Webデザイン", "HTML5 / CSS3", "JavaScript", "STUDIO", "Bubble"],
    bio: {
      ja: "Figma によるUI設計から HTML/CSS 実装、各種ノーコードツールまで幅広く対応。バックエンドエンジニアが組んだシステムを、エンドユーザーが最も使いやすいUIへ落とし込む。",
      en: "Covers UI design in Figma through to HTML/CSS implementation and no-code platforms. Translates the backend engineer's systems into interfaces users genuinely enjoy.",
    },
    quote: {
      ja: "「エンジニアが組んだ最高のシステムを、エンドユーザーが感動するUIへ。美しさと実装しやすさは両立できます。」",
      en: "\"The best backend deserves an interface users love. Beauty and implementability are not a trade-off.\"",
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
