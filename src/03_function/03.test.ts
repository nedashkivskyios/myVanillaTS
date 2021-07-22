import {StudentType} from "../02_objects/02";
import {addSkill} from "./03";

let student: StudentType;

beforeEach(() => {
  student = {
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
      }
    ]
  }
})

test("new skill should be added to student", () => {
  addSkill(student, "JS")
  addSkill(student, "React")

  expect(student.technologies[2].title).toBe("JS")
  expect(student.technologies[3].title).toBe("React")
})