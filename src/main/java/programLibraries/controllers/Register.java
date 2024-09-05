package programLibraries.controllers;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import programLibraries.CSVDAO;
import programLibraries.Iframe;
import programLibraries.Validator;
import programLibraries.Video;
import programLibraries.WebResponse;

import java.io.IOException;

/**
 * Servlet implementation class Register
 */
public class Register extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Register() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		response.setHeader("Content-Type", "application/json");
		if(
				request.getParameter("no") != null &&
				Validator.isNumber(request.getParameter("no")) &&
				
				request.getParameter("user") != null &&
				Validator.isEmail(request.getParameter("user")) &&
				
				request.getParameter("channel") != null &&
				Validator.isAccountName(request.getParameter("channel")) &&
				
				request.getParameter("creationDate") != null &&
				Validator.isDate(request.getParameter("creationDate")) &&
				
				//request.getParameter("description") != null &&
				
				request.getParameter("likes") != null &&
				Validator.isNumber(request.getParameter("likes")) &&
				
				request.getParameter("views") != null &&
				Validator.isNumber(request.getParameter("views")) &&
				
				request.getParameter("category") != null &&
				Validator.isValidOption(request.getParameter("category")) &&
				
				request.getParameter("iframe") != null &&
				Validator.isIframe(request.getParameter("iframe"))
		) {
			String no = request.getParameter("no");
			String user = request.getParameter("user");
			String channel = request.getParameter("channel");
			String creationDate = request.getParameter("creationDate");
			String description = "";
			if(request.getParameter("description") != null) {
				description = Validator.cleanDescription(request.getParameter("description"));
			}
			String likes = request.getParameter("likes");
			String views = request.getParameter("views");
			String category = request.getParameter("category");
			
			String iframeString = request.getParameter("iframe")
					.replaceAll("<iframe", "")
					.replaceAll("</iframe>", "")
					.replaceAll("\"", "\'");
			Iframe iframe = new Iframe(iframeString, "");
			
			Video video = new Video(String.format("%s",no), user, channel, creationDate, description, likes, views, category, iframe);
			CSVDAO dao = new CSVDAO();
			
			WebResponse webResponse = new WebResponse();
			webResponse.setContent("Error. No se ha podido guardar el registro");
			
			if(dao.save(video)) {
				webResponse.setStatus(true);
				webResponse.setContent("Se ha efectuado el registro de forma satisfactoria");
			}
			
			response.getWriter().append(webResponse.toJSON());
		} else {
			
			WebResponse webResponse = new WebResponse();
			webResponse.setContent("Error. Los parametros son incorrectos");
			response.getWriter().append(webResponse.toJSON());
		}
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
