import { Injectable } from "@angular/core";
import swal from "sweetalert2";

const sweet = swal.mixin({
    showCloseButton: true
});

@Injectable({
    providedIn: "root"
})
export class AlertService {
    constructor() { }

    swalCustom = () => {
        return sweet;
    }

    swalSuccess(message, title?) {
        return sweet.fire({
            title: title,
            text: message,
            type: "success"
        });
    }

    swalError(message, title?: 'Oops...') {
        return sweet.fire({
            title: title,
            text: message,
            type: "error"
        });
    }
}
