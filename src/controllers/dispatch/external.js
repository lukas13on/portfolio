import Swal from "sweetalert2";

export default function (url, _blank) {
    Swal.fire({
        title: "Confirmar ação",
        text: "Você será redirecionado para uma página externa, deseja prosseguir?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Abrir",
        cancelButtonText: "Cancelar"
    }).then(function (result) {
        if (result.value) {
            var option = _blank === true ? "_blank" : "_self";
            window.open(url, option);
        }
    });
};