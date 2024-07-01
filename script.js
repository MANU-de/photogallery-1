function showImage(grpImgName) {

    var fadeoutAllImgs = document.getElementsByClassName("imgBox");
    for (i = 0; i < fadeoutAllImgs.length; i++) {
      fadeoutAllImgs[i].style.opacity = "0";
      fadeoutAllImgs[i].style.width = "0";
    }
  
    var fadeinCategoryImgs = document.getElementsByClassName(grpImgName);
    for (i = 0; i < fadeinCategoryImgs.length; i++) {
      fadeinCategoryImgs[i].style.opacity = "1";
      fadeinCategoryImgs[i].style.width = "calc(100% / 4)";
    }
  }