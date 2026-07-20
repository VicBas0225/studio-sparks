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
