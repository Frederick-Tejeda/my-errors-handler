export class MyErrors extends Error{
    constructor(messages=""){
        super(messages)
        this.messages = messages
    }
    isNull(v, varV, Message=this.messages.isNull || '(No message added)'){
        let output = []
        try{
            if(v === null){
                output.push(`MyErrors: Variable "${varV}", ${Message} ✅.`)
                throw new MyErrors(`MyErrors: Variable "${varV}", ${Message} ✅.`)
            }else{
                output.push(`MyErrors: Variable "${varV}", ${this.messages.isNotNull || '(No message added)'} ❌.`)
                throw new MyErrors(`MyErrors: Variable "${varV}", ${this.messages.isNotNull || '(No message added)'} ❌.`)
            }
        }catch(err){
            console.log(output[0] === err.message ? output[0] : 'Some error happened with "isNull" method...')
        }
    }
    isNotNull(v, varV, Message=this.messages.isNotNull || '(No message added)'){
        let output = []
        try{
            if(v !== null){
                output.push(`MyErrors: Variable "${varV}", ${Message} ✅.`)
                throw new MyErrors(`MyErrors: Variable "${varV}", ${Message} ✅.`)
            }else{
                output.push(`MyErrors: Variable "${varV}", ${this.messages.isNull || '(No message added)'} ❌.`)
                throw new MyErrors(`MyErrors: Variable "${varV}", ${this.messages.isNull || '(No message added)'} ❌.`)
            }
        }catch(err){
            console.log(output[0] === err.message ? output[0] : 'Some error happened with "isNotNull" method...')
        }
    }
    isUndefined(v, varV, Message=this.messages.isUndefined || '(No message added)'){
        let output = []
        try{
            if(v === undefined){
                output.push(`MyErrors: Variable "${varV}", ${Message}. ✅`)
                throw new MyErrors(`MyErrors: Variable "${varV}", ${Message}. ✅`)
            }else{
                output.push(`MyErrors: Variable "${varV}", ${this.messages.isNotUndefined || '(No message added)'} ❌.`)
                throw new MyErrors(`MyErrors: Variable "${varV}", ${this.messages.isNotUndefined || '(No message added)'} ❌.`)
            }
        }catch(err){
            console.log(output[0] === err.message ? output[0] : 'Some error happened with "isUndefined" method...')
        }
    }
    isNotUndefined(v, varV, Message=this.messages.isNotUndefined || '(No message added)'){
        let output = []
        try{
            if(v !== undefined){
                output.push(`MyErrors: Variable "${varV}", ${Message}. ✅`)
                throw new MyErrors(`MyErrors: Variable "${varV}", ${Message}. ✅`)
            }else{
                output.push(`MyErrors: Variable "${varV}", ${this.messages.isUndefined || '(No message added)'} ❌.`)
                throw new MyErrors(`MyErrors: Variable "${varV}", ${this.messages.isUndefined || '(No message added)'} ❌.`)
            }
        }catch(err){
            console.log(output[0] === err.message ? output[0] : 'Some error happened with "isNotUndefined" method...')
        }
    }
    isNotEqual(a, varA, b, varB, Message=this.messages.isNotEqual || '(No message added)'){
        let output = []
        try{
            if(a != b){
                output.push(`MyErrors: Variables "${varA}" and "${varB}", ${Message || '(No message added)'}. ✅`)
                throw new MyErrors(`MyErrors: Variables "${varA}" and "${varB}", ${Message || '(No message added)'}. ✅`)
            }else{
                output.push(`MyErrors: Variables "${varA}" and "${varB}", ${this.messages.isEqual || '(No message added)'} ❌.`)
                throw new MyErrors(`MyErrors: Variables "${varA}" and "${varB}", ${this.messages.isEqual || '(No message added)'} ❌.`)
            }
        }catch(err){
            console.log(output[0] === err.message ? output[0] : 'Some error happened with "isNotEqual" method...')
        }
    }
    isNotEstrictEqual(a, varA, b, varB, Message=this.messages.isNotEstrictEqual || '(No message added)'){
        let output = []
        try{
            if(a !== b){
                output.push(`MyErrors: Variables "${varA}" and "${varB}", ${Message || '(No message added)'}. ✅`)
                throw new MyErrors(`MyErrors: Variables "${varA}" and "${varB}", ${Message || '(No message added)'}. ✅`)
            }else{
                output.push(`MyErrors: Variables "${varA}" and "${varB}", ${this.messages.isEstrictEqual || '(No message added)'} ❌.`)
                throw new MyErrors(`MyErrors: Variables "${varA}" and "${varB}", ${this.messages.isEstrictEqual || '(No message added)'} ❌.`)
            }
        }catch(err){
            console.log(output[0] === err.message ? output[0] : 'Some error happened with "isNotEstrictEqual" method...')
        }
    }
    isEqual(a, varA, b, varB, Message=this.messages.isEqual || '(No message added)'){
        let output = []
        try{
            if(a == b){
                output.push(`MyErrors: Variables "${varA}" and "${varB}", ${Message} ✅.`)
                throw new MyErrors(`MyErrors: Variables "${varA}" and "${varB}", ${Message} ✅.`)
            }else{
                output.push(`MyErrors: Variables "${varA}" and "${varB}", ${this.messages.isNotEqual || '(No message added)'} ❌.`)
                console.log(`MyErrors: Variables "${varA}" and "${varB}", ${this.messages.isNotEqual || '(No message added)'} ❌.`)
            }
        }catch(err){
            console.log(output[0] === err.message ? output[0] : 'Some error happened with "isEqual" method...')
        }
    }
    isEstrictEqual(a, varA, b, varB, Message=this.messages.isEstrictEqual || '(No message added)'){
        let output = []
        try{
            if(a === b){
                output.push(`MyErrors: Variables "${varA}" and "${varB}", ${Message} ✅.`)
                throw new MyErrors(`MyErrors: Variables "${varA}" and "${varB}", ${Message} ✅.`)
            }else{
                output.push(`MyErrors: Variables "${varA}" and "${varB}", ${this.messages.isNotEstrictEqual || '(No message added)'} ❌.`)
                console.log(`MyErrors: Variables "${varA}" and "${varB}", ${this.messages.isNotEstrictEqual || '(No message added)'} ❌.`)
            }
        }catch(err){
            console.log(output[0] === err.message ? output[0] : 'Some error happened with "isEstrictEqual" method...')
        }
    }
    includes(a, varA, b, varB, Message=this.messages.includes || '(No message added)'){
        let output = []
        try{
            if(a.includes(b)){
                output.push(`MyErrors: Variable "${varA}" ${Message} "${varB}" ✅.`)
                throw new MyErrors(`MyErrors: Variable "${varA}" ${Message} "${varB}" ✅.`)
            }else{
                output.push(`MyErrors: Variable "${varA}", ${this.messages.notIncludes || '(No message added)'} "${varB}" ❌.`)
                throw new MyErrors(`MyErrors: Variable "${varA}", ${this.messages.notIncludes || '(No message added)'} "${varB}" ❌.`)
            }
        }catch(err){
            console.log(output[0] === err.message ? output[0] : 'Some error happened with "includes" method...')
        }
    }
    notIncludes(a, varA, b, varB, Message=this.messages.notIncludes || '(No message added)'){
        let output = []
        try{
            if(!a.includes(b)){
                output.push(`MyErrors: Variable "${varA}" ${Message} "${varB}" ✅.`)
                throw new MyErrors(`MyErrors: Variable "${varA}" ${Message} "${varB}" ✅.`)
            }else{
                output.push(`MyErrors: Variable "${varA}", ${this.messages.includes || '(No message added)'} "${varB}" ❌.`)
                throw new MyErrors(`MyErrors: Variable "${varA}", ${this.messages.includes || '(No message added)'} "${varB}" ❌.`)
            }
        }catch(err){
            console.log(output[0] === err.message ? output[0] : 'Some error happened with "notIncludes" method...')
        }
    }
    isTrue(a, varA, Message=this.messages.isTrue || '(No message added)'){
        let output = []
        try{
            if(a === true){
                output.push(`MyErrors: Variable "${varA}" ${Message} ✅.`)
                throw new MyErrors(`MyErrors: Variable "${varA}" ${Message} ✅.`)
            }else{
                output.push(`MyErrors: Variable "${varA}", ${this.messages.isNotTrue || '(No message added)'} ❌.`)
                throw new MyErrors(`MyErrors: Variable "${varA}", ${this.messages.isNotTrue || '(No message added)'} ❌.`)
            }
        }catch(err){
            console.log(output[0] === err.message ? output[0] : 'Some error happened with "isTrue" method...')
        }
    }
    isNotTrue(a, varA, Message=this.messages.isNotTrue || '(No message added)'){
        let output = []
        try{
            if(a !== true){
                output.push(`MyErrors: Variable "${varA}" ${Message} ✅.`)
                throw new MyErrors(`MyErrors: Variable "${varA}" ${Message} ✅.`)
            }else{
                output.push(`MyErrors: Variable "${varA}", ${this.messages.isTrue || '(No message added)'} ❌.`)
                throw new MyErrors(`MyErrors: Variable "${varA}", ${this.messages.isTrue || '(No message added)'} ❌.`)
            }
        }catch(err){
           console.log(output[0] === err.message ? output[0] : 'Some error happened with "isNotTrue" method...') 
        }
    }
    isFalse(a, varA, Message=this.messages.isFalse || '(No message added)'){
        let output = []
        try{
            if(a === false){
                output.push(`MyErrors: Variable "${varA}" ${Message} ✅.`)
                throw new MyErrors(`MyErrors: Variable "${varA}" ${Message} ✅.`)
            }else{
                output.push(`MyErrors: Variable "${varA}", ${this.messages.isNotFalse || '(No message added)'} ❌.`)
                throw new MyErrors(`MyErrors: Variable "${varA}", ${this.messages.isNotFalse || '(No message added)'} ❌.`)
            }
        }catch(err){
            console.log(output[0] === err.message ? output[0] : 'Some error happened with "isFalse" method...')
        }
    }
    isNotFalse(a, varA, Message=this.messages.isNotFalse || '(No message added)'){
        let output = []
        try{
            if(a !== false){
                output.push(`MyErrors: Variable "${varA}" ${Message} ✅.`)
                throw new MyErrors(`MyErrors: Variable "${varA}" ${Message} ✅.`)
            }else{
                output.push(`MyErrors: Variable "${varA}", ${this.messages.isFalse || '(No message added)'} ❌.`)
                throw new MyErrors(`MyErrors: Variable "${varA}", ${this.messages.isFalse || '(No message added)'} ❌.`)
            }
        }catch(err){
           console.log(output[0] === err.message ? output[0] : 'Some error happened with "isNotFalse" method...')
        }
    }
    isString(a, varA, Message=this.messages.isString || '(No message added)'){
        let output = []
        try{
            if(typeof a === 'string'){
                output.push(`MyErrors: Variable "${varA}" ${Message} ✅.`)
                throw new MyErrors(`MyErrors: Variable "${varA}" ${Message} ✅.`)
            }else{
                output.push(`MyErrors: Variable "${varA}", ${this.messages.isNotString || '(No message added)'} ❌.`)
                throw new MyErrors(`MyErrors: Variable "${varA}", ${this.messages.isNotString || '(No message added)'} ❌.`)
            }
        }catch(err){
            console.log(output[0] === err.message ? output[0] : 'Some error happened with "isString" method...')
        }
    }
    isNotString(a, varA, Message=this.messages.isNotString || '(No message added)'){
        let output = []
        try{
            if(typeof a !== 'string'){
                output.push(`MyErrors: Variable "${varA}" ${Message} ✅.`)
                throw new MyErrors(`MyErrors: Variable "${varA}" ${Message} ✅.`)
            }else{
                output.push(`MyErrors: Variable "${varA}", ${this.messages.isString || '(No message added)'} ❌.`)
                throw new MyErrors(`MyErrors: Variable "${varA}", ${this.messages.isString || '(No message added)'} ❌.`)
            }
        }catch(err){
            console.log(output[0] === err.message ? output[0] : 'Some error happened with "isNotString" method...')
        }
    }
}

export const messages = {isNull: "is null", isNotNull: "is not null", isUndefined: "is undefined", isNotUndefined: "is not undefined", isNotEqual: "are not equal", isNotEstrictEqual: "are not estrict equal", isEqual: "are equal", isEstrictEqual: "are estrict equal", includes: "does include", notIncludes: "does not include", isTrue: "is true", isNotTrue: "is not true", isFalse: "is false", isNotFalse: "is not false", isString: "is a string", isNotString:  "is not a string"}
