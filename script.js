// Variáveis globais
let currentReflection = 0;
const reflections = [
    {
        title: "O Sim de Maria",
        date: "Reflexão Diária",
        text: `O "sim" de Maria mudou a história da humanidade. Com sua aceitação humilde da vontade de Deus, 
               ela se tornou o instrumento através do qual a salvação chegou ao mundo. 
               Que possamos, como Maria, sempre dizer "sim" aos planos de Deus em nossas vidas.`,
        quote: "Eis aqui a serva do Senhor; faça-se em mim segundo a tua palavra. - Lucas 1:38"
    },
    {
        title: "Maria, Mãe da Esperança",
        date: "Meditação",
        text: `Nos momentos mais difíceis, Maria se manteve firme na esperança. 
               Mesmo diante da cruz, ela permaneceu ao lado de Jesus, sendo exemplo de fé inabalável. 
               Que Nossa Senhora nos ensine a confiar sempre na providência divina.`,
        quote: "Estava junto à cruz de Jesus sua mãe. - João 19:25"
    },
    {
        title: "O Coração Imaculado",
        date: "Contemplação",
        text: `O Coração Imaculado de Maria é refúgio seguro para todos os que buscam a santidade. 
               Nele encontramos o amor puro e maternal que nos conduz a Jesus. 
               Consagremo-nos a este Coração que tanto nos ama.`,
        quote: "E uma espada transpassará a tua própria alma. - Lucas 2:35"
    }
];

const prayers = {
    "ave-maria": {
        title: "Ave Maria",
        text: `
            <p>Ave Maria, cheia de graça,<br>
            o Senhor é convosco.<br>
            Bendita sois vós entre as mulheres,<br>
            e bendito é o fruto do vosso ventre, Jesus.</p>
            
            <p>Santa Maria, Mãe de Deus,<br>
            rogai por nós pecadores,<br>
            agora e na hora da nossa morte.<br>
            Amém.</p>
        `
    },
    "salve-rainha": {
        title: "Salve Rainha",
        text: `
            <p>Salve, Rainha, mãe de misericórdia,<br>
            vida, doçura e esperança nossa, salve!</p>
            
            <p>A vós bradamos, os degredados filhos de Eva;<br>
            a vós suspiramos, gemendo e chorando<br>
            neste vale de lágrimas.</p>
            
            <p>Eia, pois, advogada nossa,<br>
            esses vossos olhos misericordiosos<br>
            a nós volvei;</p>
            
            <p>e depois deste desterro<br>
            mostrai-nos Jesus,<br>
            bendito fruto do vosso ventre,<br>
            ó clemente, ó piedosa,<br>
            ó doce sempre Virgem Maria!</p>
            
            <p>Rogai por nós, Santa Mãe de Deus,<br>
            para que sejamos dignos das promessas de Cristo.<br>
            Amém.</p>
        `
    },
    "memorare": {
        title: "Memorare",
        text: `
            <p>Lembrai-vos, ó piíssima Virgem Maria,<br>
            que jamais se ouviu dizer<br>
            que alguém, recorrendo à vossa proteção,<br>
            implorando o vosso auxílio<br>
            e solicitando a vossa intercessão,<br>
            fosse por vós abandonado.</p>
            
            <p>Animado com esta confiança,<br>
            a vós recorro, ó Mãe,<br>
            Virgem das virgens;</p>
            
            <p>a vós venho e, gemendo<br>
            sob o peso dos meus pecados,<br>
            prostro-me aos vossos pés.</p>
            
            <p>Não desprezeis as minhas súplicas,<br>
            ó Mãe do Verbo Divino!<br>
            Mas ouvi-me propícia<br>
            e atendei-me.<br>
            Amém.</p>
        `
    }
};

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const modal = document.getElementById('prayerModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const closeModal = document.querySelector('.close');
const prevBtn = document.getElementById('prevReflection');
const nextBtn = document.getElementById('nextReflection');
const dots = document.querySelectorAll('.dot');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializePrayerModal();
    initializeReflections();
    initializeWhatsAppButtons();
    initializeChatGPTButtons();
    initializeFooterPrayerLinks();
    initializeScrollAnimations();
    initializeHeaderScroll();
});

// Navegação mobile
function initializeNavigation() {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Scroll suave para seções
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const offsetTop = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Modal de orações
function initializePrayerModal() {
    const prayerButtons = document.querySelectorAll('.btn-expand');
    
    prayerButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const prayerKey = btn.getAttribute('data-prayer');
            const prayer = prayers[prayerKey];
            
            if (prayer) {
                modalTitle.textContent = prayer.title;
                modalText.innerHTML = prayer.text;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Fechar modal
    closeModal.addEventListener('click', closeModalFunction);
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunction();
        }
    });

    // Fechar modal com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModalFunction();
        }
    });
}

function closeModalFunction() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Sistema de reflexões
function initializeReflections() {
    updateReflection();
    
    nextBtn.addEventListener('click', () => {
        currentReflection = (currentReflection + 1) % reflections.length;
        updateReflection();
    });
    
    prevBtn.addEventListener('click', () => {
        currentReflection = currentReflection === 0 ? reflections.length - 1 : currentReflection - 1;
        updateReflection();
    });
    
    // Navegação por dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentReflection = index;
            updateReflection();
        });
    });
    
    // Auto-play das reflexões (opcional)
    setInterval(() => {
        currentReflection = (currentReflection + 1) % reflections.length;
        updateReflection();
    }, 15000); // Muda a cada 15 segundos
}

function updateReflection() {
    const reflection = reflections[currentReflection];
    const reflectionCard = document.querySelector('.reflection-card');
    
    // Animação de fade out
    reflectionCard.style.opacity = '0';
    
    setTimeout(() => {
        // Atualizar conteúdo
        reflectionCard.querySelector('h3').textContent = reflection.title;
        reflectionCard.querySelector('.date').textContent = reflection.date;
        reflectionCard.querySelector('p').textContent = reflection.text;
        reflectionCard.querySelector('blockquote').textContent = reflection.quote;
        
        // Atualizar dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentReflection);
        });
        
        // Animação de fade in
        reflectionCard.style.opacity = '1';
    }, 300);
}

// WhatsApp Integration
function initializeWhatsAppButtons() {
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    const phoneNumber = '5519982891621'; // Formato internacional
    
    const messages = {
        oracao: 'Olá! Gostaria de compartilhar uma intenção de oração. 🙏',
        testemunho: 'Olá! Gostaria de compartilhar um testemunho sobre uma graça recebida. ❤️',
        duvida: 'Olá! Tenho uma dúvida espiritual e gostaria de conversar. 🤔',
        geral: 'Olá! Gostaria de entrar em contato sobre a devoção à Maria Mãe de Deus. ✨'
    };
    
    whatsappButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const messageType = btn.getAttribute('data-type');
            const message = messages[messageType] || messages.geral;
            
            // Criar URL do WhatsApp
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            // Adicionar efeito visual
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
            
            // Abrir WhatsApp
            window.open(whatsappUrl, '_blank');
            
            // Analytics (opcional)
            trackWhatsAppClick(messageType);
        });
    });
}

// Tracking para analytics (opcional)
function trackWhatsAppClick(messageType) {
    // Implementar tracking se necessário (Google Analytics, etc.)
    console.log(`WhatsApp clicked: ${messageType}`);
    
    // Exemplo com Google Analytics (se estiver implementado)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'whatsapp_click', {
            'message_type': messageType,
            'phone_number': '19982891621'
        });
    }
}

// ChatGPT Integration
function initializeChatGPTButtons() {
    const chatgptButtons = document.querySelectorAll('.btn-chatgpt');
    
    chatgptButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const prayerName = btn.getAttribute('data-prayer');
            
            // Criar URL do ChatGPT com prompt personalizado
            const prompt = `Me conte sobre a oração "${prayerName}" católica: sua origem, significado, quando e como rezar, e qual sua importância na devoção mariana.`;
            const chatgptUrl = `https://chat.openai.com/?q=${encodeURIComponent(prompt)}`;
            
            // Adicionar efeito visual
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
            
            // Abrir ChatGPT em nova aba
            window.open(chatgptUrl, '_blank');
            
            // Analytics (opcional)
            trackChatGPTClick(prayerName);
        });
    });
}

// Tracking para analytics do ChatGPT
function trackChatGPTClick(prayerName) {
    console.log(`ChatGPT search clicked: ${prayerName}`);
    
    // Exemplo com Google Analytics (se estiver implementado)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'chatgpt_search', {
            'prayer_name': prayerName,
            'search_type': 'prayer_research'
        });
    }
}

// Footer Prayer Links Integration
function initializeFooterPrayerLinks() {
    const footerPrayerLinks = document.querySelectorAll('.footer-prayer-link');
    
    footerPrayerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const prayerName = link.getAttribute('data-prayer');
            
            // Criar URL do ChatGPT com prompt personalizado para orações populares
            const prompt = `Me conte sobre a oração "${prayerName}" na tradição católica mariana: sua origem, como rezar, significado espiritual e importância na devoção à Nossa Senhora. Escreva a oração.`;
            const chatgptUrl = `https://chat.openai.com/?q=${encodeURIComponent(prompt)}`;
            
            // Adicionar efeito visual
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = '';
            }, 150);
            
            // Abrir ChatGPT em nova aba
            window.open(chatgptUrl, '_blank');
            
            // Analytics (opcional)
            trackFooterPrayerClick(prayerName);
        });
    });
}

// Tracking para analytics das orações do rodapé
function trackFooterPrayerClick(prayerName) {
    console.log(`Footer prayer search clicked: ${prayerName}`);
    
    // Exemplo com Google Analytics (se estiver implementado)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'footer_prayer_search', {
            'prayer_name': prayerName,
            'search_type': 'popular_prayer_research'
        });
    }
}

// Animações de scroll
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Adicionar classe fade-in aos elementos que devem ser animados
    const animatedElements = document.querySelectorAll('.about-item, .prayer-card, .contact-item');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Header transparente no scroll
function initializeHeaderScroll() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
}

// Animação do hamburger
hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    
    const bars = this.querySelectorAll('.bar');
    if (this.classList.contains('active')) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
});

// Scroll suave para o indicador de scroll
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    document.querySelector('#sobre').scrollIntoView({
        behavior: 'smooth'
    });
});

// Funcionalidade adicional para melhorar a experiência
document.addEventListener('DOMContentLoaded', function() {
    // Preload de imagens (se houver)
    preloadImages();
    
    // Inicializar tooltips (se necessário)
    initializeTooltips();
    
    // Keyboard navigation
    initializeKeyboardNavigation();
});

function preloadImages() {
    // Lista de imagens para preload
    const imageUrls = [
        // Adicione aqui URLs de imagens importantes
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

function initializeTooltips() {
    // Implementar tooltips se necessário
    const elementsWithTooltips = document.querySelectorAll('[data-tooltip]');
    
    elementsWithTooltips.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

function initializeKeyboardNavigation() {
    // Navegação por teclado para acessibilidade
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
}

function showTooltip(e) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = e.target.getAttribute('data-tooltip');
    document.body.appendChild(tooltip);
    
    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

// Performance monitoring
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        // Executar tarefas menos críticas quando o browser estiver idle
        console.log('Landing page carregada com sucesso');
    });
}

// Service Worker registration (para PWA futuro)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registrado:', registration);
            })
            .catch(registrationError => {
                console.log('SW falhou:', registrationError);
            });
    });
}
