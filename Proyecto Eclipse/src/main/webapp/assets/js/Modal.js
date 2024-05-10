/**
 * Entidad para representar ventanas modales en el FrontEnd
 * @version 0.1.0
 * @date 2024/04/26
 */

class Modal{
	constructor(obj){
		this.modal = new bootstrap.Modal(obj);
	}

	show(){
		this.modal.show();
	}
}
