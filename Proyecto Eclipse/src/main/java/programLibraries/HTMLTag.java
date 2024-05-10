package programLibraries;

/*
 * Entidad para representar etiquetas HTML
 * @version 0.1.0
 * @date 2024/04/26
 * */

public class HTMLTag {
	
	private String name;
	private String style;
	private String content;
	
	/*
	 * Constructor para un nuevo objeto de tipo HTML
	 * @param name Refiere al nombre de la etiqueta HTML
	 * */
	public HTMLTag(String name) {
		this.name = name;
		this.style = "";
		this.content = "";
	}
	
	/*
	 * Constructor para un nuevo objeto de tipo HTML
	 * @param name Refiere al nombre de la etiqueta HTML
	 * @param content Refiere al contenido que posee la etiqueta HTML
	 * */
	public HTMLTag(String name, String content) {
		this.name = name;
		this.style = "";
		this.content = content;
	}
	
	/*
	 * Constructor para un nuevo objeto de tipo HTML
	 * @param name Refiere al nombre de la etiqueta HTML
	 * @param content Refiere al contenido que posee la etiqueta HTML
	 * @param style Refiere al estilo css que posee la etiqueta HTML
	 * */
	public HTMLTag(String name, String style, String content) {
		this.name = name;
		this.style = style;
		this.content = content;
	}
	
	/*
	 * Retorna la version texto de la etiqueta HTML
	 * @return Retorna la version texto de la etiqueta HTML
	 * */
	public String toString() {
		
		StringBuilder style = new StringBuilder();
		
		if(this.style.length() > 0) {
			//style.append(" style=");
			//style.append("\"");
			style.append(this.style);
			//style.append("\"");
		}
		
		return String.format(
				"<%s%s>%s</%s>",
				this.name,
				style.toString(),
				this.content,
				this.name
		);
	}
}
