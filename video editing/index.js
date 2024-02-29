function viewVideo(clicked_id)
 { /***********************new ******************/
const elements = document.querySelectorAll('.custom-card'); elements.forEach((el) => { el.classList.remove('current-item'); });
   clicked_id = "#" + clicked_id;
const el2 = document.querySelector(clicked_id); el2.classList.add("current-item");
 /**************************************** new 2 **********************/ 
 elements_2 = document.querySelectorAll('.videos'); elements_2.forEach((el_2) => { el_2.classList.remove('current-item'); });
const lst = clicked_id.slice(-1); video_id = "#" + "video" + lst;
const v2 = document.querySelector(video_id); v2.classList.add("current-item"); };;


