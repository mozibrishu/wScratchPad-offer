
checker =1;
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
    if (percent>40 && checker) {
        checker = 0;
        document.querySelector('#elem canvas').style.opacity = '-.1';
        document.querySelector('#elem').style.cursor = 'default';
        // document.querySelector('#elem canvas').removeEventListener('mousedown',()=>{console.log('removed');});
        
        setTimeout(() => {
            document.querySelector('#elem img').classList.add('elemIMG');
            document.querySelector('#elem').addEventListener('click', ()=>{
                console.log('clicked');
            })
        }, 1500);
    }
  }