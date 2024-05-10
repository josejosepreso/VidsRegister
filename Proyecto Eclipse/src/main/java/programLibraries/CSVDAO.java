package programLibraries;

import java.io.IOException;

/*
 * Permite el acceso a datos almacenados en un archivo guardado en disco.
 * @version 0.1.0
 * @date 2024/04/26
 * @since
 * */
public class CSVDAO {
	
	/*
	 * Realiza la limpieza del modelo de datos.
	 * @param filename Refiere al archivo de registro almacenado en disco.
	 * @return Si el estado refiere a que existio fallo o no existio.
	 * */
	public boolean clear(String filename) throws IOException {
		
		FileManagerResponse writeResponse = FileManager.clear(
				Configuration.DATA_MODEL_FILE_NAME
		);
		
		writeResponse = FileManager.write(filename, "");
		
		return writeResponse.isStatus();
	}
	
	/*
	 * Realiza una escritura en el modelo de datos.
	 * @param Video Refiere al video a guardar en el modelo de datos.
	 * @return Si el estado refiere a que existio fallo o no existio.
	 * */	
	public boolean save(Video video) throws IOException {
		
		FileManagerResponse writeResponse = FileManager.write(
				Configuration.DATA_MODEL_FILE_NAME,
				video.toString()
		);
		
		return writeResponse.isStatus();
	}
	
	/*
	 * Realiza una lectura al modelo de datos.
	 * @return Si el estado refiere a que existio fallo o no existio.
	 * */
	public boolean load() throws IOException {
		
		FileManagerResponse readResponse = FileManager.read(Configuration.DATA_MODEL_FILE_NAME);
		
		return readResponse.isStatus();
	}
}
