function toggleMode(mode) {
    const body = document.body;

    if (mode === 'dark') {
        // Запрашиваем подтверждение для перехода в тёмный режим
        let confirmDark = confirm('Вы хотите переключиться на тёмный режим?');
        if (confirmDark) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        }
    } else if (mode === 'light') {
        // Запрашиваем подтверждение для перехода в светлый режим
        let confirmLight = confirm('Вы хотите переключиться на светлый режим?');
        if (confirmLight) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        }
    }
}
