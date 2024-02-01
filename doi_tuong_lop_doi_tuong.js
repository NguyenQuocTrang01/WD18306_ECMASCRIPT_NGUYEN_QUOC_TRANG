class User {
    constructor (name , email , pas) {
        this.name = name
        this.email = email
        this.pas = pas
    }

    listName () {
        return this.name
    }
}

const user_1 = new User ("Trang" , "trangnqpc05335" , 90)

user_1.listName ()

class Dog extends User {
    constructor (name , email , pas , sua) {
        super (name , email , pas)
        this.sua = sua
    }

    choSua () {
        return this.listName () + ' dang sua ' + this.sua
    }
}
                                                                                          
const dog_1 = new Dog ("ChiHuaHua" , "HuaHua.com" , "122" , "gau gau gau")

class Cat extends Dog {
    constructor (name , email , pas , sua , noiChuyen) {
        super (name , email , pas , sua)
        this.noiChuyen = noiChuyen
    }
}



