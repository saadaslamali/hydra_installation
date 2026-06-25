//local hydra modified from aaryan pashine's hydra interface (https://github.com/caizoryan/hydra-interface)
//shuffle array function from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array


const frame = document.querySelector("iframe");

let   code1 = `

s0.initCam(0)
setResolution(1920,1080)


src(s0)
  .colorama(-0.3)
.glow(src(s0).invert())
.divide(src(s0).invert())
.linearBurn(src(s0).luma())
// .invert()
.colorBurn(src(s0).luma().colorama(-0.6))
// .invert()
.linearBurn(src(s0).invert())
.subtract(src(s0).invert().colorama(-0.9))
// .invert()
  .out(o0)

src(o0)
.colorama(-0.1)
.blend(o1,0.95)
.out(o1)

src(o1)
// .colorama(-0.4)
.colorDodge(src(s0).colorama(0.1).divide(src(o0)))
.glow(src(s0).invert().colorama(-0.3))
// .invert()
.colorama(-0.5)
// .thresh()
// .hue(0.8)
.colorBurn(src(s0).colorama(0.3))
.blend(o2,0.8)
.divide(src(o0).colorama(),0.8)
.blend(o2,0.6)
// .thresh(0.9)
.colorama(0.008)
// .thresh()
.out(o2)

src(o2)
// .phoenix(src(s0).glow(src(o1)).colorama(-0.5)).invert()
.colorBurn(src(s0).colorama(-0))
.hue(0.9)
.invert()
.divide(src(s0),0.7)
.out(o3)
render(o3)
`

let   code2 = `
s0.initCam(0);
setResolution(1920,1080);


src(s0)
  .linearDodge(src(s0).colorama(-0.4).invert())
.divide(src(s0).luma())
.colorama(-0.3)
.invert()
.colorDodge(src(s0).colorama(-0.3))
.blend(o0,0.9).colorama(-0.05)
  .out(o0);

src(o0)
.colorama(-0.9)
.invert()
.blend(o1,0.95)
.out(o1);

src(o1)
.colorama(-0.4)
.vividLight(src(s0).colorama(0.1).divide(src(o0)))
.hardLight(src(s0).invert().blend(o0,0.9))
// .invert()
.colorama(0.1)
// .hue(0.8)
.divide(src(s0).colorama(0.1))
.colorama(0.4)
// .luma()
// .invert()
// .mult(src(o0))
.blend(o2,0.9)
.out(o2);

src(o2)
.divide(src(o0).linearDodge(src(s0)))
.mult(src(s0).luma(0.1))
.divide(src(o2).colorama())
// .invert()
// .r(0.9)
// .hue(0.9)
// .luma()
// .invert()
.glow(src(o0).invert().colorama())
// .colorBurn(src(s0))
// .invert()
// .b(0.3)
// .blend(src(o3),0.9)
// .luma()
  .out(o3);


render(o3);
`

let code3 = `
s0.initCam(0);
setResolution(1920,1080);


src(s0)
  .linearDodge(src(s0).colorama(-0.4).invert())
.divide(src(s0).luma())
.colorama(-0.3)
.invert()
.colorDodge(src(s0).colorama(-0.3))
.blend(o0,0.9).colorama(-0.05)
  .out(o0);

src(o0)
.colorama(-0.9)
.invert()
.blend(o1,0.95)
.out(o1);

src(o1)
.colorama(-0.4)
.vividLight(src(s0).colorama(0.1).divide(src(o0)))
.hardLight(src(s0).invert().blend(o0,0.9))
// .invert()
.colorama(0.1)
// .hue(0.8)
.divide(src(s0).colorama(0.1))
// .luma()
.invert()
// .mult(src(o0))
.blend(o2,0.9)
.out(o2);

src(o2)
.divide(src(o0).linearDodge(src(s0)))
.mult(src(s0).luma(0.1))
.divide(src(o2).colorama())
// .invert()
// .blend(src(o3),0.9)
// .luma()
  .out(o3);


render(o3);
`

let code4 = `
s0.initCam(0);
setResolution(1920,1080);


src(s0)
  .linearDodge(src(s0).colorama(-0.4).invert())
.divide(src(s0).luma())
.colorama(-0.3)
.invert()
.colorDodge(src(s0).colorama(-0.3))
.blend(o0,0.9).colorama(-0.05)
  .out(o0);

src(o0)
.colorama(-0.9)
.invert()
.blend(o1,0.95)
.out(o1);

src(o1)
.colorama(-0.4)
.vividLight(src(s0).colorama(0.1).divide(src(o0)))
.hardLight(src(s0).invert().blend(o0,0.9))
// .invert()
.colorama(0.1)
// .hue(0.8)
.divide(src(s0).colorama(0.1))
// .luma()
.invert()
// .mult(src(o0))
.blend(o2,0.9)
.out(o2);

src(o2)
.divide(src(o0).linearDodge(src(s0)))
.mult(src(s0).luma(0.1))
.divide(src(o2).colorama())
.invert()
// .blend(src(o3),0.9)
// .luma()
  .out(o3);


render(o3);
`

let code5 = `

s0.initCam(0);
setResolution(1920,1080);


src(s0)
  .linearDodge(src(s0).colorama(-0.4).invert())
.divide(src(s0).luma())
.colorama(-0.3)
.invert()
.divide(src(s0))
.blend(o0,0.9)
  .colorama(-0.07)
  .out(o0);

src(o0)
.colorama(-0.1)
.blend(o1,0.95)
.out(o1);

src(o1)
.colorama(-0.4)
.colorDodge(src(s0).colorama(0.1).divide(src(o0)))
.glow(src(s0).invert().colorama(-0.3))
// .invert()
.colorama(-0.5)
// .thresh()
// .hue(0.8)
.colorBurn(src(s0).hue(-0.1).invert())
// .blend(o2,0.8)
.add(src(o0).colorama())
// .blend(o2,0.6)
// .colorama(0.8)
// .thresh()
.out(o2);

src(o2)
.phoenix(src(s0).glow(src(o1)).colorama(-0.5)).invert()
.glow(src(s0).luma(0.2))
.hue(0.1)
.out(o3);


render(o3);
`
let code6 = `
s0.initCam(0);
setResolution(1920,1080);


src(s0)
  .linearDodge(src(s0).colorama(-0.4).invert())
.divide(src(s0).luma())
.colorama(-0.3)
.invert()
.colorDodge(src(s0))
.blend(o0,0.9).colorama(-0.05)
  .out(o0);

src(o0)
// .colorama(-0.5)
.blend(o1,0.95)
.out(o1);

src(o1)
.colorama(-0.4)
.vividLight(src(s0).colorama(0.1).divide(src(o0)))
.multiply(src(s0).invert())
// .invert()
.colorama(-0.4)
// .hue(0.8)
.divide(src(s0))
// .blend(o2,0.8)
.out(o2);

src(o2)
.out(o3);


render(o3);
`


function setup_iframe(){

frame.srcdoc = `
        <style>
    * {
        padding: 0;
        margin: 0;
        overflow: hidden;
    }

    html,
    body {
        height: 100vh;
        width: 100vw;
    }
    canvas{
    display:block;
    width: 100%;
    height: 100%;}
    
        </style>


<body>
<canvas id="canvas"></canvas>
</body>
<script src="./lib/hydra.js"></script>

<script>

        const canvas = document.getElementById('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
                 const h = new Hydra({
            canvas,
            autoLoop: true
            });

            Object.assign(window,h.synth);
            window.h = h;
            
      </script>
<script src="https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-blend.js">

</script>

        <script>
            window.executeCode = function(code){
            eval(code);
            }

            window.executeCode(${JSON.stringify(code)});
            </script>
        



        `;


}
const code_list = [code1, code2, code3, code4, code5, code6];
let array_length = code_list.length;
let array_index = 0;
let code = code_list[array_index];

setup_iframe();


function update_page() {
    frame.contentWindow.executeCode(code);
}

function change_code(){

  console.log(array_index);
if (array_index < array_length){
  code = code_list[array_index];
  array_index++;
  update_page();
}
else {
  array_index = 0;
  shuffle(code_list);
  code = code_list[array_index];
  update_page();
}


}

document.addEventListener("keydown", (event) => {
  const keyName = event.key;

  if (keyName === "A") {
    // do not alert when only Control key is pressed.
    change_code()

  }
});

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}


