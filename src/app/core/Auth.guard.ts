import { CanActivateFn } from "@angular/router";
import { usuarioLogado } from "./Auth";

export const authGuard: CanActivateFn = () => {
    return usuarioLogado();
};