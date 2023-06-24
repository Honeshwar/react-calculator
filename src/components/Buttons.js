import * as math from 'mathjs';

export default function Buttons(props) {
  const { input, setInput, setResult } = props;

  // to insert button text by iterating
  const signs = [
    "C",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "="
  ];
  // i create this so i can check that previous value and current value is an operator or not
  const operator = [
    // "+/-",
    "%",
    "/",
    "*",
    "-",
    "+",
    ".",
    "="
  ];

  const btnClickHandler = (clickInput) => {
    // to check last element is a operator or not
    const lastElement = input.length - 1;

    //for operator not before number
    if (input === "" && isNaN(clickInput)) {
      return;
    }
    //if last added value in input is an opertor and current also again retun
    else if (
      operator.includes(clickInput) &&
      operator.includes(input[lastElement])
    ) {
      return;
    }

    switch (clickInput) {
      case "C":
        setInput("");
        break;
      case "+/-":
        setInput("-" + input);
        break;
      case "%":
        setInput(input + "%");
        break;
      case "-":
        setInput(input + "-");
        break;
      case "+":
        setInput(input + "+");
        break;
      case "x":
        setInput(input + "*");
        break;
      case "=":
        console.log(input);
        try {
          // const result = eval(input);
          // setInput(result);
         
          const result= math.evaluate(input).toString();
          console.log(result);
          setInput(result);
        } catch (error) {
          setInput("Error ");
        }

        break;
      case ".":
        setInput(input + ".");
        break;

      default:
        setInput(input + clickInput);
        break;
    }
  };

  return (
    <div className="buttons">
      {/* jsx expression */}
      {signs.map((sign, index) => (
        <button key={index} onClick={() => btnClickHandler(sign)}>
          {sign}
        </button>
      ))}
    </div>
  );
}
