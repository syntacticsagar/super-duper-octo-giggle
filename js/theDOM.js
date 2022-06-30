// document.addEventListener('DOMContentLoaded', function() {
//   // Your code here...
// });

// function addParagraph(text){
//   var paragraph2 = document.createElement('p');
//   paragraph2.innerText = text;
  
//   document.body.appendChild(paragraph2);
//   paragraph2.classList.add('paragraph2');
// }

// function hideParagraph(){
//   var paragraphs = document.getElementsByTagName('p');
//   var randomNumber = Math.floor(Math.random() * paragraphs.length);
//   paragraphs[randomNumber].classList.add('hidden');
// }

// var texts = ["Lorem Ipsum", "Houston, we don't have a problem", "Apollo 11"];

// var h2 = document.getElementById('headerID');
// h2.addEventListener('click', function(){
//   var randomNumber = Math.floor(Math.random() * texts.length);
//   var showHideRandomNumber = Math.random();

//   if(showHideRandomNumber >= 0.4){
//     addParagraph(texts[randomNumber]);
//   } else {
//     hideParagraph();
//   }
  
// });

// var clickableParagraph = document.getElementById('paragraph-clickable');
// clickableParagraph.addEventListener('click', function(){
//   clickableParagraph.innerHTML = "<a href='https://www.google.com'>LInk to Google</a><img src='https://pbs.twimg.com/profile_images/1356921365698404356/3OG1HbbM_400x400.jpg'>";
// })

var paragraph2 = document.createElement('p');
paragraph2.innerText = "Hi, my name is Fred Weasley";

document.body.appendChild(paragraph2);
paragraph2.classList.add('paragraph2');

// // Approach 1
// paragraph2.addEventListener('mouseenter', function(){
//   paragraph2.style.color = 'red';
// });

// paragraph2.addEventListener('mouseleave', function(){
//   paragraph2.style.color = 'black';
// });

// Approach 2
paragraph2.addEventListener('mouseenter', function(event){
  event.target.style.color = 'red';
});

paragraph2.addEventListener('mouseleave', function(event){
  event.target.style.color = 'black';
});

