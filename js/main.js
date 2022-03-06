(() => {
  // collect the elements we need to interact with
  let instruments = document.querySelectorAll("#musicInstru1 img"),
		  instrumentImg = document.querySelectorAll("#musicInstru2 img"),
      dropZones = document.querySelectorAll(".bird img"),
      resetButton = document.getElementById("reset");


  //function go here
  function startDrag(event) {
    event.dataTransfer.setData("draggedElement", event.target.id);
    let currentEl = event.dataTransfer.getData("draggedElement");
    console.log(`drag`, currentEl);
  }

  function draggedOver(event) {
	 event.preventDefault();
   let currentEl = event.dataTransfer.getData("draggedElement");
   console.log(`dragover`, currentEl);
  }

  function handleDrop(event) {
		event.preventDefault();
		//console.log("dropped this element");
    let currentEl = event.dataTransfer.getData("draggedElement");
		console.log(`dropped this element:`, currentEl);
    this.appendChild(document.querySelector(`#${currentEl}`));
	}


  //add event handling
  instruments.forEach(piece => piece.addEventListener("dragstart", startDrag));
  instrumentImg.forEach(piece => piece.addEventListener("dragstart", startDrag));

  dropZones.forEach(zone => {
  	zone.addEventListener("dragover", draggedOver);
  	zone.addEventListener("drop", handleDrop);
  	});

  resetButton.addEventListener("click", () => {
  	location.reload();
  	})

})();
