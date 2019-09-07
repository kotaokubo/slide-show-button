// IDの取得
const img = document.getElementById("main_image");
const prevBtn = document.getElementById("prev");
const pageNum = document.getElementById("page");
const nextBtn = document.getElementById("next");

// 画像の配列を作成
var imgs = new Array('img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg');

// 現在の番号のステータスをもつ変数を作成
var current = null;

// ページ番号のデフォルト
pageNum.textContent = "1/" + imgs.length;

// next時のイベントハンドラ
nextBtn.addEventListener('click', function() {
    // ページ番号が最後の写真の時、最初のページ番号の写真に戻る
    if(current === (imgs.length - 1)) {
        // currentの値を0にする
        current = imgs.length - imgs.length;

        // 現在のindex番号の配列の要素をset
        img.setAttribute("src", imgs[current]);

        // ページ番号を表示
        pageNum.textContent = (current+1) + "/" + imgs.length;
    } else {
        // currentの値を1追加
        current += 1;
        
        // 現在のindex番号の配列の要素をset
        img.setAttribute("src", imgs[current]);

        // ページ番号を表示
        pageNum.textContent = (current+1) + "/" + imgs.length;
    }
})

// prev時のイベントハンドラ
prevBtn.addEventListener('click', function() {
    // ページ番号が最初の写真の時、最後のページ番号の写真を表示
    if (current === (imgs.length - imgs.length)) {
        // currentの値を配列の要素の最後にする
        current = imgs.length - 1;

        // 現在のindex番号の配列の要素をset
        img.setAttribute("src", imgs[current]);

        // ページ番号を表示
        pageNum.textContent = (current+1) + "/" + imgs.length;
    } else {
        // currentの値を1減らす
        current -= 1;

        // 現在のindex番号の配列の要素をset
        img.setAttribute("src", imgs[current]);
        
        // ページ番号を表示
        pageNum.textContent = (current+1) + "/" + imgs.length;
    }
})