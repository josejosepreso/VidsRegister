<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html data-bs-theme>
	<head>
		<meta name="version" content="0.1.3">
		<meta name="date" content="2024/04/29">
		<meta name="since" content="2024/04/26">
		<meta charset="UTF-8">
		<title>Vids Register</title>
		<link rel="stylesheet" href="assets/css/bootstrap.min.css" media="all" />
		<link rel="stylesheet" href="assets/css/style.css" media="all" />
	</head>
	<body>
	
		<section class="container">
			<section id="container" class="row">
				<section id="videos" class="overflow-scroll my-3 shadow p-3 rounded col">
					<p>Videos registrados</p>
					<hr>
					
					
					
				</section>
				
				<section id="registry" class="col-4 mx-3 mt-3 text-center">
					<section class="mb-3 shadow p-3 bg-body-tertiary rounded row">
						<strong>Academico</strong>
						
						<div class="my-1 bg-primary form-control">
							<p id="educational" class="placeholder-glow">
								<span class="placeholder col-12"></span>
							</p>
						</div>
						<div class="my-1 bg-primary form-control">
							<p id="science" class="placeholder-glow">
								<span class="placeholder col-12"></span>
							</p>
						</div>	
					</section>
					
					<section class="mb-3 shadow p-3 bg-body-tertiary rounded row">
						<strong>No Educativo</strong>
						
						<div class="my-1 bg-primary form-control">
							<p id="entertaiment" class="placeholder-glow">
								<span class="placeholder col-12"></span>
							</p>
						</div>
						<div class="my-1 bg-primary form-control">
							<p id="other" class="placeholder-glow">
								<span class="placeholder col-12"></span>
							</p>
						</div>
					</section>
					<section class="mb-3 shadow p-3 bg-body-tertiary rounded row">
						<p class="fw-medium text-primary">Total de Videos</p>
						<h1 id="totalVideos" class="text-primary display-1 placeholder-glow">
							<span class="placeholder col-12"></span>
						</h1>
					</section>
				</section>
			</section>
			<div id="bottomBar" class="d-flex justify-content-center mt-5">
				<nav class="navbar bg-body-tertiary">
					<div class="container shadow d-flex justify-content-start">
					    <a style="cursor:default" class="navbar-brand" href="#">Vids Register - Jose Bautista</a>
						<span style="cursor:pointer" class="dropup">
					    	<a class="mx-2 nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Inicio</a>
						    <ul class="dropdown-menu">
						    	<li><a id="addVideo" class="dropdown-item" href="#">Agregar video</a></li>
						        <li><hr class="dropdown-divider"></li>
						    	<li><a id="clearData" class="text-light bg-danger dropdown-item" href="#">Limpiar Modelo de Datos</a></li>
					        </ul>
						</span>
						<span style="cursor:pointer" class="dropup">
					    	<a class="mx-2 nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Tema</a>
						    <ul class="dropdown-menu">
						    	<li><a id="labelLight" class="dropdown-item" href="#"></a></li>
						    	<li><a id="labelDark" class="dropdown-item" href="#"></a></li>
					        </ul>
						</span>
						<a id="about" class="mx-2 nav-link" href="#">Acerca de</a>
					</div>
				</nav>
			</div>
		</section>
		
		<div class="fs-6 modal fade" id="addVideoModal" tabindex="-1" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5">Crear un nuevo registro de video</h1>
        				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<section class="mb-4">
							<label for="">Ingrese la informacion para el registro del tipo de video.</label>
						</section>
						<section class="mb-2">
							<label for="">Responsable de quien realiza este registro (email)</label>
						</section>
						<section class="mb-4">
							<input id="user" class="form-control" name="" type="text" value="" placeholder="nombre@institucion.com"/>
						</section>
						<section class="mb-2">
							<label for="">Nombre del canal de YouTube</label>
						</section>
						<section class="mb-4">
							<input id="channel" class="form-control" name="" type="text" value="" placeholder="Nombre del canal de YouTube"/>
						</section>
						
						<section class="mb-2">
							<label for="">Fecha de creacion del video</label>
						</section>
						<section class="mb-4 row">
							<div class="col">
								<input id="year" class="col form-control" name="" type="text" value="" placeholder="Año"/>
							</div>
							<div class="col">
								<input id="month" class="col form-control" name="" type="text" value="" placeholder="Mes"/>
							</div>
							<div class="col">
								<input id="day" class="col form-control" name="" type="text" value="" placeholder="Dia"/>
							</div>
						</section>
						
						<section class="mb-2">
							<label for="">Descripcion del video</label>
						</section>
						<section class="mb-4">
							<textarea maxlength="512" id="description" class="form-control" name="" type="text" value="" placeholder="Descripcion del video"/></textarea>
						</section>
						
						<section class="mb-2">
							<label for="">Cantidad de likes hasta el momento</label>
						</section>
						<section class="mb-4">
							<input id="likes" class="form-control" name="" type="text" value="" placeholder="Cantidad de likes"/>
						</section>
						
						<section class="mb-2">
							<label for="">Cantidad de visualizaciones hasta el momento</label>
						</section>
						<section class="mb-4">
							<input id="views" class="form-control" name="" type="text" value="" placeholder="Cantidad de visualizaciones"/>
						</section>
						
						<section class="mb-2">
							<label for="">Categoria de video</label>
						</section>
						<section class="mb-4">
							<select id="category" class="form-select" aria-label="Default select example">
								<option value="1" selected>Seleccione un tipo de video</option>
								<option value="2">Academico - educativo</option>
								<option value="3">Academico - cientifico</option>
								<option value="4">No educativo - entretenimiento</option>
								<option value="5">No educativo - otro</option>
							</select>
						</section>
						<section>
							<label for="">iFrame del video a registrar</label>
						</section>
						<section>
							<input id="iframe" class="form-control" name="" type="text" value="" placeholder="Codigo iFrame del video"/>
						</section>
					</div>
					
					<section class="row p-2">
	      				<section class="col" id="answer"></section>
	      			</section>
	      			
					<div class="modal-footer">
						<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
        				<button id="sendButton" type="button" class="btn btn-success">Guardar</button>
					</div>
				</div>
			</div>
		</div>
		
		<div class="fs-6 modal modal-lg fade" id="aboutModal" tabindex="-1" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5">Acerca de</h1>
        				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<p>
							El sistema permite al usuario registrar videos de YouTube mediante un formulario el cual se invoca con el menú de <strong>Inicio</strong> colocado en la barra inferior de la vista principal.
							Se le solicitará información del video a agregar.
							<br>
							<br>
							Los videos que fueron agregados aparecen en secuencia enumerados por orden de antigüedad en la columna izquierda de la vista principal.
							<br>
							Para cada video agregado se muestra un botón con el cual se podrá, mediante una ventana modal, reproducir el video a través del codigo del iframe ingresado en el formulario, también se muestra información adicional del video (likes, vistas, fecha de publicación y descripción).
							<br>
							<br>
							En la columna derecha de la vista principal se muestra información acerca de los videos agregados:
							<ul>
								<li><p>Cantidad de cierta categoria de videos</p></li>
								<li><p>Cantidad total de videos agregados</p></li>
							</ul>
							Mediante el menú de <strong>Inicio</strong> de la barra inferior se puede limpiar todo el modelo de datos, eliminando todos los videos de la vista principal, esta limpieza deja un registro en forma de archivo indicando el momento en el cual se realizó la limpieza.
							<br>
							<br>
							El usuario puede personalizar el aspecto visual de la vista principal mediante el menú de <strong>Tema</strong> en la barra inferior.
						</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>
					</div>
				</div>
			</div>
		</div>
		
		<div class="fs-6 modal fade" id="clearDataModal" tabindex="-1" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5">Confirmacion</h1>
        				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<p>¿Desea limpiar el modelo de datos?</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
						<button id="deleteConfirm" type="button" class="btn btn-danger" data-bs-dismiss="modal">Limpiar</button>
					</div>
				</div>
			</div>
		</div>
		
		<div class="fs-6 modal modal-xl fade" id="watchVideoModal" tabindex="-1" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h1 id="videoTitle" class="modal-title fs-5"></h1>
        				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body overflow-scroll">
						<div id="videoIframe"></div>
						
						<div class="my-4">
							<span class="me-2">
								<span>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-event-fill" viewBox="0 0 16 16">
										<path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"/>
									</svg>
								</span>
								<span id="creationDate"></span>
							</span>
							<span class="mx-2">
								<span>
									<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
										<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
										<path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
									</svg>
								</span>
								<span id="viewsAmount">
								</span>
							</span>
							<span class="mx-2">
								<span>
									<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
										<path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
									</svg>
								</span>
								<span id="likesAmount">
								</span>
							</span>
						</div>
						<div style="word-wrap:break-word;" id="videoDescription">
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-success" data-bs-dismiss="modal">OK</button>
					</div>
				</div>
			</div>
		</div>
		
		<script src="assets/js/bootstrap.bundle.min.js"></script>
		<script src="assets/js/Configuration.js"></script>
		<script src="assets/js/Video.js"></script>
		<script src="assets/js/Modal.js"></script>
		<script src="assets/js/Store.js"></script>
		<script src="assets/js/Action.js"></script>
		<script src="assets/js/controller.js"></script>
		<script src="assets/js/main.js"></script>
	</body>
</html>
