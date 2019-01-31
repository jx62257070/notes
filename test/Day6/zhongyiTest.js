
class Human {
    constructor({name,age=18}){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`hello my name is ${this.name} XXX`);
    }
    getAge(){
        return this.age;
    }
}

class Student extends Human{
    constructor({name,age,score}){
        super({name,age})
        this.score=score;
    }
    getHomeWork(){
        let homeWork= new Promise((res,rej)=>{
            setTimeout(()=>{
                rej("'jiu shi bu jiao");
            },3000);
        });
        return homeWork;
    }
}

let config={
    name:'shiyi',
    age:18,
    score:119
}
let config1={
    name:'mengYa',
    score:11
}
let config2={
    name:'raoLei',
    age:18,
    score:19
}
let shiYi=new Student(config);
let mengYa=new Student(config1);
let raoLei=new Student(config2);

console.log( mengYa.getAge());

shiYi.greet();

mengYa.getHomeWork().then(res =>{
    if(res){
        console.log(res);
        console.log('ok');
    }else{
        console.log('false');
    }
    return new Promise(()=>{

    })
}).catch(err =>{
    console.log(err);
})

let getTotalScore=(...stuList)=>{
    let total=0;
    stuList.forEach(stu=>{
        total+=stu.score;
    });
    let aveScore=total/stuList.length;
    test(stuList);
    return {total,aveScore};
    
}

let getScore=(...stuList)=>{
    let stu=stuList.find(stu=>stu.name=='mengYa')
    console.log(stu);
}
getScore(shiYi,mengYa,raoLei)
let test=(a,b,c)=>{
//todo
}
let {total:asd,aveScore}=getTotalScore(shiYi,mengYa,raoLei);

