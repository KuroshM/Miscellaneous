function randomize_font() {
  const elems = document.getElementsByTagName("*");
  for (let i = 0; i < elems.length; i++) {
    const style = window
      .getComputedStyle(elems[i], null)
      .getPropertyValue("font-size");
    const fontSize = parseFloat(style);
    elems[i].style.fontSize = `${fontSize * (Math.random() + 0.5)}px`;
  }
}

randomize_font();
