//1.let使用，class使用，解构赋值(函数参数,返回值),默认参数
class Human {
  constructor({name, sex, age='15'}) {
    this.name = name;
    this.sex = sex;
    this.age = age;
  }
  greet() {
    console.log("大咖吼，我是渣渣辉");
  }
}
//2.测试默认参数（age）
//解构赋值，创建实例
//写法一、
// let config={
//     name:'xiaoli',
//     sex:'male'
// }
// let xiaoli = new Human(config);
//写法二、
let xiaoli = new Human({name:'xiaoli',sex:'male'});
console.log(`${xiaoli.name}的年龄未设置，默认值为：${xiaoli.age}`);
xiaoli.greet();

//3.解构赋值-函数返回值
function changeName() {
  return {
    name:'xiaoming',
    sex:'female',
    age:'20',
  };
}
xiaoli=changeName();
console.log(`小李改名为：${xiaoli.name}`);
//4.class继承,promise函数
class Student extends Human{
  constructor({name, sex, age='15',score='60'}) {
    super({name,sex,age});
    this.score=score;
  }
  sendHomework(){
    let homework= new Promise((res,rej)=>{
      setTimeout(() => {
         rej('交是不可能交的，这辈子都不会交了');
      },2000);
    });
    return homework;
  }
}

let Student1={
  name:'xiaohong',
  sex:'famale',
  score:"99"
}
const xiaohong=new Student(Student1);//如果是非对象，更改的话会报错：TypeError: Assignment to constant variable.

xiaohong.sendHomework().then(res=>{
  if(res){                                         //fulfilled(已成功)状态
    console.log(`sendHomework的res参数：${res}`);
    console.log(`回调函数then的log：我真的交啦！`);  
  }else{                                          //
    console.log(`还在写啦，马上写完！`);
  }
}).catch(rej=>{                                   //rejected（已失败）状态
  console.log(`sendHomework的rej参数：${rej}`);
})


//5.字符串扩展-includes()、startsWith()、endsWidth()、repeat()
let greet="hello boys and girls ";
console.log(greet.startsWith('hello'));
console.log(greet.endsWith('!'));
console.log(greet.includes('s'));
console.log(`重复greet2次：${greet.repeat(2)}`)

//6.rest参数,解构赋值-函数返回值
let ages=(...Students)=>{
    let sumage=0;
    Students.forEach(stu=>{
      sumage+=Number(stu.age);
  });
  let aveage=0;
    aveage=sumage/Number(Students.length);
  
  return {sumage,aveage};
}

let stuAge={
  sumage:'0',
  aveage:'0',
}
stuAge=ages(xiaohong,xiaoli);
console.log(`年龄合为：${stuAge.sumage}`);
console.log(`平均年龄为：${stuAge.aveage}`);

//7.数组扩展-扩展运算（反rest）、find()、findIndex()、includes()
let search=(...Students)=>{
    let stuFind=Students.find(stu=>stu.age=='20')
    let stuFindIndex=Students.findIndex(stu=>stu.age=='20');
    // let stuIncludes=Students.includes();    includes()检索单条数组;
    console.log("年龄为20的学生：\n")
    console.log(stuFind);
    console.log(`${stuFindIndex}`);
    // console.log(`${stuIncludes}`);
    

}
search(xiaohong,xiaoli);

//8.对象的扩展-Object.assign()
let Student2Part1={
  name:'xiaohong',
  sex:'famale',
  score:"99"
}
let xiaogang=new Student(Student2Part1);
let Student2Part2={
  math:'33',
  chinese:'22',
  science:'44',
}
console.log(xiaogang);
Object.assign(xiaogang,Student2Part2);
console.log(xiaogang);

















