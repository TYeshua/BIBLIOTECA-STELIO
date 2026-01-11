export interface Thought {
  id: number;
  content: string;
  style: 'serif-editorial' | 'manuscript-gold' | 'modern-deep';
  date: string;
}

export const thoughts: Thought[] = [
  {
    id: 1,
    style: 'serif-editorial',
    content: "A profundidade da teologia não se mede pela complexidade das palavras, mas pela simplicidade com que a verdade toca o coração. Quando olhamos para as Escrituras, não encontramos apenas um código de conduta, mas um mapa para a alma ferida encontrar o seu caminho de volta para casa. É no silêncio da meditação que as camadas do ego caem, revelando a assinatura divina em cada respiração nossa.",
    date: "Janeiro, 2026"
  },
  {
    id: 2,
    style: 'manuscript-gold',
    content: "Não existe fé sem o abandono das certezas humanas. A verdadeira entrega é um salto no escuro, onde a única luz é a promessa dAquele que chamou. É no deserto da espera que o caráter é forjado, e onde o bronze da nossa humanidade é transformado no ouro da santidade. Cada lágrima derramada no secreto é recolhida como uma semente de esperança para o amanhã.",
    date: "Fevereiro, 2026"
  },
  {
    id: 3,
    style: 'modern-deep',
    content: "O amor, em sua essência divina, é um fogo que consome tudo o que não é eterno. Ele não busca os seus próprios interesses, mas se derrama em sacrifício constante. Amar é morrer um pouco a cada dia para que o outro possa viver, é encontrar a plenitude não no receber, mas no entregar-se sem reservas, refletindo a imagem daquele que é o próprio Amor.",
    date: "Março, 2026"
  }
];
