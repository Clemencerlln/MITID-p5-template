# MITID – p5.js template

Welcome! This repo is your starting point for the p5.js class. Clone it, open the demos, then copy the template to start your own project.

---

## What is p5.js?

**p5.js** is a JavaScript library that makes it easy to **draw, animate and interact** in a web page. It was created for artists, designers and beginners, so you can get something on screen in a few lines of code.

Think of it as a **sketchbook**: you get a blank canvas (the page), pens and brushes (functions like `circle()`, `rect()`, `line()`) and you can make your drawing move and react to the mouse, the keyboard, sound, arduino sensors or even AI pose detection model.

```js
function setup() {
  createCanvas(400, 400);   // prepare the sheet of paper, once
}

function draw() {
  background(220);          // repaint the paper
  circle(mouseX, mouseY, 50); // a circle that follows your mouse
}
```

Two functions run the show:

| Function | When it runs | Analogy |
|----------|--------------|---------|
| `setup()` | **Once**, at the start | Setting up your desk before you work |
| `draw()`  | **Over and over**, about 60 times per second | The frames of a flipbook: each run draws one page |

Official website: <https://p5js.org> (reference, examples, tutorials)
>[!TIP]
>Official documentation <https://p5js.org/reference/>

---

## What is in this repo?

```
MITID-p5-template/
├── README.md       ← this file
├── demos/          ← discover p5 potential
├── demo-games/     ← bigger examples with video games (demo)
└── template/       ← EMPTY starting point for your own project
```

> **Rule #1:** never work directly inside `template/`. Always **copy** a folder and work in the copy. That way you can always come back to a clean version.

---

## Start your own project

1. **Copy** the `template/` folder.
2. **Rename** the copy, for example `my-first-sketch/` (no spaces, no accents).
3. Open `http://localhost:5500/my-first-sketch/` in your browser.
4. Edit `sketch.js` inside your folder, save, preview.

A typical p5.js project folder looks like this:

```
my-first-sketch/
├── index.html   ← the page; loads libraries like p5.js, then your sketch
├── sketch.js    ← YOUR code lives here
├── style.css    ← the style for your page
└── /libraries   ← the libraries folder, with all local libraries
```

---

## Cheat sheet

| I want to… | Use |
|------------|-----|
| Make a canvas | `createCanvas(width, height)` |
| Set the background | `background(r, g, b)` or `background(220)` |
| Draw shapes | `circle(x, y, d)`, `rect(x, y, w, h)`, `line(x1, y1, x2, y2)` |
| Choose colors | `fill(r, g, b)`, `stroke(r, g, b)`, `noFill()`, `noStroke()` |
| Read the mouse | `mouseX`, `mouseY`, `mouseIsPressed` |
| Read the keyboard | `keyIsPressed`, `key`, `keyPressed()` |
| Store a value | `let speed = 3;` |
| Repeat something | `for (let i = 0; i < 10; i++) { … }` |
| Take a decision | `if (x > width) { … }` |
| Print to the console | `console.log(x)` |

The canvas origin `(0, 0)` is the **top-left** corner. `x` grows to the right, `y` grows **downwards**.

---

## Common problems

| Problem | Likely cause |
|---------|--------------|
| Blank page | Open the console: there is probably a typo or a missing file |
| `circle is not defined` | `p5.js` is not loaded in `index.html`, or the script order is wrong |
| Changes do not appear | Did you save? Hard reload with `Ctrl/Cmd + Shift + R` |

---

## Useful links

- [p5.js Reference](https://p5js.org/reference/): every function, with examples
- [p5.js Examples](https://p5js.org/examples/)
- [The Coding Train](https://thecodingtrain.com): friendly video tutorials on p5.js
- [MDN JavaScript Guide](https://developer.mozilla.org/docs/Web/JavaScript/Guide): when you need to understand the JavaScript itself

Have fun, experiment, and break things!
