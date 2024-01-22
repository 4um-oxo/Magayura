document.addEventListener('DOMContentLoaded', (event) => {
    // 各ボタンとテキストのペアを定義
    var pairs = {
        'aboutButton': 'aboutText',
        'diveButton': 'diveText',
        'barButton': 'barText',
        'libraryButton': 'libraryText',
        'eventButton': 'eventText'
    };

    // ペアに対してイベントリスナーを設定
    for (var buttonId in pairs) {
        let textId = pairs[buttonId];
        document.getElementById(buttonId).addEventListener('mouseover', function() {
            document.getElementById(textId).style.display = 'block';
        });
        document.getElementById(buttonId).addEventListener('mouseout', function() {
            document.getElementById(textId).style.display = 'none';
        });
    }
});
