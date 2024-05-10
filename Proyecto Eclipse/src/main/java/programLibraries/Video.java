package programLibraries;

/*
 * Entidad para representar los videos almacenados en el BackEnd
 * @version 0.1.1
 * @date 2024/04/29
 * @since 2024/04/28
 * */

public class Video {

	/*Representa el numero video de la categoria*/
	private String no;
	
	/*Representa el email de la persona responsable de registrar el video*/
	private String email;
	
	/*Representa la cuenta que subio el video registrado a YouTube*/
	private String accountName;
	
	/*Representa la fecha de creacion del video*/
	private String creationDate;
	
	/*Representa la descripcion del video*/
	private String description;
	
	/*Representa la cantidad de likes que posee el video hasta el momento*/
	private String likes;
	
	/*Representa la cantidad de visitas que posee el video hasta el momento*/
	private String views;
	
	/*Representa la etiqueta HTML iframe que permite ver el video*/
	private Iframe iframe;
	private String type;

	/*Constructor para un nuevo objeto de tipo Video*/
	public Video(String no, String user, String channel, String creationDate, String description, String likes, String views, String category, Iframe iframe) {
		this.email = user;
		this.accountName = channel;
		this.description = description;
		this.type = category;
		this.iframe = iframe;
		this.creationDate = creationDate;
		this.likes = likes;
		this.views = views;
		this.no = no;
	}
	
	/*
	 * 
	 * */
	public String getNo() {
		return no;
	}

	public void setNo(String no) {
		this.no = no;
	}
	
	public String getUser() {
		return email;
	}
	public void setUser(String user) {
		this.email = user;
	}
	public String getChannel() {
		return accountName;
	}
	public void setChannel(String channel) {
		this.accountName = channel;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCategory() {
		return type;
	}
	public void setCategory(String category) {
		this.type = category;
	}
	public Iframe getIframe() {
		return iframe;
	}
	public void setIframe(Iframe iframe) {
		this.iframe = iframe;
	}
	
	public String getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(String creationDate) {
		this.creationDate = creationDate;
	}

	public String getLikes() {
		return likes;
	}

	public void setLikes(String likes) {
		this.likes = likes;
	}

	public String getViews() {
		return views;
	}

	public void setViews(String views) {
		this.views = views;
	}
	
	/*Formatea el objeto de tipo Video a una cadena de texto para ser guardado en el archivo csv*/
	public String toString() {
		return String.format("%s,%s,%s,%s,%s,%s,%s,%s,%s\n", this.no, this.email, this.accountName, this.creationDate, this.description, this.likes, this.views, this.iframe.toString(), this.type);
	}
}
