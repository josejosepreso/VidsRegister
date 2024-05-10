/**
 * Permite la interaccion del usuario con el sistema en relacion a agregar o eliminar elementos de tipo video y realizar solicitudes asicronas al BackEnd.
 * @version 0.1.2
 * @date 2024/04/29
 * @since 2014/04/26
 */

/*Variable para el manejo de cantidad de videos de tipo educativo agregados*/
let educational = 0;
/**Variable para el manejo de cantidad de videos de tipo cientifico agregados */
let science = 0;
/**Variable para el manejo de cantidad de videos de tipo entretenimiento agregados */
let entertaiment = 0;
/**Variable para el manejo de cantidad de videos de tipo otro agregados */
let other = 0;
/**Variable para el manejo de cantidad total de videos agregados */
let totalVideos = educational + science + entertaiment + other;
/**Variable para el manejo de eventos cada cierto tiempo */
let timer;
class Action{
	
	/**
	 * Permite agregar un nuevo video en la columna de videos registrados.
	 * @param no Representa el numero de su categoria del video a agregar.
	 * @param user Representa al email del usuario responsable de agregar el video.
	 * @param channel Refiere a la cuenta que subio el video registrado a YouTube.
	 * @param year Refiere al a;o que se publico el video.
	 * @param month Refiere al mes que se publico el video.
	 * @param day Refiere al dia en el cual se publico el video.
	 * @param description Refiere a la descripcion del video registrado.
	 * @param likes Refiere a la cantidad de likes hasta el momento del video registrado
	 * @param views Refiere a la cantidad de visitas hasta el momento del video registrado.
	 * @param category Refiere a la categoria a la cual pertenece el video registrado
	 * @param iframe Refiere al codigo del iframe del video registrado
	 * @param index Refiere al indice global a mostrar para el video registrado.
	 */
	static addVideo(no, user, channel, year, month, day, description, likes, views, category, iframe, index){
		
		let creationDate = `${year}/${month}/${day}`;
		
		let videos = document.querySelector("section#videos");
		
		description = description.replaceAll("(((", "\n").replaceAll(")))", "\t").replaceAll("(()", ",");
		
		let video = new Video(no, user, channel, creationDate, description, likes, views, category, iframe, index);
		
		videos.appendChild(video.getHTML());
	}
	
	/**
	 * Da formato a los parametros de un nuevo video para realizar una solicitud asincrona de agregar.
	 * @return Retorna una cadena con adecuado formato para el envio de informacion al BackEnd.
	 */
	static formData(no, user, channel, year, month, day, description, likes, views, category, iframe){
		
		let creationDate = `${year.value}/${month.value}/${day.value}`;
		
		let list = [];
		list.push(`no=${no}`);
		list.push(`user=${user.value}`);
		list.push(`channel=${channel.value}`);
		list.push(`creationDate=${creationDate}`);
		list.push(`description=${description.value}`);
		list.push(`likes=${likes.value}`);
		list.push(`views=${views.value}`);
		list.push(`category=${category.value}`);
		list.push(`iframe=${iframe.value}`);
		return list.join("&");
	}
	
	/**
	 * Da respuesta en el FrontEnd a una solicitud asincrona de agregar.
	 */
	static processResponse(no, user, channel, year, month, day, description, likes, views, category, iframe, answer, event){
		
		if(this.readyState == 4){
			
			if(this.status == 200){
				
				answer.innerHTML = "";
				
				let obj = JSON.parse(this.responseText);
				
				let message = document.createElement("p");
				
				let closeButton = document.createElement("button");
				closeButton.type = "button";
				closeButton.classList.add("btn-close");
				closeButton.dataset.bsDismiss = "alert";
				closeButton.ariaLabel = "Close";
				
				let alert = document.createElement("div");
				alert.classList.add("alert", "alert-dismissible", "fade", "show");
									
				if(obj.status){
					
					message.innerHTML = `${Configuration.ANSWER_SUCCESS_LABEL} ${obj.content}`;
					alert.classList.add("alert-success");
					
					Action.addVideo(no, user.value, channel.value, year.value, month.value, day.value, description.value, likes.value, views.value, category.value, iframe.value, totalVideos + 1);
					
					if(category.value == 2) educational++;
					else if(category.value == 3) science++;
					else if(category.value == 4) entertaiment++;
					else if(category.value == 5) other++;
					totalVideos = educational + science + entertaiment + other;
					
					Action.labels(educational, science, entertaiment, other, totalVideos);
					
					Store.cleanInput();
					
					Action.cleanElement(user);
					Action.cleanElement(channel);
					Action.cleanElement(description);
					Action.cleanElement(category);
					Action.cleanElement(iframe);
					Action.cleanElement(year);
					Action.cleanElement(month);
					Action.cleanElement(day);
					Action.cleanElement(likes);
					Action.cleanElement(views);
					
				} else {
					
					message.innerHTML = `${Configuration.ANSWER_FAIL_LABEL} ${obj.content}`;
					alert.classList.add("alert-danger");
				}
				
				alert.appendChild(message);
				alert.appendChild(closeButton);
				answer.appendChild(alert);
				
				
				clearTimeout(timer);
				timer = setTimeout(Action.cleanElement.bind(null, answer), Configuration.ALERT_TIME_OUT);
				
			} else {
				
			}
		} else {
			
		}
	}
	
	/**
	 * Limpia un elemento HTML una vez enviado el formulario
	 * @param obj Refiere al objeto HTML a limpiar
	 */
	static cleanElement(obj){
		if(obj instanceof HTMLSelectElement){
			
			obj.value = 1;
			return;
		} else if(obj instanceof HTMLInputElement || obj instanceof HTMLTextAreaElement){
			
			obj.value = "";
		} else if(obj instanceof HTMLElement){
			
			obj.innerHTML = "";
		}
	}
	
	/**
	 * Actualiza las cantidades de videos mostradas en la vista principal
	 * @param educational Representa la cantidad de videos de tipo educativo agregados.
	 * @param science Representa la cantidad de videos de tipo cientifico agregados.
	 * @param entertaiment Representa la cantidad de videos de tipo entretenimiento agregados.
	 * @param other Representa la cantidad de videos de tipo otro agregados.
	 */
	static labels(educational, science, entertaiment, other, totalVideos){
		
		document.querySelector("h1#totalVideos").innerText = `${totalVideos}`;
		document.querySelector("p#educational").innerHTML = `
			<strong>${educational}</strong> videos de tipo <strong>educativo</strong>
		`;
		document.querySelector("p#science").innerHTML = `
			<strong>${science}</strong> videos de tipo <strong>científico</strong>
		`;
		document.querySelector("p#entertaiment").innerHTML = `
			<strong>${entertaiment}</strong> videos de tipo <strong>entretenimiento</strong>
		`;
		document.querySelector("p#other").innerHTML = `
			<strong>${other}</strong> videos de tipo <strong>otro</strong>
		`;
	}

	
	/**
	 * Da respuesta en el FrontEnd a una solicitud asincrona de lectura al modelo de datos.
	 */	
	static processReadResponse(){

		if(this.readyState == 4){
			
			if(this.status == 200){
				
				let dto = JSON.parse(this.responseText);
				console.log(dto);
				
				if(dto.status){
					
					educational = parseInt(dto.content.educational);
					science = parseInt(dto.content.science);
					entertaiment = parseInt(dto.content.entertaiment);
					other = parseInt(dto.content.other);
				}
				
				totalVideos = educational + science + entertaiment + other;
				
				Action.labels(educational, science, entertaiment, other, totalVideos);
				
				let i = 0;
				for(let key in dto.content){
					
					if(dto.content[key].user){
						
						let no = dto.content[key].no;
						let user = dto.content[key].user;
						let channel = dto.content[key].channel;
						let description = dto.content[key].description;
						let category = dto.content[key].category;
						let iframe = dto.content[key].iframe;
						let index = ++i;
						let likes = dto.content[key].likes;
						let views = dto.content[key].views;
						let date = dto.content[key].date.split("/");
						
						Action.addVideo(no, user, channel, date[0], date[1], date[2], description, likes, views, category, iframe, index);
					}
				}

				
			} else {
				
			}
		} else {
			
		}
	}
	
	
	/**
	 * Da respuesta en el FrontEnd a una solicitud asincrona de limpieza de modelo de datos, limpiando la vista principal.
	 */
	static processClearResponse(){

		if(this.readyState == 4){
			
			if(this.status == 200){
				
				let dto = JSON.parse(this.responseText);
				
				//console.log(dto);
				
				if(dto.status){
					
					let videos = document.querySelectorAll("section#videos > div");
					
					for(let video of videos){
						video.remove();
					}
					
					educational = 0;
					science = 0;
					entertaiment = 0;
					other = 0;
					totalVideos = educational + science + entertaiment + other;
					
					Action.labels(educational, science, entertaiment, other, totalVideos);
				}

				
			} else {
				
			}
		} else {
			
		}
	}
	
	
	/**
	 * Limpia el modelo de datos en el BackEnd asi como la vista principal en el FrontEnd, creando un archivo de registro.
	 */
	static clearData(){
		
		const xhr = new XMLHttpRequest();
		
		xhr.open("POST", "controllers/clear/data", true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.addEventListener("readystatechange", Action.processClearResponse.bind(xhr));
		
		let date = new Date();
		let deletionDate = `RemovidoEl_${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.reg`;
		
		xhr.send(`deletionDate=${deletionDate}`);
	}
	
		
	/**
	 * Realiza una peticion asincrona para agregar un nuevo video al modelo de datos.
	 */
	static send(no, user, channel, year, month, day, description, likes, views, category, iframe, answer, event){
		
		let cat = document.querySelectorAll(`.cat${category.value}`);
		no = cat.length + 1;
		
		const xhr = new XMLHttpRequest();
		
		xhr.open("POST", "controllers/register", true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.addEventListener("readystatechange", Action.processResponse.bind(xhr, no, user, channel, year, month, day, description, likes, views, category, iframe, answer));
		xhr.send(Action.formData(no, user, channel, year, month, day, description, likes, views, category, iframe));
	}
	
	/**
	 * Realiza una peticion asincrona para la lectura del modelo de datos
	 */
	static read(){
		
		const xhr = new XMLHttpRequest();
		
		xhr.open("POST", "controllers/get/video", true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.addEventListener("readystatechange", Action.processReadResponse.bind(xhr));
		xhr.send();
	}
	
	/**
	 * Muestra una ventana modal en funcion del area donde el usuario "dispara" un evento de tipo click.
	 * @param event Refiere al tipo de evento.
	 */
	static showModal(event){
		
		let element = document.querySelector(`div#${event.target.id}Modal`);
		let modal = new Modal(element);
		modal.show();
	}
	
	/**
	 * Crea y muestra en pantalla una ventana modal en la cual se puede visualizar el video seleccionado junto a su informacion adicional.
	 */
	static showVideoModal(no, user, iframe, description, category, views, likes, creationDate, event){
		
		let frame = iframe.replaceAll(`width='560'`, `width="100%"`);
		
		console.log(frame);
		
		let likesFormat = parseInt(likes).toLocaleString('en-US');
		let viewsFormat = parseInt(views).toLocaleString('en-US');
		
		let cat = ``;
		let c = parseInt(category);
		if(c === 2) cat = "Educativo";
		else if(c === 3) cat = "Cientifico";
		else if(c === 4) cat = "Entretenimiento";
		else if(c === 5) cat = "Otro";
		
		document.querySelector("h1#videoTitle").innerText = `Video de tipo ${cat} #${no}: ${user}`;
		document.querySelector("div#videoIframe").innerHTML = `${frame}`;
		document.querySelector("span#viewsAmount").innerText = `${viewsFormat}`;
		document.querySelector("span#likesAmount").innerText = `${likesFormat}`;
		document.querySelector("span#creationDate").innerText = `${creationDate}`;
		document.querySelector("div#videoDescription").innerText = `${description.replaceAll("(((", "\n").replaceAll(")))", "\t")}`;
		
		Action.showModal(event);
	}
	
	/**
	 * Permite el cambio de preferencias visuales en la vista principal.
	 * */
    static verifyTheme(){
        if(window.localStorage.getItem('theme') == null){
            window.localStorage.setItem("theme", "light");
        }

        let theme = window.localStorage.getItem("theme");

        if(`${theme}` == "light"){
            Action.themeLight();
        } else {
            Action.themeDark();
        }
    }

	/**
	 * Cambia el tema actual en la vista principal por un tema claro.
	 */
    static themeLight(){

        document.querySelector("html").dataset.bsTheme = "light";
        document.querySelector("a#labelLight").innerHTML = "<strong>Claro</strong>";
        document.querySelector("a#labelDark").innerHTML = "Oscuro";
        window.localStorage.setItem("theme", "light");
    }

	/**
	 * Cambia el tema actual en la vista principal por un tema oscuro.
	 */
    static themeDark(){

        document.querySelector("html").dataset.bsTheme = "dark";
        document.querySelector("a#labelDark").innerHTML = "<strong>Oscuro</strong>";
        document.querySelector("a#labelLight").innerHTML = "Claro";
        window.localStorage.setItem("theme", "dark");
    }
}
