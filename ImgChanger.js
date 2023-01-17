function replace_img() {
  const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    const w = images[i].width;
    const h = images[i].height;
    images[i].src = `https://source.unsplash.com/featured/${w}x${h}`;
  }
}

replace_img();
