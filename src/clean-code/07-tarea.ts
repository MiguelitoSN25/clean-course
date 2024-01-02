(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes  {
        constructor(
            public value: string,
            public placeholder: string,
            public id: string,
        ) {}
    }

    class InputEvents {
        constructor( ) 
        { }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement

    interface valuesprops{
        value:string,
        placeholder:string,
        id:string
        type:HtmlType
    }

    class InputElement{
        public html: HtmlElement
        public InputAttributes: InputAttributes
        public inputEvents : InputEvents
        constructor(value:string,placeholder:string,id:string){
            this.html = new HtmlElement(id,'input')
            this.InputAttributes = new InputAttributes(value,placeholder,id)
            this.inputEvents = new InputEvents()
        }
    }

    const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

    console.log({ nameField });

})()