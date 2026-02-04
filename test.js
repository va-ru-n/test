        const emojis = ["😀", "😂", "😍", "🤔", "😎", "😭", "😡", "🎉", "🚀", "🌟"];
        const button = document.getElementById('generateBtn');
        const input = document.getElementById('emojiInput');

        button.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * emojis.length);
            input.value = emojis[randomIndex];
        });
