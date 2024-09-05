/**
 * Entidad para representar los videos mostrados en el FrontEnd
 */

 class Video{
	 
	 /*Constructor para un nuevo objeto de tipo Video*/
	 constructor(no, user, channel, creationDate, description, likes, views, category, iframe, index){
		 this.no = no;
		 this.user = user;
		 this.channel = channel;
		 this.creationDate = creationDate;
		 this.likes = likes;
		 this.views = views;
		 this.category = category;
		 this.description = description;
		 this.iframe = iframe;
		 
		 this.index = index;
	 }
	 
	/**
	 * Crea una version de elemento HTML para el video utilizando los atributos establecidos.
	 * @return Retorna un objeto tipo HTML adecuado para la insercion en la vista principal.
	 */
	 getHTML(){
		 
		 let html = document.createElement("div");
		 html.id = `video${this.index}`;
		 html.classList.add("mb-3", "shadow", "p-3", "bg-body-tertiary" ,"rounded");
		 html.classList.add(`cat${this.category}`);
		 
		 let titleLabel = document.createElement("h2");
		 let category = ``;
		 let categoryId = parseInt(this.category);
		 if(categoryId === 2) category += `(video <em>Educativo</em>)`;
		 else if(categoryId === 3) category += ` (video <em>Científico</em>)`;
		 else if(categoryId === 4) category += ` (video <em>de Entretenimiento</em>)`;
		 else if(categoryId === 5) category = `(<em>Otro</em>)`;
		 titleLabel.innerHTML = `<strong>${this.index} - ${this.channel} ${category}</strong>`;
		 
		 let userLabel = document.createElement("p");
		 userLabel.innerHTML = `Responsable: <strong>${this.user}</strong>`;
		 
		 let desc = document.createElement("p");
		 let subDescription = this.description.substr(0, 128);
		 if(this.description.length > 128) subDescription += "...";
		 desc.innerText = `${subDescription}`;
		 desc.style.wordWrap = "break-word";
		 
		 let watchButton = document.createElement("button");
		 watchButton.innerText = "Ver video";
		 watchButton.classList.add("btn", "btn-success", "form-control");
		 watchButton.id = "watchVideo";
		 watchButton.addEventListener("click", Action.showVideoModal.bind(null, this.no, this.user, this.iframe, this.description, this.category, this.views, this.likes, this.creationDate));
		 
		 html.appendChild(titleLabel);
		 html.appendChild(userLabel);
		 html.appendChild(desc);
		 html.appendChild(watchButton);
		 
		 return html;
	 }
 }