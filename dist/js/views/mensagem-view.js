import { View } from './view.js';
export class MensagemView extends View {
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
    template(msg) {
        return `<p class="alert alert-info">${msg}</p>`;
    }
}
