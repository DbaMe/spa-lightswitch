# lightSwitch

1. 
- Create a Room component with a "lightswitch" button and some text describing "The room is lit" or "The room is dark". 
- Clicking the button should toggle the light on and off, and update the text.
- Use the useState hook to store the lightswitch state.

```css
html,
body,
#root,
.room {
  height: 100vh;
  margin: 0;
  text-align: center;
  font-family: "Georgia", serif;
  font-size: 1.5rem;
}

button {
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
}

.room {
  padding: 30px;
}

.lit {
  background-color: white;
  color: black;
}

.dark {
  background-color: black;
  color: white;
}

```