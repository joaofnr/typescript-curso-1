import { View } from './view.js';

export class MensagemView extends View<string> {

    public update(model: string): void {
        this.elemento.innerHTML = this.template(model)
    }
    
    protected template(msg: string): string {
        return `<p class="alert alert-info">${msg}</p>`;
    }
}