package programLibraries.controllers;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import programLibraries.CSVDAO;
import programLibraries.WebResponse;

import java.io.IOException;

/**
 * Servlet implementation class ClearData
 */
public class ClearData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ClearData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		if(request.getParameter("deletionDate") != null) {
			
			String deletionDate = request.getParameter("deletionDate");
			
			CSVDAO dao = new CSVDAO();
			
			WebResponse webResponse = new WebResponse();
			webResponse.setStatus(false);
			webResponse.setContent("Error. No se ha podido limpiar el registro");
			
			if(dao.clear(deletionDate)) {
				webResponse.setStatus(true);
				webResponse.setContent("Se ha limpiado el registro de forma satisfactoria");
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
