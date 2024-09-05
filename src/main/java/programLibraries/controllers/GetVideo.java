package programLibraries.controllers;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import programLibraries.CSVDAO;
import programLibraries.Configuration;
import programLibraries.FileManager;
import programLibraries.FileManagerResponse;
import programLibraries.WebResponse;

import java.io.IOException;

/**
 * Servlet implementation class GetVideo
 */
public class GetVideo extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetVideo() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		CSVDAO dao = new CSVDAO();
		
		WebResponse webResponse = new WebResponse();
		webResponse.setContent("Error. No se ha podido cargar el registro");
		
		int educational = 0;
		int science = 0;
		int entertaiment = 0;
		int other = 0;
		
		if(dao.load()) {
			
			FileManagerResponse readResponse = FileManager.read(Configuration.DATA_MODEL_FILE_NAME);
			
			if(readResponse.getContent().trim() != "") {
				
				String[] lines = readResponse.getContent().trim().split("\n");
				
				StringBuilder json = new StringBuilder("{");
				
				for(int i = 0; i < lines.length; i++) {
					
					json.append(String.format("\"video%s\"", i + 1));
					json.append(":");
					json.append("{");
					
					String[] values = lines[i].trim().split(",");
					
					json.append(String.format("\"no\":\"%s\"", values[0]));
					json.append(",");
					json.append(String.format("\"user\":\"%s\"", values[1]));
					json.append(",");
					json.append(String.format("\"channel\":\"%s\"", values[2]));
					json.append(",");
					json.append(String.format("\"date\":\"%s\"", values[3]));
					json.append(",");
					json.append(String.format("\"description\":\"%s\"", values[4]));
					json.append(",");
					json.append(String.format("\"likes\":\"%s\"", values[5]));
					json.append(",");
					json.append(String.format("\"views\":\"%s\"", values[6]));
					json.append(",");
					json.append(String.format("\"iframe\":\"%s\"", values[7]));
					json.append(",");
					json.append(String.format("\"category\":\"%s\"", values[8]));
					
					json.append("}");
					
					json.append(",");
					
					int category = Integer.parseInt(values[8]);
					if(category == 2) educational++;
					else if(category == 3) science++;
					else if(category == 4) entertaiment++;
					else if(category == 5) other++;
				}
				
				json.append(String.format("\"educational\":\"%s\"", educational));
				json.append(",");
				json.append(String.format("\"science\":\"%s\"", science));
				json.append(",");
				json.append(String.format("\"entertaiment\":\"%s\"", entertaiment));
				json.append(",");
				json.append(String.format("\"other\":\"%s\"", other));
				json.append("}");
				
				//System.out.println(json.toString());
				
				response.getWriter().append(String.format("{\"status\":\"true\",\"content\":%s}", json.toString()));
				
				return;
			}
		}
			
		webResponse.setStatus(false);
		response.getWriter().append(webResponse.toJSON());
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
