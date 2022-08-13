// A JSON value MUST be an
// - object
// - array
// - number
// - string,
// or one of the following three literal names:
// - false
// - true
// - null

type JSONPrimitive = string | number | boolean | null
type JSONValue = JSONArray | JSONObject |  JSONPrimitive

// [K: string] is an index signature
type JSONObject = {[k: string]: JSONValue}
type JSONArray = JSONValue[]


function isJSON(arg: JSONValue){}


isJSON("hello")
isJSON([4,8,15,16,23,42])
isJSON({greeting: "hello"})
isJSON(false)
isJSON(true)
isJSON(null)
isJSON({a:{b: [2,3, "foo"]}})

// if you uncomment it should bring sqigllys
// isJSON(() => "")
// isJSON(class {})
// isJSON(undefined)
// isJSON(new BigInt(143))
// isJSON(isJSON)