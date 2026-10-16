// ===== CONFIGURAÇÃO DA LOJA =====
const CONFIG = {
  nomeLoja: "Simples & Sofisticado",
  whatsapp: "5531999999999", // TROQUE: 55 + DDD + número, só dígitos
  logo: "logo"               // arquivo logo.png (ou .jpg etc.), SEM escrever a extensão
};

// ===== PRODUTOS =====
// "foto" é o nome do arquivo SEM a extensão. Ex.: foto "produto1" encontra produto1.jpg, produto1.jpeg, produto1.png ou produto1.webp
const PRODUTOS = [
  { id: 1, nome: "Produto exemplo 1", preco: 49.90,  descricao: "Descrição do produto 1.", foto: "produto1" },
  { id: 2, nome: "Jogo de soquete 46 peças", preco: 129.90, descricao: "Jogo completo de soquetes e acessórios com maleta.", foto: "produto2" },
  { id: 3, nome: "Produto exemplo 3", preco: 79.90,  descricao: "Descrição do produto 3.", foto: "produto3" },
  { id: 4, nome: "Produto exemplo 4", preco: 99.90,  descricao: "Descrição do produto 4.", foto: "produto4" },
  { id: 5, nome: "Kit Makita", preco: 599.90, descricao: "Kit de ferramentas Makita.", foto: "produto5" }
];
