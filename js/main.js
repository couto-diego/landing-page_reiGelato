// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Fecha o menu hamburguer ao clicar em um link
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (hamburger.classList.contains('active')) {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active'); // Fecha o menu móvel
    }

    // Rola suavemente para a seção
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return; // Garante que o elemento de destino exista

    const offset = 80; // Ajuste para o header fixo
    const targetPosition = targetElement.offsetTop - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

// Formulário de Contato via WhatsApp
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Validação básica
  const name = document.querySelector('#contact-form input[type="text"]').value.trim();
  const email = document.querySelector('#contact-form input[type="email"]').value.trim();
  const message = document.querySelector('#contact-form textarea').value.trim();

  if (!name || !email || !message) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Monta a mensagem do WhatsApp
  const whatsappMessage = `Olá, meu nome é ${name} (${email}). Minha mensagem: ${message}`;
  const whatsappLink = `https://wa.me/21995075199?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappLink, '_blank'); // Abre em uma nova janela

  // Limpa o formulário após o envio
  this.reset();
});

// Botões "Pedir Agora"
document.querySelectorAll('.cta-button').forEach(button => {
  button.addEventListener('click', function () {
    // Abre o WhatsApp com uma mensagem padrão
    const whatsappLink = 'https://wa.me/21995075199?text=Olá,%20gostaria%20de%20fazer%20um%20pedido!';
    window.open(whatsappLink, '_blank'); // Abre em uma nova janela
  });
});

// Menu Hamburguer
const hamburger = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  // Verifica se a largura da tela é menor ou igual a 768px
  if (window.innerWidth <= 768) {
    hamburger.classList.toggle('active'); // Alterna o estado do botão hambúrguer
    mobileMenu.classList.toggle('active'); // Alterna a visibilidade do menu móvel
  }
});

// Fecha o menu ao clicar fora
document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active'); // Oculta o menu móvel
  }
});

// Fecha o menu automaticamente ao redimensionar a tela
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active'); // Oculta o menu móvel
  }
});