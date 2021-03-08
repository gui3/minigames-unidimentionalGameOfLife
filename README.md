# minigames : Unidimentional Game of Life

> A full-javascript-old-browser-compatible **cellular automaton**
> to

## use

This repository was made for fun and to develop my best practices.
The main goals were :

- to make a working cellular automaton
- to make it as efficient as possible

these goals were left aside :
- old browser compatibility (We use Promises)

### to play

**not available yet**

If you have time to kill,
please check the widget on this
[github page](https://gui3.github.io/minigames-unidimentionalGameOfLife/)


### to put the game on your web page

**not ready yet**

If you really want an **unidimentional cellular automaton**
for your users to wait wile you **process their big data**,
you can embed this widget in 3 easy steps :

1- put the 2 scripts files `minigames.js` and `tictactoe.js`
in a static folder available to the page

2- choose a place where to put the game,
and make sure you can access it easily (with an id is ideal):
```html
<div id="unidimentional"></div>
```

3- import the 2 scripts by adding these tags,
and add the game setup as follow,
preferably at the bottom of your page.

```html
<script src="./minigames.js"></script>
<script src="./tictactoe.js"></script>
<script>
const game = tictactoe.new(
  minigames, // this is compulsory
  document.getElementById("unidimentional"), // your target DOM element
  {
    // optional argument with different customization options
  }
)
</script>
```