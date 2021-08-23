function TestButton(): JSX.Element {
  return (
    <button
      onClick={() => { 
        console.log("Click for the window.open reference")
        window.open("https://www.w3schools.com/jsref/met_win_open.asp")
      }}
    >
      Make me do something when I'm clicked...
    </button>
  );
}

export default TestButton;
