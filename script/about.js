document.addEventListener('DOMContentLoaded', (event) => {
    var pairs = {
        'aboutButton': 'aboutText',
        'diveButton': 'diveText',
        'barButton': 'barText',
        'libraryButton': 'libraryText',
        'eventButton': 'eventText'
    };

    for (var buttonId in pairs) {
        let textId = pairs[buttonId];
        document.getElementById(buttonId).addEventListener('mouseover', function() {
            let element = document.getElementById(textId);
            element.style.display = 'block';
            setTimeout(() => { element.style.opacity = 1; element.style.transform = 'translateY(0)'; }, 10);
        });
        document.getElementById(buttonId).addEventListener('mouseout', function() {
            let element = document.getElementById(textId);
            element.style.opacity = 0;
            element.style.transform = 'translateY(-20px)';
            setTimeout(() => { element.style.display = 'none'; }, 150); // アニメーション終了後に非表示
        });
    }
});
