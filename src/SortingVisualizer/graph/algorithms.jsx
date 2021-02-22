function bubblesort(arr) {
  let noswaps;
  for (var i = arr.length; i > 0; i--) {
    noswaps = true;
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      //Highlight bars so to indicate comparison
      const arrayBars = document.getElementsByClassName("array-bar");
      const barOneStyle = arrayBars[j].style;
      const barTwoStyle = arrayBars[j + 1].style;
      barOneStyle.backgroundColor = "var(--main-blue)";
      barTwoStyle.backgroundColor = "var(--main-blue)";
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noswaps = false;
        //do swap animation
      }
    }
    console.log("ONE PASS COMPLETE");
    //turn of highlighted bars
    if (noswaps) break;
  }
}
