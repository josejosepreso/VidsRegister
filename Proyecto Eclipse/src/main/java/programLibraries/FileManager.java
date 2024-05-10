package programLibraries;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;

/*
 * Permite el manejo de archivos almacenados en disco
 * @version 0.1.0
 * @date 2024/04/26
 * @since 2024/04/26
 * */
public class FileManager {

	/*
	 * Permite la escritura y el guardado en disco de un nuevo archivo
	 * @param path Refiere a la ruta a guardar el archivo
	 * @param data Refiere al contenido del archivo a guardar
	 * @return Retorna una respuesta de tipo FileManagerResponse indicando si se pudo escribir el archivo
	 * */
	public static FileManagerResponse write(String path, String data) throws IOException{
		
		Path filePath = Paths.get(path);
		FileManagerResponse response = new FileManagerResponse();
		
		try {
			
			File file = new File(path);
			if(!file.exists()) {
				file.createNewFile();
			}
			
			Files.writeString(filePath, data, StandardOpenOption.APPEND);
			response.setStatus(true);
			
		} catch(IOException e) {
			response.setStatus(false);
			System.out.println(e);
		}
		
		return response;
	}


	/*
	 * Permite la lectura de un archivo guardado en disco
	 * @param path Refiere a la ruta del archivo
	 * @return Retorna una respuesta de tipo FileManagerResponse indicando si se pudo leer el archivo
	 * */
	public static FileManagerResponse read(String path) throws IOException{
		
		Path filePath = Paths.get(path);
		FileManagerResponse response = new FileManagerResponse();
		StringBuilder content = new StringBuilder();
		
		try {
			content.append(String.format("%s", Files.readString(filePath)));
			response.setStatus(true);
			response.setContent(content.toString());
		} catch(Exception e) {
			response.setStatus(false);
		}
		
		return response;
	}
	

	/*
	 * Permite la limpieza de un archivo existente
	 * @param path Refiere a la ruta del archivo
	 * @return Retorna una respuesta de tipo FileManagerResponse indicando si se pudo limpiar el archivo
	 * */
	public static FileManagerResponse clear(String path) throws IOException{
		
		Path filePath = Paths.get(path);
		FileManagerResponse response = new FileManagerResponse();
		
		try {
			
			Files.writeString(filePath, "",StandardOpenOption.TRUNCATE_EXISTING);
			response.setStatus(true);
			
		} catch(IOException e) {
			response.setStatus(false);
			System.out.println(e);
		}
		
		return response;
	}
}
