// ts中寫js的類 演示用
(() => {
    //定義接口
    interface IPerson {
        firstName: string,
        lastName: string
    }

    //定義類型
    class Person {
        // 定義公共的屬性
        firstName:string;
        lastName:string;
        fullName:string

        // 定義構造器函數
        constructor(firstName:string, lastName:string) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + '_' + this.lastName;
        }
    }
    // 定義函數
    function showFullName(person: IPerson) {
        return person.firstName + '_' + person.lastName;
    }

    // 實例化對象
    const person = new Person('事後', '諸葛');
    console.log(showFullName(person));
})()