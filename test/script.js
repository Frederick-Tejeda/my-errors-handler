import { messages, MyErrors } from 'my-errors-handler'

const myErr = new MyErrors(messages)

const Check = () => {
    const hello = "hello", one = 1, two = 2, oneStr = "1", boolean = true, h = 'h'
     
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
