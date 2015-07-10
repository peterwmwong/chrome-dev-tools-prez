### Checklist

- Start CMM
- Start Rails Console
- Open Slides

### Background

Hello... For those on the phone, I'm Peter, one of the frontend developers working on Centro Direct.

The goal of this short presentation
is to share some tips and tricks with the devtools
that I've found useful
when developing and testing the frontend.

The feature set of devtools is HUGE!
So I'm only covering a small subset.

Also it's under very active development
...so things change overnight
...See this green hamburger telling I can update.
I gave this talk like a year ago...
And right before I gave my talk I updated chrome.
And a feature I was demoing got moved...
I looked like an idiot.

Anywho keep that in mind that devtools is always evolving.

So lets get's started...

- Most of the times you'll open the devtools using...
  - Cmd-Option-I
  - ... and it acts as a toggle


### Tip: Quickly Inspect

- But you may not know about...
  - Cmd-Option-C

- Lets say we want to fix typo...
- Hit Cmd-Option-C...
- Click on it...
- ... and we see below
- It's already got that offending element selected
- Lets fix that "cat walked over my keyboard" typo...
- ... by double clicking on this element

### Tip: Editing on the fly

- Another thing this shows is how you can edit things on the fly
- ... and I find this useful if you want to quickly test say...
- how will this look like with a ton text
- "okay... it doesn't truncate. I need to go fix that"
- All the edits you make can be undone with
- Cmd-Z
- You can keep hitting to undo more...
- or...
- Cmd-Shift-Z to redo

- Not only is this great for seeing the
  - tree of elements
  - and
  - messing with text
- It's great of figuring why something doesn't look right!
- On the right hand side...
- ... we have styles pane
- This tells you all the styles applied to currently selected element

### Tip: Debugging styles

- Lets say you wrote some see CSS to make this text RIGHT aligned
- ... but that is... NOT right aligned
- So lets find out why...
- I could scroll through all the styles to try to find text-align...
- We could scroll through the whole list...
- OR...
- We could zero in on it using filtering...


- This works great most of the times...
- but sometimes your debugging something that's interactive...

### Tip: Styling interactive elements

- Lets say we need this "Hello World" to look like this on hover...
- ... and it doesn't
- ... it's a little blue...
- We try to use the techniques we've learned so far.

- Cmd-Option-C to inspect
- Filter to on "color"
- BUT... I can't hover and see the styles at the same time

- That's what this Pin icon is for!


- So while we're here modifying a style properties
- There's a couple neat editing things you should know about

- First off switching color modes
- Shift click to cycle through the colors...
- which is helpful as centro ui colors are RGB...
- and the dev tools might tell you colors in HEX

- The other thing is the color picker and eye dropper


- There are also some nice shortcuts when editing number values...
- ... say this padding
- Up/Down
- Shift + Up/Down
- Alt + Up/Down

- Okay enough about styles.

- I want to talk about some tips that help with writing feature specs.
- When you're writing feature specs...
- A good chunk of it is finding elements with CSS and XPath...
- To verify it exists...
- ... has the right text
- ... etc.

- If you hit Cmd-F, in the elements panel
- it does indeed act like a searching for text would...
- BUT
- you can any CSS or XPATH selector
- that you'd want to use in feature spec section

- We look for any element with class of 'past'
> .past
> .past > h2

- Enter and Shift-Enter to scroll through the different matches

- Okay... Lets move on to the Network Panel


### Network Panel

```
  SWITCH TO CMM
  Do a global search
```

This shows everything the browser request...
It's a great way to figure out problems with communicating with the backend...

- Are we even making a request to the backend?
- Are we hitting the right endpoint?
- Are we passing the right paramaters?

I think most people know about those...
But what you might not know that this network panel
can help you figure out what Javascript is making this request!

This is the awesome "Initiator" column
So instead of searching through code and adding break points through trial and error...
Just mouse over this column.

This tells you full stack trace...

Now here's the Centro Direct specific tip:
Right below something BasisObject something something
Click on it...
It jumps you to Sources Tab..
to the line of code that made that request.

So... now that we're on the Sources tab.



Let me flip back to my slides...


```
  SWITCH TO SLIDES
  Go to: Navigate the source
```


### Tip: Navigate source fast

- Lets say we want get to the `magnify()` function in a file `zoom.js`
- Cmd-p Jump to a file
- Just like Sublime Text does
- You can even be terrible at speller and end up in the right file
- z m s
- close enough
- Shift-Cmd-p Jump to a function inside a file
- it will show you all functions that match
- in this case...
- we have 2 magnify functions

- This also works for CSS files.
```
  SWITCH TO CMM
  Go to centro.css
```
- Cause I never remember the name of utility classes...
- Is it padding Bottom Top...
- or Top Bottom


```
  SWITCH TO SLIDES
  Go to: Conrolling the debugger
```

Next some tips about controller the debugger.


### Tip: Controlling the debugger

There's alot of great shortcuts.

Lets start up the debugger...

- In this example we have a function a() calls b() and b() calls c()
- You can control the debugger with these buttons on the right...
- ... OR you can use hotkeys
- Step In/Out: Cmd-; / Shift-Cmd-;
- Step over: Cmd-'
- Stack Up/Down: Ctrl-. / Ctrl-,

### Tip: Console commands for JS

```
  SWITCH TO CMM
  Go to: Dashboard
  Go to: Console
```

The console, is pretty awesome REPL...
... expecially with Centro Direct...
where the application state and...
data from the backend is so accesible from console.

Lets say we're on the dashboard listing all the initiatives.

`CMM.appState` is where we put alot of data
So in the this case...
`CMM.appState.initiatives`

You can even get a hold of Models...
say the User model and get a list of users

> var users = CMM.User.query()
> users.first.firstName
> users.first.lastName

With appState and Models available in the console
You could use it to debug issues or as playground to learn about appState and Models.

With that in mind...
I want show off special console command called `copy`

Say you have a user...
and you want to make sure the frontend...
is synced up with the backend.

You need the uuid.

> users.first.uuid

You can use the copy() to copy that into your clipboard
and paste that into the Rails Console

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
