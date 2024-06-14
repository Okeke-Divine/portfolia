import Swal from "sweetalert2";

export function SweetAlertError(text){
    return Swal.fire({
        title: "Error",
        icon: "error",
        text
    })
}