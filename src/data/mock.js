// Mock data for Satyam Ashtikar's Portfolio
// This is consumed by all frontend components. Backend integration later.

export const profile = {
  name: "Satyam Ashtikar",
  label: "IIT INDORE — B.TECH MECHANICAL ENGINEERING",
  bio:
    "Building production AI systems — voice agents, RAG pipelines, virtual try-on, and everything in between.",
  roles: [
    "Data Scientist Intern @ Stockhunt",
    "MLOps Intern @ Insurge AI",
    "Head of Machine Learning Domain @ GDG-IITI",
    "Co-Head @ Cynaptics(AI/ML Club)",
    "Open Source Contributor @ PyTorch",
    "Proficient in NLP, CV & Inference Optimization",
    "8+ Certified Courses",
    "AI/ML Enthusiast",
  ],
  resumeUrl: "#",
  socials: {
    github: "https://github.com/CoderSATTY",
    linkedin: "https://www.linkedin.com/in/satyam-ashtikar/",
    email: "sattyashtikar@gmail.com",
    leetcode: "https://leetcode.com/u/WhileTrueSatty/",
    codeforces: "https://codeforces.com/profile/Satty80085",
    deepml: "https://www.deep-ml.com/profile/F7UE7evmlJfuJ2ujaFYZgZI5PAJ2",
  },
};

export const stats = [
  { value: "02", label: "Internships" },
  { value: "15+", label: "Projects" },
  { value: "50+", label: "Deep-ML Solves" },
  { value: "300+", label: "CP Problems" },
  { value: "8+", label: "Certified Courses" },
];

export const stack = [
  {
    category: "Languages",
    items: ["Python", "C / C++", "TypeScript", "Linux"],
  },
  {
    category: "ML / AI",
    items: [
      "PyTorch", "LangChain", "LangGraph", "Diffusers", 
      "Transformers", "OpenCV", "Scikit-Learn", 
      "Keras", "HuggingFace", "NumPy", "Pandas"
    ],
  },
  {
    category: "Tools & Infrastructure",
    items: [
      "Docker",
      "GCP",
      "Modal",
      "Git",
      "FastAPI",
      "WebSockets",
      "LiveKit",
      "Nginx",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "Neo4j", "AuraDB", "ChromaDB", "Qdrant"],
  },
];

export const experience = [
  {
    id: "insurge",
    role: "ML & DevOps Intern",
    company: "Insurge AI",
    sub: "AI Sales Meeting Agent Platform",
    period: "Dec 2025 — Mar 2026",
    location: "Remote",
    certificate:
      "https://github.com/CoderSATTY/CoderSATTY/blob/main/credentials/insurge-certificate.png",
    description: "Worked at <b>Insurge AI</b> for <b>4 months</b> building scalable agentic pipelines and engineering real-time <b>Text-to-Speech and Speech-to-Text systems</b>",
    tags: ["GCP", "WebSockets", "LiveKit", "Kokoro TTS", "Silero VAD", "Python"],
  },
  {
    id: "stockhunt",
    role: "Data Scientist Intern",
    company: "Stockhunt INC.",
    sub: "AI & Algorithmic Trading Fintech",
    period: "May 2025 — Jul 2025",
    location: "Remote",
    certificate:
      "https://github.com/CoderSATTY/CoderSATTY/blob/main/credentials/StockHunt.png",
    description: "Worked at <b>Stockhunt INC</b> for <b>3 months</b> engineering <b>Attention and LSTM</b> time-series models and deploying rolling-forecast systems for high-frequency algorithmic trading.",
    tags: [
      "LSTM",
      "Attention",
      "Time Series",
      "Backtesting",
      "Sentiment Analysis",
      "WebSockets",
    ],
  },
];

export const projects = [
  {
    id: "attira",
    num: "01",
    title: "Attira AI",
    sub: "Virtual Try-On Pipeline",
    category: "Vision",
    period: "Apr 2025 — Jan 2026",
    description:
      "State-of-the-art virtual try-on surpassing commercial paid models. Agentic pipeline with FLUX Fill + Redux and a fine-tuned SegFormer B2. FP8 quantization cuts cold-starts 6× and halves VRAM.",
    image: "/imgs/attira.png",
    tags: ["PyTorch", "Diffusers", "LangGraph", "Modal", "Docker", "MongoDB"],
    links: [
      { label: "Website", url: "https://attira-nu.vercel.app" },
      { label: "Docs", url: "https://attira-nu.vercel.app/docs" },
      { label: "GitHub", url: "https://github.com/YashBhamare123/TryOnPort" },
    ],
  },
  {
    id: "causalflux",
    num: "02",
    title: "CausalFlux",
    sub: "Hybrid Graph RAG Pipeline",
    category: "RAG",
    period: "Oct 2025 — Dec 2025",
    description:
      "Causality-aware RAG pipeline to intelligently analyse customer service transcripts. Multi-hop reasoning via agentic system, PPR and cross-encoder reranking. Evaluated with BLEU, ROUGE, BERTScore.",
    image: "/imgs/causalflux.png",
    tags: ["Neo4j", "FastAPI", "ChromaDB", "Supabase", "Nginx"],
    links: [
      { label: "Demo", url: "https://www.youtube.com/watch?v=5CY9jB4rwU4" },
      { label: "GitHub", url: "https://github.com/ThunderBolt4931/Causal-Flux" },
    ],
  },
  {
    id: "cobot",
    num: "03",
    title: "Voice & Gesture Cobot",
    sub: "Visual Servoing on Addverb Syncro-5",
    category: "Vision",
    period: "Jan 2026 — Mar 2026",
    description:
      "YOLO + visual agents for real-time visual servoing on Addverb Syncro-5. Custom TCP/IP Python SDK bypassing ROS. Streaming ML via Hoeffding Tree for real-time gesture adaptation. Featured on Addverb blog.",
    image: "/imgs/cobot.png",
    tags: ["YOLO", "OpenCV", "Pyrealsense", "Python"],
    links: [
      {
        label: "Blog",
        url:
          "https://addverb.ai/blog/voice-and-gesture-control-on-a-cobot-iit-indore-addverb-syncro-5",
      },
      { label: "GitHub", url: "https://github.com/CoderSATTY/Cobot-processing" },
    ],
  },
  {
    id: "swipehire",
    num: "04",
    title: "SwipeHire",
    sub: "Tinder for Jobs · Gold · Hacksync 26",
    category: "Agents",
    description:
      "Tinder-style job reranking via semantic matching + OCR. Serverless Firebase backend and JobSpy MCP scraping. National hackathon Gold medalist.",
    image: "/imgs/swipehire.png",
    tags: ["Firebase", "OCR", "Semantic Search", "MCP", "React"],
    links: [
      { label: "Try Now", url: "https://swipehire-lime.vercel.app/" },
      { label: "GitHub", url: "https://github.com/CoderSATTY/Jobs-Tinder" },
    ],
  },
  {
    id: "voiz",
    num: "05",
    title: "Voiz AI",
    sub: "Voice-to-Voice Conversational Agent",
    category: "Voice",
    description:
      "End-to-end real-time voice conversation agent. Claude 3 as the reasoning core, Flask-SocketIO for bidirectional streaming audio, Google STT / TTS pipeline.",
    image: "/imgs/v2v.png",
    tags: ["Claude 3", "Flask-SocketIO", "Google STT/TTS", "Selenium"],
    links: [{ label: "GitHub", url: "https://github.com/CoderSATTY/Voice-to-Voice" }],
  },
  {
    id: "josh",
    num: "06",
    title: "Josh AI",
    sub: "JoSAA Counselling Assistant",
    category: "RAG",
    description:
      "RAG-based assistant for JEE / JoSAA college counselling. Answers seat-matrix, cutoff and branch queries in real time. Built with Cynaptics Club.",
    image: "/imgs/joshai.webp",
    tags: ["RAG", "Groq LLM", "FastAPI", "MongoDB"],
    links: [
      { label: "Website", url: "https://josh-ai-gilt.vercel.app" },
      { label: "GitHub", url: "https://github.com/YashBhamare123/JoSSA_Bot" },
    ],
  },
  {
    id: "assignment",
    num: "07",
    title: "Assignment Solver",
    sub: "Agents + Classroom MCP",
    category: "Agents",
    description:
      "Fully autonomous agentic system that reads, solves and submits assignments via Google Classroom MCP integration. End-to-end pipeline from fetch to submission.",
    image: "/imgs/assignment_solver.jpg",
    tags: ["AI Agents", "MCP", "Google Classroom", "Python"],
    links: [
      { label: "GitHub", url: "https://github.com/CoderSATTY/Assignment_solver" },
    ],
  },
  {
    id: "transformer",
    num: "08",
    title: "Transformer from Scratch",
    sub: "Attention Is All You Need",
    category: "Research",
    description:
      "Complete implementation of \"Attention Is All You Need\" from scratch in PyTorch — multi-head attention, positional encoding, full encoder-decoder stack.",
    image: "/imgs/transoformers_scratch.jpg",
    tags: ["PyTorch", "Transformers", "Attention", "Python"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/CoderSATTY/Transformer_from_Scratch",
      },
    ],
  },
  {
    id: "qresnet",
    num: "09",
    title: "Quantizing ResNets",
    sub: "INT8 / FP8 from Scratch",
    category: "Research",
    description:
      "Manual INT8 / FP8 quantization on ResNet architectures without library abstraction. Measures VRAM reduction and inference speedup from first principles.",
    image: "/imgs/resnet_scratch.jpg",
    tags: ["PyTorch", "Quantization", "ResNet", "INT8", "FP8"],
    links: [{ label: "GitHub", url: "https://github.com/CoderSATTY/Scratch-Q-Resnet" }],
  },
];

export const filters = ["All", "RAG", "Vision", "Voice", "Agents", "Research"];

export const openSource = {
  org: "PyTorch",
  blurb:
    "github.com/pytorch/pytorch — one of the world's largest open-source ML projects.",
  prs: [
    {
      id: "186269",
      status: "MERGED",
      title: "PR #186269 — Fixed missing no-op allocator guards",
      desc:
        "Fixed missing no-op allocator guards in torch.accelerator.memory — resolving RuntimeError crashes on uninitialised devices in reset_accumulated_memory_stats() and reset_peak_memory_stats() in torch/accelerator/memory.py.",
      url: "https://github.com/pytorch/pytorch/pull/186269",
    },
    {
      id: "186338",
      status: "IN REVIEW",
      title: "PR #186338 — Hardcoded CUDA fallback fix",
      desc:
        "Fixed hardcoded CUDA fallback in _snapshot() in torch/cuda/memory.py for better multi-accelerator support.",
      url: "https://github.com/pytorch/pytorch/pull/186338",
    },
  ],
};

export const achievements = [
  {
    id: "hacksync",
    rank: "GOLD",
    title: "Hacksync 26",
    sub: "SwipeHire — Tinder-style job app, Gold amongst 25+ teams.",
    links: [
      { label: "Try Now", url: "https://swipehire-lime.vercel.app/" },
      { label: "GitHub", url: "https://github.com/CoderSATTY/Jobs-Tinder" },
    ],
  },
  {
    id: "interiit",
    rank: "BRONZE",
    title: "Inter IIT Tech Meet 14.0 — Patna",
    sub: "9th overall in the Observe AI problem statement across all IITs.",
    links: [],
  },
  {
    id: "iitisoc",
    rank: "BRONZE",
    title: "IITISoC, IIT Indore — Edigen AI",
    sub: "Bronze among 100+ teams and 400+ participants.",
    links: [
      { label: "GitHub", url: "https://github.com/ThunderBolt4931/Edigen-AI" },
    ],
  },
  {
    id: "leetcomp",
    rank: "EXTENSION",
    title: "LeetComp AI — Chrome Extension",
    sub: "Industry-grade AI tutor extension with daily active users.",
    links: [
      {
        label: "Chrome Store",
        url:
          "https://chromewebstore.google.com/detail/dpmibfgdhdmhljnobomioehgbdmmepkd",
      },
      { label: "GitHub", url: "https://github.com/CoderSATTY/LeetComp" },
    ],
  },
];

export const cpStats = [
  {
    value: 300,
    suffix: "+",
    label: "CP Problems",
    handle: "@WhileTrueSatty",
    url: "https://leetcode.com/u/WhileTrueSatty/",
  },
  {
    value: 1220,
    suffix: "",
    label: "Codeforces (Pupil)",
    handle: "@Satty80085",
    url: "https://codeforces.com/profile/Satty80085",
  },
  {
    value: 50,
    suffix: "+",
    label: "Deep-ML Problems",
    handle: "@Satyam Ashtikar",
    url: "https://www.deep-ml.com/profile/F7UE7evmlJfuJ2ujaFYZgZI5PAJ2",
  },
  {
    value: 1095,
    suffix: "",
    label: "Deep-ML Flame Score",
    handle: "@F7UE7evml",
    url: "https://www.deep-ml.com/profile/F7UE7evmlJfuJ2ujaFYZgZI5PAJ2",
  },
];

export const certifications = [
  {
    title: "Neural Networks & Deep Learning",
    issuer: "DeepLearning.AI / Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/GPE820Z3C2AQ",
    img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~GPE820Z3C2AQ/1500_739.jpeg",
  },
  {
    title: "Attention in Transformers: PyTorch",
    issuer: "DeepLearning.AI",
    url: "https://learn.deeplearning.ai/accomplishments/e24b8f6a-a3b8-4f8e-9506-8a9fbcd4a073",
    img: "https://learn.deeplearning.ai/certificate/e24b8f6a-a3b8-4f8e-9506-8a9fbcd4a073/image",
  },
  {
    title: "MCP: Build Rich-Context AI Apps",
    issuer: "DeepLearning.AI",
    url: "https://learn.deeplearning.ai/accomplishments/699255b2-e6ab-45da-9db6-50742de596d4",
    img: "https://learn.deeplearning.ai/certificate/699255b2-e6ab-45da-9db6-50742de596d4/image",
  },
  {
    title: "Agentic Systems",
    issuer: "DeepLearning.AI",
    url: "https://learn.deeplearning.ai/accomplishments/62663cb7-0b4b-4001-98ca-6ad855d057c8",
    img: "https://learn.deeplearning.ai/certificate/62663cb7-0b4b-4001-98ca-6ad855d057c8/image",
  },
  {
    title: "Linear Algebra",
    issuer: "Deep-ML",
    url: "https://www.deep-ml.com/profile/F7UE7evmlJfuJ2ujaFYZgZI5PAJ2",
  },
  {
    title: "Attention Is All You Need",
    issuer: "Deep-ML",
    url: "https://www.deep-ml.com/profile/F7UE7evmlJfuJ2ujaFYZgZI5PAJ2",
  },
];

export const navLinks = [
  { id: "stack", label: "Stack", num: "01" },
  { id: "experience", label: "Experience", num: "02" },
  { id: "projects", label: "Projects", num: "03" },
  { id: "oss", label: "Open Source", num: "04" },
  { id: "achievements", label: "Achievements", num: "05" },
  { id: "certifications", label: "Certifications", num: "06" },
];
