(function(global, $){
    let Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    const supportedLangs = ['en', 'es'];

    const greetings = {
        en: 'Hello',
        es: 'Hola'

    };

    const formalGreetings = {
        en: 'Hello',
        es: 'Saludos'

    };
    const logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    }


    Greetr.prototype = {

        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function() {
            const msg;
            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting()
            }
            if(console) {
                console.log(msg);
            }
            // 'this refers to the calling object at exceution time
            // makes the method chainable
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + 
                this.fullName())
            }
            return this;
        },

        setLang: function(lang) {
            this.language = lang;

            this.validate();

            return this;
        }


    };

    Greetr.init = function(firstName, lastName, language) {

        let self = this;

        self.firstName = firstName || '';   
        self.lastName = lastName || '';    
        self.language = language || 'en';
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;



}(window, jquery));