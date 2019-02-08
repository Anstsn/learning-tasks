/**
 * Функция расчитывает кол-во и типы купюр для заданной суммы,
 * в зависимости от лимита в банкомате
 *
 * @export
 * @param {number} amount запрашиваемая сумма
 * @param {*} limits лимиты банкомата
 * @returns {*} купюры и обновленные лимиты
 */
export function getMoney(amount: number, limits: any): any {
    /** Возможные типы купюр, в зависимости от лимитов */
    const moneyTypes = Object.keys(limits).map(k => +k).sort((a, b) => b - a);

    /** Операционные лимиты */
    let operationLimits = { ...limits };

    /** Запрещенные к выдаче купюры */
    const forbiddenMoneyTypes = [];

    /** Операционный остаток суммы для выдачи */
    let remain = amount;

    /** Результаты выдачи */
    const moneySet: any = {
        limits,
        res: {},
    };

    let searching = true;

    while (searching) {
        moneyTypes.forEach(moneyType => {
            if (remain > 0) {
                if (forbiddenMoneyTypes.indexOf(moneyType) < 0) {
                    if (remain >= moneyType) {
                        let cur = ~~(remain / moneyType);

                        if (operationLimits[moneyType] < cur) {
                            cur = operationLimits[moneyType];
                        }

                        operationLimits[moneyType] -= cur;

                        if (cur !== 0) {
                            moneySet.res[moneyType] = cur;
                        }

                        remain -= cur * moneyType;
                    }
                }
            }
        });

        // Если после прохода по всем возможным купюрам все-равно осталась невыданная сумма -
        // то это означает что невозможно текущим набором купюр выдать необходимую сумму.
        // Поэтому блокируем максимальную купюру и начинаем заново
        if (remain > 0) {
            /** Номиналы купюр, отсортированные по-убыванию */
            const moneyLimitsArray = Object.keys(operationLimits)
                                                .map(k => +k)
                                                .sort((a, b) => b - a)
                                                .filter(l => forbiddenMoneyTypes.indexOf(l) < 0);

            if (moneyLimitsArray.length > 0) {

                forbiddenMoneyTypes.push(moneyLimitsArray[0]);

                remain = amount;
                moneySet.res = {};
                operationLimits = { ...limits };
            } else {
                searching = false;
            }
        } else {
            searching = false;
        }
    }

    return remain === 0
        ? (moneySet.limits = { ...operationLimits }, moneySet)
        : (moneySet.res = 'warn', moneySet);
}
