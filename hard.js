class Customer{
    #name;
    #ssn;
constructor(name, ssn){
    this.#name = name;
    this.#ssn = ssn;
}

    getName(){
        let hello = this.#name;
    return  hello;
    }



}

let person = new Customer("jake", 1234);


console.log(person.getName());
