// 類型註解 是一種輕量級的為函數或變量添加的約束

(() => {
    function showMsg(str: string) {
        return '床前明月光，' + str;
    }
    let msg = '地上兩雙鞋';
    // let msg = [10, 20, 30];
    console.log(showMsg(msg));
})()