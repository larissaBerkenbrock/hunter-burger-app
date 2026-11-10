# Hunter Burger — App de Pedidos

Aplicação web *mobile-first* para pedidos num restaurante de hambúrgueres, desenvolvida como projeto académico individual do curso de Desenvolvimento Web e Multimédia — Instituto Politécnico de Castelo Branco (ano letivo 2026/2027).

🔗 **Ver online:** https://larissaberkenbrock.github.io/hunter-burger-app

> ⚠️ Projeto académico **sem qualquer ligação oficial** ao restaurante Hunter Burger, que serviu apenas de inspiração. Nomes, imagens e preços são usados apenas para fins de estudo.

## Funcionalidades

- Cardápio organizado em separadores: **Burgers**, **Entradas** e **Milk Shakes**
- Escolha da quantidade de cada produto (botões + e −) e adição ao pedido
- Contador em cada produto com o total adicionado (toque no contador para o remover)
- Notificações (*toasts*) a confirmar cada ação
- Resumo do pedido numa janela modal, com indicação do **número da mesa**
- Validação: o pedido só é enviado se a mesa estiver preenchida
- Opção para limpar o pedido
- Botão para **ler o QR code da mesa** com a câmara (via plugin Cordova *barcodeScanner*)

> O leitor de QR code só funciona quando o projeto é compilado como app com **Apache Cordova**. Na versão online, a mesa é escrita manualmente.

## Tecnologias

- HTML5 e CSS3 (Flexbox)
- JavaScript com **jQuery**
- **Materialize CSS** (separadores, modal, toasts, botão flutuante)
- Apache Cordova (leitura de QR code)

## Estrutura
├── index.html # estrutura do app e cardápio
├── css/estilos.css # estilos personalizados
├── js/app.js # lógica do pedido
├── imagens/ # fotos dos produtos e logótipo
└── css/, js/, font/, icons/ # bibliotecas (Materialize, jQuery, ícones)


## Autora

Larissa Berkenbrock
