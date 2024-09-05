package programLibraries;

/*
 * Entidad para representar las etiquetas HTML iframe
 * @version 0.1.1
 * @date 2024/04/26
 * @since 2024/04/26
 * */

public class Iframe extends HTMLTag{
	
	/*Constructor para un nuevo objeto de tipo Iframe*/
	public Iframe() {
		
		super("iframe");
	}
	
	/*
	 * Constructor para un nuevo objeto de tipo Iframe que posee un contenido
	 * @param content Refiere al contenido interno que posee el iframe
	 * */
	public Iframe(String content) {
		
		super("iframe", content);
	}
	
	/*
	 * Constructor para un nuevo objeto de tipo Iframe que posee un estilo y un contendio
	 * @param style Refiere al estilo css que posee el iframe
	 * @param content Refiere al contenido interno que posee el iframe
	 * */
	public Iframe(String style, String content) {
		
		super("iframe", style, content);
	}
}
