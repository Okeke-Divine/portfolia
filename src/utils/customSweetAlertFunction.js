import { app_color_primary } from "@/constants/shared/color";
import Swal from "sweetalert2";

export function SweetAlertSuccess(text) {
    return Swal.fire({
        title: "Success",
        icon: "title",
        text,
        confirmButtonColor: app_color_primary
    })
}

export function SweetAlertError(text) {
    return Swal.fire({
        title: "Error",
        icon: "error",
        text,
        confirmButtonColor: app_color_primary
    })
}