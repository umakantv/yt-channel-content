

export function getUser() {

    let closingBalance = new Map([
        ["2023-08-21", 34.60],
        ["2023-08-22", 34.60],
        ["2023-08-23", 30.03],
        ["2023-08-24", 30.03],
        ["2023-08-25", 32.33],
        ["2023-08-26", 27.00],
        ["2023-08-27", 23.45],
    ])

    let accounts = new Set([ "20221001001", "20230101005" ])

    let createdAt = new Date("2022-01-01")

    class Address {
        constructor(house, street, city, province, zipcode, country) {
            this.house = house;
            this.street = street;
            this.city = city;
            this.province = province;
            this.zipcode = zipcode;
            this.country = country;
        }

        toJSON() {
            return {
                address: [
                    this.house,
                    this.street,
                    this.city,
                    this.province,
                    this.zipcode,
                    this.country,
                ].join(', ')
            }
        }
    }
    let addresses = [
        new Address("201B", "Baker Street", "London", "London", "20001", "UK"),
        new Address("201B", "Street No 2", "New Delhi", "Delhi", "110001", "IN")
    ]

    function sayHello() {
        console.log('Hello', this.name)
    }

    // Javascript object support all types in javascript
    const user = {
        id: 1,
        email: "umakantv@example.com",
        active: true,
        referred_by: null,
        verified: undefined,
        profile: {
            name: "Umakant Vashishtha",
            balance: 23.45,
        },
        closingBalance,
        accounts,
        addresses,
        createdAt,
        sayHello,
    }

    return user;
}







export function stringify(data) {
    // JSON text support - number, string, null, boolean, array and nested JSON data

    return JSON.stringify(data, (key, value) => {
        if (value instanceof Map) {
            return Object.fromEntries(value)
        } else if (value instanceof Set) {
            return [...value]
        } else {
            return value
        }
    }, 2)
}

// console.log(stringify(getUser()))


















export function prepareUserResponse(user) {
    user = stringify(user)
    return JSON.parse(user)
}