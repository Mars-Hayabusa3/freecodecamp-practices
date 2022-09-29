// MDN的範例

'use strict';
var promiseCount = 0;

function testPromise() {
    let thisPromiseCount = ++promiseCount;

    let log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Started (<small>Sync code started</small>)<br/>'); // 第一行

    // 建立一個新的 promise：此 promise 承諾一個數值計數, 由 1 開始（等待約 2 秒）
    let p1 = new Promise(
        // 這個解決器函數（resolver function）呼叫實現或
        // 拒絕 promise。
        (resolve, reject) => {
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Promise started (<small>Async code started</small>)<br/>'); // 第二行
            // 在此例子單純用來產生非同步特性。
            window.setTimeout(
                function() {
                    // 實現這個 promise!
                    resolve(thisPromiseCount);
                }, Math.random() * 2000 + 1000);
        }
    );

    // 接著透過呼叫 then() 來決定 promise 進入 resolved 時，要透過 then() 做什麼，
    // 或是進入 rejected 時，要透過 catch() 方法要做什麼。
    p1.then(
        // 印出實現值（fulfillment value）
        function(val) {
            log.insertAdjacentHTML('beforeend', val +
                ') Promise fulfilled (<small>Async code terminated</small>)<br/>'); // 第四行，因為是 promise then 的內容
        })
    .catch(
        // 印出失敗訊息（rejection reason）
        (reason) => {
            console.log('Handle rejected promise ('+reason+') here.');
        });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Promise made (<small>Sync code terminated</small>)<br/>'); // 第三行，不待 promise 完成 需要先執行
}

// 在 window 裡面顯現
if ("Promise" in window) {
    let btn = document.getElementById("btn");
    btn.addEventListener("click",testPromise);
  } else {
    log = document.getElementById('log');
    log.innerHTML = "Live example not available as your browser doesn't support the <code>Promise<code> interface.";
  }
