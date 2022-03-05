(() => {
  // collect the elements we need to interact with
  let instruments = document.querySelectorAll("#musicInstru1 img"),
		  instrumentImg = document.querySelectorAll("#musicInstru2 img"),
      dropZones = document.querySelectorAll(".bird");


  //function go here
  function startDrag(event) {
    event.dataTransfer.setData("draggedElement", event.target.id);
    console.log("drag this element");
  }

  function draggedOver(event) {
	 event.preventDefault();
   console.log("dragover this element");
  }

  function handleDrop(event) {
		event.preventDefault();
		console.log("dropped this element");
	}


  //add event handling
  instruments.forEach(piece => piece.addEventListener("dragstart", startDrag));
  instrumentImg.forEach(piece => piece.addEventListener("dragstart", startDrag));

  dropZones.forEach(zone => {
  	zone.addEventListener("dragover", draggedOver);
  	zone.addEventListener("drop", handleDrop);
  	});

})();
