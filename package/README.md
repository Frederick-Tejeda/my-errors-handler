## Installation

    npm install my-errors-handler

## Usage

### Importing the library


    import { messages, MyErrors } from 'my-errors-handler' 
    // Where messages is our built-in messages pack 

    const myErr = new MyErrors(messages)

    /* In case you don't add the messages package is going to still work. Even better, you'll be able to add your owns, if you use the following pattern:

    const messages = {isNull: "is null", isNotNull: "is not null", isUndefined: "is undefined", isNotUndefined: "is not undefined", isNotEqual: "are not equal", isNotEstrictEqual: "are not estrict equal", isEqual: "are equal", isEstrictEqual: "are estrict equal", includes: "does include", notIncludes: "does not include", isTrue: "is true", isNotTrue: "is not true", isFalse: "is false", isNotFalse: "is not false", isString: "is a string", isNotString:  "is not a string"} */


### Testing


    const Check = () => {
        
        const hello = "hello";
        const one = 1;
        const two = 2;
        const oneStr = "1";
        const boolean = true;
        const h = 'h';

        myErr.isString(hello, "hello")
        myErr.isNotString(hello, "hello")
        myErr.includes(hello, "hello", h, "h")
        myErr.notIncludes(hello, "hello", h, "h")
        myErr.isEqual(one, "one", two, "two")
        myErr.isNotEqual(one, "one", two, "two")
        myErr.isEstrictEqual(one, "one", oneStr, "oneStr")
        myErr.isNotEstrictEqual(one, "one", oneStr, "oneStr")
        myErr.isTrue(boolean, "boolean")
        myErr.isNotTrue(boolean, "boolean")
        myErr.isFalse(boolean, "boolean")
        myErr.isNotTrue(boolean, "boolean")
        myErr.isNull(null, "null")
        myErr.isNotNull(null, "null")
        myErr.isUndefined(undefined, "undefined")
        myErr.isNotUndefined(undefined, "undefined")
    } 

    Check()


### Notice

Notice that the library follows the "(variable, variable's name, variable, variable's name)" pattern.

Don't worry if you want to add your own messages for only a few tests. In that case, you won't have to create the whole message function, instead just add the messages as the last parameter in your test. For example:

    myErr.isNull(null, "null") 
    // With no own message added to this one 

    myErr.isNull(null, "null", "is null") 
    // With own message added to this one 


## About

This a good library if your goal is making few tests to your code.

This library currently count with "isString", "isNotString", "includes", "notIncludes", "isEqual", "isNotEqual", "isEstrictEqual", "isNotStrictEqual", "isTrue", "isNotTrue", "isFalse" and "isNotFalse" methods.

Right now is an only module library in order to import its class with an optional message variable to create an instance from it and have our built-in messages to the tests...

## Future

This is the version 1.0.0 but we're about to upload:

~Version 2.0.0: This will be able to export a function additional to its class, in order to be an option to those as us who like a lot the functional programming!

~Version 3.0.0: This will be able to export the library in two ways, commonjs and module.

