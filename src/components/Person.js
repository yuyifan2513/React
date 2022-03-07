// 类如何定义

class Person {
    name = "lisi"
    constructor(name, age) {
        //this.name = name;
        this.age = age;
    }
    run() {
        console.log(this.name,this.age);
    }
    // 要求子类必须有哪个方法
    render() {
        throw new Error("子类必须实现render方法")
    }
}

class Man extends Person {
    constructor(name, age) {
        super(null,age) //父类的设置
        this.name = name; //子类的设置
    }
    run() {
        // 要走子类的方法
    }
    render() {}
}

// 实例化
new Person("zhangsan",22).run()
new Man("wangwu",20).run()