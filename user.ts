import axios from "axios"

export class User {
    name: string
    firstName: string
    constructor(){
        this.name = "TOJO"
        this.firstName = "Brillant"

    }
        getFullName() {
        return  this.name + this.firstName
    }
}

