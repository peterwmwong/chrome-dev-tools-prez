### Checklist

- Remove DOM breakpoint
  - #my-randomly-flashing-text
- Close all scripts in script panel
- Close console <esc>
- Make Devtools open on the bottom (not it's own window)

### Background

- While coming up with these slides, I realized I probably stare at THIS...

### FLIP

- ... more than anything else.
- Outside of writing code...
- I'm trying to figure out why doesn't work!
- So thinking about that way...
- I came up with a random collection of tips with a related problem to show you one example usage.
- Hopefully this association will make it easier to remember.
- Now there are ton features in chrome dev tools.
- Too many to handle in one talk.
- So I'm going to hit a handful of features for elements, sources and console panels.
- So lets just jump in...

### Tip: Quickly Inspect (Alt-Cmd-C)

- Ooops looks like we have a typo...
- This happens alot where we SEE the problem and we want to zero in on the offending element.
- Couple ways you can do this...
  - Cmd-Alt-J, Open the devtools with...
  - Right click, inspect...
- ... OR my favorite Cmd+Shift+C

So while we're here in the elements panel...

### Tip: Styling interactive elements

- ... Lets talk about styling.
- Styling interactive elements can be time consuming.
- For example, lets say have this requirement...
- (READ REQUIREMENT)
- Cool, so the first step is figuring out where to but the CSS to style this "Hello World!" text...
- Lets find the element...
- On the left we not only see the CSS properties but also where they are coming from.
- How many have used SASS, LESS, or some other CSS preprocessor?
- CSS preprocessors have gotten so popular dev tools know has better integration with them.
- So we can see that this style is coming from this SASS file...
- ... we can click on it to jump right to the source panel...
- but more on that later.
- So lets just pop on over to our editor with this file.
- Lets add make the background black
- and the text color red
- You can already see that there's alot of back and forth...
- Dev tools can help out...

### Tip: Find elements changers

- You may find yourself in this situation.
- You're new to the code or you haven't looked at this part of code for a while...
- And figuring out something like this without tools could take you a while...
  - There's a bazillion ways JS code could have gotten reference to this element
  - There's a bazillion ways for JS code to change the color of an element
- But with dev tools there's a quick way to zero in on this.

### (SEGWAY into Sources Panel) Now that we're talking about JS, lets look at the Sources panel.

### Tip: Navigate source fast

- Alot of times we want to quickly jump into a source file to set a breakpoint or reference something.
- So for example...
- (READ REQUIREMENT)
- ... we can do this with Cmd-O
- Cmd-o Jump to a file
- Shift-Cmd-o Jump to a member inside a file
- This also works for CSS files.
- Lets try `default.css`
- And now Cmd-Shift-O lists all the CSS rules and we can jump to one of them.

### Tip: Controlling the debugger

- In this example we have a function a() calls b() and b() calls c()
- We can controll the debugger with these buttons on the right...
- ... OR we can use hotkeys
- Step In/Out: Cmd-; / Shift-Cmd-;
- Step over: Cmd-'
- Stack Up/Down: Ctrl-. / Ctrl-,

### (SEGWAY into Console Panel) Now in this example we have some log output.

- We could click on the console tab to see this output...
- But the console can be quickly accessed from anywhere!
- Just Hit ESC!

### Tip: The Console is EVERYWHERE

- Say you're in the Elements panel, just hit ESC.
- Now this probably the most powerful feature that I use the most.
- It's a great way to instantly have a Javascript playground.
  - You can get more information about variables and elements
  - Verify that a snippet of code is going to work
  - Whatever.
- On top of being able to execute any JS, there are some extra awesome commands that the console provides

### Tip: Console commands for JS

- $_
- copy()
- keys() / values()

### Tip: Console commands for elements

- $ and $$ (querySelector and querySelectorAll)
- $0 ($1, $2, $3, $4)
- dir()
- inspect()

### Tip: [PERF] Timeline to bust jank

### Tip: [PERF] The Flamechart

### Tip: [PERF] Layers

### Danger! Debugging variables and Console

- V8/DevTools optimize variable references out
  - Example: Why can't I access `y`??!!
    ```
    var a = function(x,y){
      setTimeout(function(){
        console.log('x:', x);
        debugger; // or breakpoint on above line
      })
    }
    ```
