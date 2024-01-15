import { useToast } from "vue-toastification";
export const toastNotLoginError = () =>{
    const toast = useToast();
    toast.error("You must be logged to do this action", {
        timeout: 2000
    });
}
