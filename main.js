const showImage = file => {
  console.log(file);
  const img = document.createElement("img");
  img.src = URL.createObjectURL(file);
  document.body.appendChild(img);

  // get dimensions of the image
  img.onload = () => {
    console.log(img.naturalWidth, img.naturalHeight);
  };
};

imgInp.onchange = () => {
  const file = imgInp.files;
  if (file) {
    showImage(file[0]);
  }
};

imgsInp.onchange = () => {
  const files = imgsInp.files;
  console.log(files);
  [...files].forEach(file => {
    showImage(file);
  });
};

dirInp.onchange = evt => {
  console.log(evt);
  const files = evt.target.files;
  [...files].forEach(file => {
    if (file.type.includes("image")) {
      showImage(file);
    }
  });
};
