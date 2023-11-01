const counter = document.getElementById("counter");
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");
    const body = document.body;

    let count = 0;
    
    function updateCounter() {
      counter.textContent = count;
    }

    
    function changeBackgroundColor() {
      if (count > 0) {
        body.style.backgroundColor = "darkblue";
      } else if (count < 0) {
        body.style.backgroundColor = "tomato";
      } else {
        body.style.backgroundColor = "yellow";
      }
    }
 
    incrementButton.addEventListener("click", function () {
      count++;
      updateCounter();
      changeBackgroundColor();
    });

    decrementButton.addEventListener("click", function () {
      count--;
      updateCounter();
      changeBackgroundColor();
    });

    updateCounter();
    changeBackgroundColor();