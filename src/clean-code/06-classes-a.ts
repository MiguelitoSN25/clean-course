(()=>{
    
    //No aplicando el principio de resposabilidad unica

    type Gender = 'M'|'F';

    class Persona{
    public name : string;
    public gender : Gender;
    public birthdate : Date

    constructor(name: string, gender: Gender, birthdate:Date){
     this.name = name
     this.gender = gender
     this.birthdate = birthdate
    }}

    class User extends Persona {
        public lastAccess:Date

        constructor(
            public email: string,
            public role: string,
            public name : string,
            public gender : Gender,
            public birthdate : Date
        ){
            super(name,gender,birthdate)
            this.lastAccess = new Date()
        }

        checkCredentials(){
            return true
        }
    }

    class UserSettings extends User{
        constructor(
            public workingDirectory:string,
            public lastOpenFolder: string,
            email:string,
            role:string,
            name: string,
            gender:Gender,
            birthdate:Date
        ){
            super(email,role,name,gender,birthdate)
        }
    }

    const UserSetting = new UserSettings(
        '/usr/home',
        '//home',
        'fernando@google.com',
        'Admin',
        'Fernando',
        'M',
        new Date('1985-10-21')
    )

    console.log({UserSetting})


const newPersona = new Persona('Fernando','M',new Date('1985-10-21'));
console.log({newPersona})
})()