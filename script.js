

$('#elem').wScratchPad({
    size        : 10,          // The size of the brush/scratch.
    bg          : 'images/offerMain.jpg',  // Background (image path or hex color).
    fg          : '#ababab',  // Foreground (image path or hex color).
    realtime    : true,       // Calculates percentage in realitime.
    scratchDown : null,       // Set scratchDown callback.
    scratchUp   : null,       // Set scratchUp callback.
    scratchMove : scratchingMove,       // Set scratcMove callback.
    cursor      : 'crosshair' // Set cursor.
  });


  function scratchingMove(e, percent){
    console.log(percent);
    if (percent>30) {
        document.querySelector('#elem canvas').style.opacity = '-.1';
    }
  }