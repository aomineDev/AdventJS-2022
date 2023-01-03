fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 }
])

fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
])

fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
])

function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => a.l - b.l)
    .every((e, i, arr) => !arr[i + 1]
    || (e.l < arr[i + 1].l)
    + (e.w < arr[i + 1].w) 
    + (e.h < arr[i + 1].h) === 3)
    
//-------------------------------------------------------------------------------
  
  //153 pts - another comparation method
  // boxes.sort((a, b) => a.l - b.l)

  // return boxes.slice(1).every((e, i) => 
  //   (e.l > boxes[i].l) + (e.w > boxes[i].w) + (e.h > boxes[i].h) === 3
  // )
}
