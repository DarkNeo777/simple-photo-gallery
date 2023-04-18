
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption

var pic = document.createElement("pic")
var pic2 = document.createElement("pic2")
var pic3 = document.createElement("pic3")
var pic4 = document.createElement("pic4")
var pic5 = document.createElement("pic5")
var pic6 = document.createElement("pic6")
var pic7 = document.createElement("pic7")
var pic8 = document.createElement("pic8")
var pic9 = document.createElement("pic9")
var pic10 = document.createElement("pic10")
var pic11 = document.createElement("pic11")
var pic12 = document.createElement("pic12")
pic.src = "assets/1.jpg"
pic2.src = "assets/2.jpg"
pic3.src = "assets/3.jpg"
pic4.src = "assets/4.jpg"
pic5.src = "assets/5.jpg"
pic6.src = "assets/6.jpg"
pic7.src = "assets/7.jpg"
pic8.src = "assets/8.jpg"
pic9.src = "assets/9.jpg"
pic10.src = "assets/10.jpg"
pic11.src = "assets/11.jpg"
pic12.src = "assets/12.jpg"
var img1 = document.getElementById("mg1");
var img2 = document.getElementById("mg2");
var img3 = document.getElementById("mg3");
var img4 = document.getElementById("mg4");
var img5 = document.getElementById("mg5");
var img6 = document.getElementById("mg6");
var img7 = document.getElementById("mg7");
var img8 = document.getElementById("mg8");
var img9 = document.getElementById("mg9");
var img10 = document.getElementById("mg10");
var img11 = document.getElementById("mg11");
var img12 = document.getElementById("mg12");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img1.onclick = function () {
    modal.style.display = "block";
    modalImg.src = pic.src;
}
img2.onclick = function () {
    modal.style.display = "block";
    modalImg.src = pic2.src;
}
img3.onclick = function () {
    modal.style.display = "block";
    modalImg.src = pic3.src;
}
img4.onclick = function () {
    modal.style.display = "block";
    modalImg.src = pic4.src;
}
img5.onclick = function () {
    modal.style.display = "block";
    modalImg.src = pic5.src;
}
img6.onclick = function () {
    modal.style.display = "block";
    modalImg.src = pic6.src;
}
img7.onclick = function () {
    modal.style.display = "block";
    modalImg.src = pic7.src;
}
img8.onclick = function () {
    modal.style.display = "block";
    modalImg.src = pic8.src;
}
img9.onclick = function () {
    modal.style.display = "block";
    modalImg.src = pic9.src;
}
img10.onclick = function () {
    modal.style.display = "block";
    modalImg.src = pic10.src;
}
img11.onclick = function () {
    modal.style.display = "block";
    modalImg.src = pic11.src;
}
img12.onclick = function () {
    modal.style.display = "block";
    modalImg.src = pic12.src;
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
