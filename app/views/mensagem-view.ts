import { View } from './view.js';

export class MensagemView extends View<string> {
    
    template(msg: string): string {
        return `<p class="alert alert-info">${msg}</p>`;
    }

    update(model: string): void {
        this.elemento.innerHTML = this.template(model)
    }
}