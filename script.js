// script.js
// Ce fichier contient le code JavaScript pour ajouter des interactions au mini-site UNFPA.

document.addEventListener('DOMContentLoaded', () => {
    console.log("Le script.js est bien chargé et les interactions sont prêtes !");

    // --- 1. Implémentation du Menu Burger pour Mobile ---
    // Sélectionne le bouton du menu burger et la liste de navigation.
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.main-nav .nav-list');

    // Vérifie si les éléments existent avant d'ajouter l'écouteur d'événements.
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            // Bascule la classe 'active' sur la liste de navigation pour afficher/masquer le menu.
            navList.classList.toggle('active');
            // Bascule une classe pour changer l'icône du menu burger (optionnel, pour des animations CSS)
            menuToggle.classList.toggle('active');
        });

        // Ferme le menu si un lien est cliqué (utile pour les SPAs ou les menus ancrés)
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });
    }

    // --- 2. Implémentation du Carrousel d'Images (simple, sans images réelles) ---
    // Sélectionne les éléments nécessaires pour le carrousel.
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        const slides = carouselContainer.querySelectorAll('.carousel-slide');
        const prevButton = document.querySelector('.carousel-prev');
        const nextButton = document.querySelector('.carousel-next');
        let currentSlide = 0;
        let slideInterval; // Variable pour le défilement automatique

        // Fonction pour afficher une diapositive spécifique
        const showSlide = (index) => {
            slides.forEach((slide, i) => {
                slide.style.display = (i === index) ? 'block' : 'none';
            });
        };

        // Fonction pour passer à la diapositive suivante
        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        };

        // Fonction pour passer à la diapositive précédente
        const prevSlide = () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        };

        // Initialise le carrousel
        showSlide(currentSlide);

        // Ajoute les écouteurs d'événements pour les boutons de navigation
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                clearInterval(slideInterval); // Arrête le défilement automatique lors de l'interaction manuelle
                prevSlide();
                startSlideShow(); // Redémarre le défilement automatique
            });
        }
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                clearInterval(slideInterval);
                nextSlide();
                startSlideShow();
            });
        }

        // Fonction pour démarrer le défilement automatique
        const startSlideShow = () => {
            slideInterval = setInterval(nextSlide, 5000); // Change de diapositive toutes les 5 secondes
        };

        // Démarre le défilement automatique au chargement de la page
        startSlideShow();
    }

    // --- 3. Effets de Scroll Animés (révélation d'éléments) ---
    // Sélectionne tous les éléments qui doivent apparaître avec un effet de scroll.
    const scrollRevealElements = document.querySelectorAll('.section-content, .card');

    // Options pour l'Intersection Observer
    const observerOptions = {
        root: null, // L'élément racine est le viewport
        rootMargin: '0px',
        threshold: 0.1 // L'élément est visible à 10%
    };

    // Callback exécuté lorsque l'observateur détecte des changements de visibilité
    const scrollObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si l'élément est visible, ajoute la classe 'fade-in'
                entry.target.classList.add('fade-in');
                // Cesse d'observer l'élément une fois qu'il est apparu
                observer.unobserve(entry.target);
            }
        });
    };

    // Crée un Intersection Observer
    const observer = new IntersectionObserver(scrollObserverCallback, observerOptions);

    // Initialise les éléments comme étant invisibles (pour l'animation CSS)
    scrollRevealElements.forEach(el => {
        el.classList.add('fade-out-init'); // Classe pour l'état initial invisible
        observer.observe(el); // Commence à observer chaque élément
    });
});
