//! 接口是一種約束

(() => {
    //? 定義一個接口
    interface IPerson {
        firstName:string,
        lastName:string
    }
    // 輸出名字
    function showFullName(person: IPerson) {
        return person.firstName + '_' + person.lastName;
    }
    //定義一個對象
    const person = {
        firstName: '東方',
        lastName: '不敗'
    }
    console.log(showFullName(person));
})()