document.querySelector("img").addEventListener("click", function(){
    this.src = "spiki_cry.webp";
    this.alt = "スピッキーが泣いている";
    
    // 画像変更を確定させてからアラートを表示
    setTimeout(() => {
        alert("スピッキーを押さないでください！");
    }, 20);
});