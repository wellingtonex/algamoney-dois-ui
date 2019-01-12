
export class Utils {

    static readonly REGEX_CPF = '[0-9]{3}\\.?[0-9]{3}\\.?[0-9]{3}\\-?[0-9]{2}';
    static readonly REGEX_EMAIL = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';

    static _configuracaoData = {
        firstDayOfWeek: 1,
        dayNames: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',
            'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        today: 'Hoje',
        clear: 'Limpar'
    };

    static get configuracaoData(): {
        firstDayOfWeek: number; dayNames: string[]; dayNamesShort: string[];
        dayNamesMin: string[]; monthNames: string[]; monthNamesShort: string[]; today: string; clear: string
    } {
        return this._configuracaoData;
    }
}
