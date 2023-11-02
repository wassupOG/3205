"use server"

const DATA_JSON = [
  {
    email: "jim@gmail.com",
    number: "221122",
  },
  {
    email: "jam@gmail.com",
    number: "830347",
  },
  {
    email: "john@gmail.com",
    number: "221122",
  },
  {
    email: "jams@gmail.com",
    number: "349425",
  },
  {
    email: "jams@gmail.com",
    number: "141424",
  },
  {
    email: "jill@gmail.com",
    number: "822287",
  },
  {
    email: "jill@gmail.com",
    number: "822286",
  },
]

export type functionParams = {
  email: string
  number?: string
}

export type DATA_JSON = {
  email: string
  number: string
}

function cleanInput(input: string) {
  return input.replace(/-/g, "")
}

export async function findUsers(obj: functionParams) {
  "use server"
  return DATA_JSON.filter((user) => {
    const emailMatch = user.email === obj.email

    const numberMatch = obj.number ? user.number === cleanInput(obj.number) : true

    return emailMatch && numberMatch
  })
}
