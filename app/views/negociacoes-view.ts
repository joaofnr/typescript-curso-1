import { Negociacoes } from "../models/negociacoes.js";
import { View } from './view.js';

export class NegociacoesView extends View<Negociacoes> {

    public update(model: Negociacoes): void {
        this.elemento.innerHTML = this.template(model)
    }
    
    protected template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
                    return `
                        <tr>
                            <td>${this.dataIntl(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
        `;
    }

    private dataIntl(data: Date): string {
        return new Intl.DateTimeFormat().format(data)
    }
}