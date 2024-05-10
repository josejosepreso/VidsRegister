package programLibraries;

/*
 * Entrega una respuesta uniforme para el manejo de archivos almacenados en disco
 * @version 0.1.0
 * @date 2024/04/26
 * @since 2024/04/26
 * */
public class FileManagerResponse {

	/*Representa el contenido de la respuesta*/
	private String content;
	
	/*Representa el estado booleano de la respuesta. False refiere a una respuesta negativa y True su opuesto*/
	private boolean status;
	
	/*
	 * Retorna el estado de la respuesta
	 * @return Si el estado refiere a que existio fallo o no existio.
	 * */
	public boolean isStatus() {
		return this.status;
	}
	
	/*
	 * Establece el nuevo estado de la respuesta, indicando si existio error o no al procesar la misma.
	 * @param status Refiere al nuevo estado.
	 * */
	public void setStatus(boolean status) {
		this.status = status;
	}
	
	/*
	 * Retorna el contenido establecido en la respuesta
	 * @return retorna el contenido de la respuesta
	 * */
	public String getContent() {
		return this.content;
	}
	
	/*
	 * Establece el contenido de la respuesta
	 * @param content Refiere al nuevo contenido
	 * */
	public void setContent(String content) {
		this.content = content;
	}
}
