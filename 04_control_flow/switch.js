//switch case in js
/*switch is another way to write multiple if...else if conditions.
It’s useful when you want to compare one value with many possible cases.
It makes code cleaner and easier to read. */


const month =11

switch (month){
    case 1:
        console.log("jan")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;
    case 5:
        console.log("may")
        break;
    case 6:
        console.log("jun")
        break;
    default:
        console.log("no case match")
}

/*🟢 Explanation (line by line)

switch (value) → The value we want to check.
case option: → If value matches this option, run its code.
break; → Stops checking other cases (very important).
default: → Runs if none of the cases match. */

//xample 2: --------------Without break
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("It’s red");
  case "banana":
    console.log("It’s yellow");
  default:
    console.log("I don’t know");
}

// 👉 Output:
// It’s red
// It’s yellow
// I don’t know


// ⚠️ Why? → Because we didn’t use break, so once a case matches, all next cases run until the end.
// ✅ That’s why we almost always use break;.