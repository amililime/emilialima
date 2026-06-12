import type { Dict } from "../types";

const jp: Dict = {
  skipToContent: "本文へスキップ",
  nav: {
    primary: "メインナビゲーション",
    backToTop: "Emilia Lima — トップへ戻る",
    about: "プロフィール",
    work: "実績",
    contact: "お問い合わせ",
    language: "言語",
  },
  hero: {
    eyebrow: "フルスタックデベロッパー",
    name1: "Emilia",
    name2: "Lima",
    subtitle: "TypeScript, React, Next.js, Node.js.",
    viewWork: "実績を見る",
    getInTouch: "お問い合わせ",
    scroll: "スクロール",
  },
  about: {
    eyebrow: "I — プロフィール",
    title: "ささやかな自己紹介",
    paragraphs: [
      "テクノロジーで何を作れるか——その可能性にいつも心を動かされているソフトウェアデベロッパーです。好奇心と創造性を大切にしながら、文化の違いを超えて意味がきちんと届く瞬間に立ち会えたらと思っています。",
      "言語、コミュニケーション、そしてAI——この3つに特に惹かれています。難しい問題、なかでも「できない」と言われがちな課題に挑むのが好きです。",
      "コードを書いていない時は、ボルダリングをしたり、音楽をつくったり、本を読んだりしています。",
    ],
    portraitAlt: "Emilia Lima のポートレート",
    portraitCaption: "Emilia Lima · Montevideo, 2026",
    fields: {
      location: { label: "拠点", value: "Montevideo, Uruguay" },
      openTo: { label: "勤務形態", value: "ハイブリッド · リモート" },
      email: { label: "メール" },
      linkedin: { label: "LinkedIn" },
    },
  },
  skills: {
    eyebrow: "II — スキル",
    title: "ふだん使っている技術",
    groups: [
      {
        title: "フロントエンド開発",
        items: ["HTML", "CSS", "JavaScript", "React", "REST API"],
      },
      {
        title: "Web & CMS",
        items: ["WordPress", "SEO", "Web Performance", "Core Web Vitals"],
      },
      {
        title: "ローカライゼーションエンジニアリング",
        items: [
          "i18n",
          "翻訳ワークフロー",
          "LQA",
          "多言語QA",
          "UIテスト",
          "リリース検証",
        ],
      },
      {
        title: "データ & スクリプティング",
        items: ["Python", "SQL(基礎)"],
      },
      {
        title: "AIツール",
        items: ["Claude Code", "GenAI ワークフロー"],
      },
      {
        title: "ツール & プラットフォーム",
        items: [
          "Git",
          "Jira",
          "Figma",
          "Zendesk",
          "DevTools",
          "Google Workspace",
        ],
      },
      { title: "手法", items: ["Agile", "Scrum", "SAFe", "SDLC"] },
      {
        title: "言語",
        items: [
          "スペイン語(ネイティブ)",
          "英語(C2)",
          "ポルトガル語(C1)",
          "ドイツ語(B1)",
        ],
      },
    ],
  },
  experience: {
    eyebrow: "III — 職務経歴",
    title: "これまでのキャリア",
    jobs: [
      {
        company: "NinjaOne",
        location: "Berlin",
        span: "2023年10月 — 現在",
        roles: [
          {
            title: "Localization Web Developer",
            dates: "2025年3月 — 現在",
            body: "EMEA マーケティングのグロースを目的に、ninjaone.com の開発とローカライゼーションを8言語以上で一貫して担当。翻訳ワークフロー、多言語QA、リリース検証、SEO、Core Web Vitals を含むローカライゼーションパイプライン全体をリード。新人エンジニアのオンボーディングとメンタリングを行い、マーケティング、プロダクト、エンジニアリング、サポート、セールスと連携。",
          },
          {
            title: "Software Localization Engineer",
            dates: "2024年8月 — 2025年3月",
            body: "NinjaOne の SaaS プロダクトにおける UI ローカライゼーションと QA を複数言語で推進。プロダクトおよびエンジニアリングと連携し、翻訳ワークフロー、リリース検証、UI バグ修正を管理。",
          },
          {
            title: "Technical Support Engineer",
            dates: "2023年10月 — 2024年8月",
            body: "NinjaOne の SaaS エージェント(パッチ管理、MDM、ネットワーク監視、自動化)についてグローバルなお客様をサポート。ローカライゼーション領域を専門化し、エンジニアリングへ移行。",
          },
        ],
      },
      {
        company: "Frontend / Web Developer — フリーランス",
        location: "Amsterdam · Hamburg · Munich",
        span: "2022 — 2023",
        body: "HTML、CSS、JavaScript、React を用いて、個人クライアント向けにレスポンシブな Web サイトと UI コンポーネントを構築。REST API を統合し、UX/UI デザイナーと協業。リモート・Agile・Git ベース。",
      },
      {
        company: "IT Recruiter — Thaloz",
        location: "Montevideo, リモート",
        span: "2021年6月 — 9月",
        body: "Fintech 系クライアント向けにシニアソフトウェアエンジニアをグローバルで採用。技術スキルと英語力のスクリーニングを担当し、OKR により採用プロセスを最適化。",
      },
      {
        company: "Technical Support Analyst — Tata Consultancy Services",
        location: "Montevideo, リモート",
        span: "2020年7月 — 2021年6月",
        body: "Zendesk を通じてパナマと南アフリカの200名以上の従業員をテクニカルサポート。IT 運用プロセスを最適化し、Agile/Scrum 認定を取得。",
      },
      {
        company: "Technical Support Specialist — Amazon(Alorica 経由)",
        location: "Montevideo, リモート",
        span: "2019年3月 — 2020年11月",
        body: "米国のお客様向けにハードウェアおよびソフトウェアのトラブルシューティングを担当し、SLA 対応時間の18%短縮に貢献。カスタマーフィードバックチームをリードし、ユーザーの声をプロダクトおよびエンジニアリングに連携。",
      },
    ],
  },
  projects: {
    eyebrow: "IV — 主な実績",
    title: "じっくり紹介したい3つのプロジェクト",
    featured: "注目",
    no: "No.",
    items: [
      {
        title: "ninjaone.com — 多言語 Web プラットフォーム",
        org: "NinjaOne",
        span: "2023 — 現在",
        featured: true,
        body: "EMEA グロースを支える ninjaone.com を8言語以上でエンドツーエンドにオーナーシップ。開発とリリースサイクル全体の QA をカバー。",
        stack: ["React", "CMS", "i18n", "SEO", "Python", "Git"],
      },
      {
        title: "Gezellig Sessions — デジタル & 運営",
        org: "Berlin & Amsterdam",
        span: "2022 — 現在",
        featured: true,
        body: "ベルリンとアムステルダムを拠点とするブランドの戦略と運営を担当し、リビングルームでの小さな演奏会から象徴的な会場での公演までコンサートシリーズをスケール。ソーシャルメディア戦略を形にし、プロジェクトマネジメントをエンドツーエンドで遂行。ステークホルダーコミュニケーションを主導し、新人オンボーディングを構築、インターンチームをマネジメント — リモートを基本に、頻繁なオンサイト運営も実施。",
        stack: [
          "戦略",
          "コミュニケーション",
          "ソーシャルメディア",
          "プロジェクトマネジメント",
        ],
      },
      {
        title: "フリーランス Web プロジェクト",
        org: "Amsterdam · Hamburg · Munich",
        span: "2022 — 2023",
        body: "ヨーロッパ各地のクライアント向けに Web サイトおよびアプリケーションを構築。リモート、Agile、Git ベースのワークフロー。",
        stack: ["HTML", "CSS", "JavaScript", "React", "Node.js", "REST API"],
      },
    ],
  },
  volunteering: {
    eyebrow: "V — ボランティア",
    title: "仕事の外での活動",
    items: [
      {
        role: "戦略 & 運営",
        org: "Gezellig Sessions",
        location: "Berlin & Amsterdam",
        span: "継続中",
        body: "新進アーティストのためのコンサートシリーズを、親密なリビングルームコンサートから歴史的なコンサートホールまでスケールさせています。",
      },
      {
        role: "語学チューター",
        org: "The Poetry Project",
        location: "Berlin",
        span: "2024 — 現在",
        body: "移民および難民の言語習得をサポート。",
      },
      {
        role: "英語チューター",
        org: "Confident English",
        location: "Montevideo",
        span: "2019 — 2022",
        body: "子どもや低所得世帯を対象としたボランティア指導。",
      },
    ],
  },
  education: {
    eyebrow: "VI — 学歴 & 資格",
    title: "学んだ場所",
    educationHeading: "学歴",
    certificationsHeading: "資格",
    education: [
      {
        program: "学士課程",
        org: "Universidad de la República",
        span: "2019 — 2021",
        note: "途中まで — テック業界へ転向",
      },
      {
        program: "Data Science Path",
        org: "TechLabs Germany",
        span: "2023",
      },
      {
        program: "Front-End Development",
        org: "Altimetrik トレーニーシップ",
        span: "2023",
      },
    ],
    certifications: [
      { name: "Back-End Development", org: "Meta · Coursera", year: "2020" },
      {
        name: "Introduction to Databases",
        org: "Meta · Coursera",
        year: "2020",
      },
      {
        name: "Computational Thinking",
        org: "U Michigan · Coursera",
        year: "2020",
      },
      { name: "TEFL", org: "Cambridge", year: "" },
      { name: "TESOL", org: "University of Arizona", year: "" },
    ],
  },
  contact: {
    eyebrow: "VII — お問い合わせ",
    title: "お話ししましょう。",
    availability:
      "フルスタックのポジションを募集中 — Montevideo オンサイト · ハイブリッド · リモート。",
    nameLabel: "お名前",
    emailLabel: "メール",
    messageLabel: "メッセージ",
    helper: "メッセージは私のメールに直接届きます。",
    send: "送信",
    sending: "送信中…",
    sent: "メッセージを送信しました。近日中にご連絡いたします。",
    error: "送信できませんでした。もう一度お試しいただくか、直接メールをお送りください。",
  },
  footer: {
    locations: "Montevideo · Berlin",
  },
};

export default jp;
