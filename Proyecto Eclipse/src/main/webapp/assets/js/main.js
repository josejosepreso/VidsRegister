/**
 * 
 */

 Action.read();
 Action.labels(0,0,0,0,0);
 Store.loadInput(); 
 
 let answer = document.querySelector("section#answer");
 let user = document.querySelector("input#user");
 let channel = document.querySelector("input#channel");
 let year = document.querySelector("input#year");
 let month = document.querySelector("input#month");
 let day = document.querySelector("input#day");
 let description = document.querySelector("textarea#description");
 let likes = document.querySelector("input#likes");
 let views = document.querySelector("input#views");
 let category = document.querySelector("select#category");
 let iframe = document.querySelector("input#iframe");
 let sendButton = document.querySelector("button#sendButton");
 
 let input = [];
 input.push(user);
 input.push(channel);
 input.push(year);
 input.push(month);
 input.push(day);
 input.push(description);
 input.push(likes);
 input.push(views);
 input.push(iframe);
 
 for(let i of input){
	 i.addEventListener("keyup", Store.saveInput);
 }

 let addVideo = document.querySelector("a#addVideo");
 let about = document.querySelector("a#about");
 let clear = document.querySelector("a#clearData");
 let deleteButton = document.querySelector("button#deleteConfirm");
 
 addVideo.addEventListener("click", Action.showModal);
 about.addEventListener("click", Action.showModal);
 clear.addEventListener("click", Action.showModal);
 deleteButton.addEventListener("click", Action.clearData.bind(null));
 sendButton.addEventListener("click", Action.send.bind(null, 0, user, channel, year, month, day, description, likes, views, category, iframe, answer));