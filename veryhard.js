class Person {
    constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
    this.exercise =()=>{
        console.log("Running is fun! - said no one ever");
    }
    this.fetchJob = ()=>{
        console.log(`${this.name} is a ${this.job}`);
    }
}
}

class Programmer extends Person  { 
    constructor (name, job, age, languages){
        super(name, job, age);
        this.languages = [];
        this.languages.push(languages);
        this.busy = true;
        this.completeTask = ()=>{
            this.busy = false;
        }
        this.acceptNewTask =()=>{
            this.busy = false
        }
        this.offerNewTask =()=>{
            if(!this.busy){
                console.log("Mark would love to take on a new responsibility.");
            }
            else{
                console.log("Mark can't accept any new tasks right now.");
            }
        }
        this.learnLanguage = (language)=>{
            this.languages.push(language);
        }

        this.listLanguages = (language)=>{
            console.log(this.languages);
        }
    }
}


let obama = new Person("obama", "president",61);
let bill_gates = new Programmer("Bill", "Programmer", 67, "java")
let ben = new Programmer("Ben", "Junior Programmer", 33, "ruby")

obama.exercise();
obama.fetchJob();
bill_gates.exercise();
bill_gates.fetchJob();
bill_gates.offerNewTask();
bill_gates.listLanguages();
bill_gates.learnLanguage('c++');
bill_gates.listLanguages();
ben.fetchJob();
ben.completeTask();
ben.acceptNewTask();
ben.offerNewTask();
ben.listLanguages();
ben.learnLanguage('java');
ben.listLanguages();
