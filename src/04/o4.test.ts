test("should take old men older then 90", () => {
  const ages = [10, 20, 22, 1, 100, 90, 14]

  const oldAges = ages.filter(age => age > 90)

  expect(oldAges.length).toBe(1)
})

test("should take courses chipper 160", () => {
  const courses = [
    {title: "css", price: 110},
    {title: "js", price: 200},
    {title: "react", price: 150}
  ]

  const chipCourses = courses.filter(course => course.price < 160)

  expect(chipCourses.length).toBe(2)
  expect(chipCourses[0].title).toBe("css")
  expect(chipCourses[1].title).toBe("react")
})

test("get only completed tasks", () => {
  const tasks = [
    {id: 1, title: "Bread", isDone: false},
    {id: 2, title: "Milk", isDone: true},
    {id: 3, title: "Solt", isDone: false},
    {id: 4, title: "Sugar", isDone: true}
  ]

  const completedTasks = tasks.filter(t => t.isDone)

  expect(completedTasks.length).toBe(2)
  expect(completedTasks[0].title).toBe("Milk")
  expect(completedTasks[1].title).toBe("Sugar")

})
