import type { ReactNode } from "react";

interface FaqItem {
  value: string;
  trigger: string;
  content: string | ReactNode;
}

const faqItems: FaqItem[] = [
  {
    value: "stack",
    trigger: "Stack principal hoje?",
    content:
      "Next.js/React + TypeScript. Back: Node (Fastify/Express), Postgres + Prisma. Docker quando preciso padronizar ambiente e deploy.",
  },
  {
    value: "perfil",
    trigger: "Você é mais front ou full-stack?",
    content:
      "Full-stack, mas meu ponto forte é front (UI, estados, UX). No back eu faço APIs, auth, integrações e banco sem inventar moda.",
  },
  {
    value: "dia-a-dia",
    trigger: "Como você trabalha no dia a dia?",
    content:
      "Eu foco em entender o objetivo e as restrições primeiro. Depois eu quebro o problema em camadas, desenho no Excalidraw e organizo decisões/tarefas no Notion. Com isso eu consigo enxergar a estrutura, o que dá pra adaptar e seguir implementando com menos retrabalho.",
  },

  {
    value: "aprendizado",
    trigger: "Você continua aprendendo novas tecnologias?",
    content:
      "Sim. Eu estudo continuamente e tento aplicar em projetos reais (mesmo que pequenos): deploy/CI, performance e boas práticas . Quando algo entra no meu stack, eu documento no README e deixo reproduzível.",
  },
  {
    value: "ia",
    trigger: "Você usa IA no dia a dia?",
    content:
      "Sim, mas como assistente: autocomplete, acelerar tarefas repetitivas e rascunhar coisas simples. Hoje eu uso Cursor no editor, Perplexity pra pesquisa rápida e Gemini (Nano Banana Pro) pra gerar/ajustar assets quando preciso.",
  },
  {
    value: "performance",
    trigger: "Você se preocupa com performance?",
    content:
      "Sim. Eu olho renderizações desnecessárias, tamanho de bundle, imagens (lazy/format) e o básico do Lighthouse. Se tá pesado no mobile, eu trato como bug.",
  },

  {
    value: "frameworks",
    trigger: "Como você escolhe frameworks no meio de tanta coisa?",
    content:
      "Eu escolho por caso de uso e performance, não por hype. Pra apps bem interativos eu fico no Next.js; pra páginas com pouca interação (ex: explicação dos projetos), eu prefiro Astro pra manter o JavaScript baixo e hidratar só o necessário.",
  },
];

export { faqItems };
