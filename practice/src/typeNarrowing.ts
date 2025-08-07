function detectType(val: number | string ) {
    if (typeof val === "string")
        return val.toLowerCase()

    return val + 3
}

function provideId(id: string | null) {
    if (!id) {
        console.log("please provide ID");
        return
    }
    id.toLowerCase()
}

interface User {
    name: string,
    email: string
}

interface Admin extends User {
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
    if ("isAdmin" in account)
        return account.isAdmin
    return false
}


function func(x: Date | string) {
    if (x instanceof Date) 
        return x.getDate()
    return x.toUpperCase()
}

type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "fish food"
    } else {
        pet
        return "bird fish"
    }
}