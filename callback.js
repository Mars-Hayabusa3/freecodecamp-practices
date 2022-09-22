// 非 freeCodeCamp，來自鐵人賽文章
// https://ithelp.ithome.com.tw/articles/10192739

// mars註：先在 funcA 呼叫 callback，funcB 正常執行 sto
// 然後再讓 funcA 帶入 funcB，即可確保執行順序

// 為了確保先執行 funcA 再執行 funcB
// 我們在 funcA 加上 callback 參數
var funcA = function(callback){
    var i = Math.random() + 1;
  
    window.setTimeout(function(){
      console.log('function A');
  
      // 如果 callback 是個函式就呼叫它
      if( typeof callback === 'function' ){
        callback();
      }
  
    }, i * 1000);
  };
  
  var funcB = function(){
    var i = Math.random() + 1;
  
    window.setTimeout(function(){
      console.log('function B');
    }, i * 1000);
  };
  
  // 將 funcB 作為參數帶入 funcA()
  funcA( funcB );