/**
 * Entidad que permite almacenar informacion en el almacenamiento del navegador.
 * @version 0.1.0
 * @date 2024/04/27
 */

 class Store {
	 
	/**
	 * Obtiene la informacion agregada por el usuario en los campos de texto para el formulario de agregar videos.
	 * @return Retorna un objeto JSON que contiene la informacion de cada campo de texto.
	 */
	 static getInput(){
		 
		 let input;
		 if(window.localStorage.getItem("input") == null){
			 
			 input = `{"user":"","channel":"","date":{"year":"","month":"","day":""},"likes":"","views":"","description":"","category":"1","iframe":""}`;
		 } else {
		 
		 	input = window.localStorage.getItem("input");
		 }
		 
		 return JSON.parse(input);
	 }
	 
	 /**
	 * Almacena de forma persistente en localstorage la informacion ingresada por el usuario en los campos de texto para el formulario de agregar videos.
	 */
	 static saveInput(){
		 
		 let input = Store.getInput();
		 //console.log(input);
		 input.user = document.querySelector("input#user").value;
		 input.channel = document.querySelector("input#channel").value;
		 input.date.year = document.querySelector("input#year").value;
		 input.date.month = document.querySelector("input#month").value;
		 input.date.day = document.querySelector("input#day").value;
		 input.description = document.querySelector("textarea#description").value;
		 input.likes = document.querySelector("input#likes").value;
		 input.views = document.querySelector("input#views").value;
		 input.category = document.querySelector("select#category").value;
		 input.iframe = document.querySelector("input#iframe").value;
		 
		 window.localStorage.setItem("input", JSON.stringify(input));
	 }
	 
	/**
	 * Carga y llena los campos de texto con la informacion almacenada
	 */
	 static loadInput(){
		 
		 let input = Store.getInput();
		 
		 document.querySelector("input#user").value = input.user;
		 document.querySelector("input#channel").value = input.channel;
		 document.querySelector("input#year").value = input.date.year;
		 document.querySelector("input#month").value = input.date.month;
		 document.querySelector("input#day").value = input.date.day;
		 document.querySelector("textarea#description").value = input.description;
		 document.querySelector("input#likes").value = input.likes;
		 document.querySelector("input#views").value = input.views;
		 document.querySelector("select#category").value = input.category;
		 document.querySelector("input#iframe").value = input.iframe;
	 }
	 
	/**
	 * Limpia la informacion agregada por el usuario en los campos de texto para el formulario de agregar videos.
	 */
	 static cleanInput(){
		 window.localStorage.removeItem("input");
	 }
 }
