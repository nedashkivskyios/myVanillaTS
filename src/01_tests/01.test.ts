import {multiple, splitIntoWords, sum} from "./01";

// data
let a: number;
let b: number;
let c: number;

// before all test
beforeEach( () => {
  a = 1
  b = 2
  c = 3
})

test("sum sould be correct", () => {

  // action
  const result1 = sum(a ,b)
  const result2 = sum(b ,c)


  // expect result
  expect(result1).toBe(3)
  expect(result2).toBe(5)

})

test("multiple sould be correct", () => {
  // data
  const a = 1
  const b = 2
  const c = 3

  // action
  const result1 = multiple(a ,b)
  const result2 = multiple(b ,c)


  // expect result
  expect(result1).toBe(2)
  expect(result2).toBe(6)

})

test("spliting into words should be correct", () => {
  // data
  const sent1 = "Hello my friend!"
  const sent2 = "JS best programming language"

  // action
  const result1 = splitIntoWords(sent1)
  const result2 = splitIntoWords(sent2)

  // expect
  expect(result1.length).toBe(3)
  expect(result1[0]).toBe("hello")
  expect(result1[1]).toBe("my")
  expect(result1[2]).toBe("friend")

  expect(result2.length).toBe(4)
  expect(result2[0]).toBe("js")
  expect(result2[1]).toBe("best")
  expect(result2[2]).toBe("programming")
  expect(result2[3]).toBe("language")
})

