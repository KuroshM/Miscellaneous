function replace_img() {
  const h = document.getElementsByTagName("img");
  for (let i = 0; i < h.length; i++) {
    h[i].src = "https://kuroshm.github.io/Miscellaneous/Isfahan.jpg";
  }
}

replace_img();
