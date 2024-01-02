(() => {

    // aplicando el principio de responsabilidad única
    // Priorizar la composición a la herencia!
    type Gender = 'M'|'F';

    interface PersonaProps {
        birthdate : Date;
        gender    : Gender;
        name      : string;
    }

    class Persona {
        public birthdate: Date;
        public gender   : Gender;
        public name     : string;

        constructor({ name, gender, birthdate }: PersonaProps ){
            this.name      = name;
            this.gender    = gender;
            this.birthdate = birthdate;
        }
    }


    interface UserProps {
        email     : string;
        role      : string;
    }

    class User {
        
        public email: string;
        public role : string;
        public lastAccess: Date;

        constructor({
            email,
            role,
        }: UserProps ) {
            this.lastAccess = new Date();
            this.email = email;
            this.role  = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface SettingsProps {
        lastOpenFolder   : string;
        workingDirectory : string;
    }

    class Settings {

        public workingDirectory: string;
        public lastOpenFolder  : string;

        constructor({
            workingDirectory,
            lastOpenFolder,
        }: SettingsProps ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder   = lastOpenFolder;
        }
    }

    
    interface UserSettingsProps {
        birthdate        : Date;
        email            : string;
        gender           : Gender;
        lastOpenFolder   : string;
        name             : string;
        role             : string;
        workingDirectory : string;
        IsCheck        : boolean

    }

    class UserSettings{

        public persona: Persona
        public user: User
        public settings: Settings
        public IsCheck : boolean
        constructor({
            name,gender,birthdate,email,role,workingDirectory,lastOpenFolder,IsCheck
        }:UserSettingsProps){
            this.persona = new Persona({name,gender,birthdate})
            this.user = new User({email,role})
            this.settings = new Settings({workingDirectory,lastOpenFolder})
            this.IsCheck = IsCheck

        }

    }
    


    const userSuperSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Fernando',
        role: 'Admin',
        workingDirectory: '/usr/home',
        IsCheck: true
    });

    console.log({ userSuperSettings });

})();