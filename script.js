document.addEventListener('DOMContentLoaded', () => {

    // Theme Switcher
    const themeButtons = document.querySelectorAll('.theme-btn');
    const body = document.body;

    const applyTheme = (theme) => {
        body.setAttribute('data-theme', theme);
        themeButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-theme') === theme) {
                btn.classList.add('active');
            }
        });
        localStorage.setItem('theme', theme);
    };

    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-theme');
            applyTheme(theme);
        });
    });

    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Menu Hamburguer
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.main-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            const isExpanded = nav.classList.contains('active');
            hamburger.setAttribute('aria-expanded', isExpanded);
            // When opening the mobile nav, shift focus into it for keyboard users
            if (isExpanded) {
                const firstLink = nav.querySelector('a');
                if (firstLink) firstLink.focus();
            }
        });
    }

    // Accessible Dropdown
    const dropdowns = document.querySelectorAll('.has-dropdown');

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const dropdownMenu = dropdown.querySelector('.dropdown');
        dropdown.setAttribute('aria-expanded', 'false');
        if (dropdownMenu) dropdownMenu.setAttribute('aria-hidden', 'true');

        // Função para abrir o dropdown
        const openDropdown = () => {
            dropdownMenu.style.display = 'block';
            link.setAttribute('aria-expanded', 'true');
        };

        // Função para fechar o dropdown
        const closeDropdown = () => {
            dropdownMenu.style.display = 'none';
            link.setAttribute('aria-expanded', 'false');
        };

        // Abrir com clique para acessibilidade e mobile
        link.addEventListener('click', (e) => {
            // Previne a navegação se for apenas para abrir o menu
            if (window.innerWidth > 768) { 
                e.preventDefault();
            }
            const isExpanded = link.getAttribute('aria-expanded') === 'true';
            if (isExpanded) {
                closeDropdown();
            } else {
                openDropdown();
            }
        });

        // Fechar ao clicar fora
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                closeDropdown();
            }
        });

        // Fechar com a tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeDropdown();
                link.focus();
            }
        });

        // Keyboard support for dropdown toggles
        link.addEventListener('keydown', (e) => {
            // Enter or Space toggles
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const isExpanded = link.getAttribute('aria-expanded') === 'true';
                if (isExpanded) {
                    closeDropdown();
                } else {
                    openDropdown();
                    // Focus first menuitem
                    const firstItem = dropdownMenu && dropdownMenu.querySelector('[role="menuitem"]');
                    if (firstItem) firstItem.focus();
                }
            }

            // ArrowDown opens and focuses first item
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                openDropdown();
                const firstItem = dropdownMenu && dropdownMenu.querySelector('[role="menuitem"]');
                if (firstItem) firstItem.focus();
            }
        });

        // Make menu items keyboard-friendly (Escape to close)
        if (dropdownMenu) {
            const items = dropdownMenu.querySelectorAll('[role="menuitem"]');
            items.forEach(item => {
                item.setAttribute('tabindex', '0');
                item.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        closeDropdown();
                        link.focus();
                    }
                });
            });
        }
    });


    // Máscaras de formulário
    const cpfInput = document.querySelector('#cpf');
    if (cpfInput) {
        cpfInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            e.target.value = value;
        });
    }

    const telefoneInput = document.querySelector('#telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{2})(\d)/, '($1) $2');
            value = value.replace(/(\d{5})(\d)/, '$1-$2');
            e.target.value = value;
        });
    }

});