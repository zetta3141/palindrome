// reverse()メソッドを追加してすべてのStringで使えるようにする
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// blank()メソッドを追加してすべてのStringで使えるようにする
String.prototype.blank = function() {
  return !!this.match(/^\s+$/);
}

// 配列の末尾にある要素を返す
Array.prototype.last = function() {
  return this.slice(-1)[0];
}

// Phraseオブジェクトを定義する
function Phrase(content) {
  this.content = content;

  // パリンドロームのテスト用に変換した訳文を返す
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  // パリンドロームならtrueを、違うならfalseを返す
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}
