export interface Book {
  id: number;
  title: string;
  description: string;
  pricePhysical: string; // Mantido para mostrar valor, mesmo sem checkout direto
  priceEbook: string;    // Mantido para mostrar valor
  coverUrl: string;
  amazonUrl: string; // Link genérico (fallback)
  buyLinkPhysical?: string; // Novo (Opcional)
  buyLinkEbook?: string;    // Novo (Opcional)
  samplePdfUrl: string | null;
  format: string; // "eBook Kindle", "Capa Comum", etc
  isFeatured: boolean;
}

export const booksData: Book[] = [
  {
    id: 1,
    title: "Segredos do Casamento",
    description: "Entrego este livro a você para que seja lido com a leveza de um café da tarde. Meu desejo é que, preferencialmente ao lado de quem você ama, estas páginas revelem a importância sagrada do casamento diante de Deus. Aproveite cada diálogo aqui como um momento de aconchego e aprofundamento para a sua união.",
    pricePhysical: "R$ 49,90",
    priceEbook: "R$ 24,90",
    coverUrl: "./casamento.png",
    amazonUrl: "https://www.amazon.com.br/dp/B0GF38MN2L",
    buyLinkPhysical: "https://www.amazon.com.br/dp/B0GF38MN2L",
    buyLinkEbook: "https://www.amazon.com.br/dp/B0GF38MN2L",
    samplePdfUrl: "/amostra_segredos.pdf",
    format: "Capa Comum & Kindle",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Hermenêutica Bíblica",
    description: "A hermenêutica bíblica busca compreender os princípios da interpretação das Escrituras, reconhecendo a Bíblia como uma coleção de livros sagrados e inspirados que se explicam mutuamente, revelando diferentes aspectos da verdade em harmonia. Inserida no campo da filosofia, a hermenêutica trata da teoria e da prática da interpretação, abrangendo tanto a arte quanto o treino interpretativo, e tradicionalmente se dedica ao estudo de textos escritos, especialmente nas áreas de literatura, religião e direito.",
    pricePhysical: "R$ ----",
    priceEbook: "R$ ----",
    coverUrl: "./hermeneutica.png",
    amazonUrl: "https://www.amazon.com.br/dp/B0GF36VN6J",
    buyLinkPhysical: "https://www.amazon.com.br/dp/B0GF36VN6J",
    buyLinkEbook: "https://www.amazon.com.br/dp/B0GF36VN6J",
    samplePdfUrl: "/amostra_hermeneutica.pdf",
    format: "Capa Comum",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Redação",
    description: "O livro sobre redação dissertativa-argumentativa para o Enem apresenta-se como uma obra de leitura simples, mas de resultados complexos, capaz de revelar novas perspectivas a cada releitura e de transformar a forma como o estudante aprende. Ele enfatiza que a repetição é essencial para o aprendizado e que, ao se dedicar seriamente ao estudo, o aluno desenvolverá autoconfiança, motivação e estratégias eficazes, como concentração, leitura eficiente, raciocínio lógico, intuição, anotações inteligentes e técnicas de memorização, tornando-se apto a alcançar melhores resultados com menos esforço.",
    pricePhysical: "R$ ----",
    priceEbook: "R$ ----",
    coverUrl: "./redacao.png",
    amazonUrl: "https://www.amazon.com.br/dp/B0GG56DTYW",
    buyLinkPhysical: "https://www.amazon.com.br/dp/B0GG56DTYW",
    buyLinkEbook: "https://www.amazon.com.br/dp/B0GG56DTYW",
    samplePdfUrl: "/amostra_redacao.pdf",
    format: "Material Didático",
    isFeatured: false,
  },
];
