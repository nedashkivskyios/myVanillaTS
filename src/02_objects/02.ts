type LocalCityType = {
  title: string
  countryTitle: string
}

type AddressType = {
  streetTitle: string
  city: LocalCityType
}

type TechType = {
  id: number
  title: string
}

type StudentType = {
  name: string
  age: number
  isActive: boolean
  address: AddressType
  technologies: Array<TechType>
}

const student: StudentType = {
  name: "Alex",
  age: 27,
  isActive: false,
  address: {
    streetTitle: "Krymskogo 8",
    city: {
      title: "Bila Tserkva",
      countryTitle: "Ukraine"
    }
  },
  technologies: [
    {
      id: 1,
      title: "HTML"
    },
    {
      id: 2,
      title: "CSS"
    },
    {
      id: 3,
      title: "JS"
    }
  ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)

