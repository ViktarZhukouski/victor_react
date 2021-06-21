export function* regRequest(payload) {
  yield console.log("Hello from callMethodsLogRegCreate!!!");
  yield alert("I'm working!")
}

export function* getPartners(payload) {
  yield console.log("Hello Partners!");
  yield alert("I'm working always!")
}
