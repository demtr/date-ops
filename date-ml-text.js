// multilingual support
const RUSSIAN = 'rus';
const ENGLISH = 'eng';
let currentLanguage = RUSSIAN;
let ml = {
    [RUSSIAN]: {
        title: "Программы с датами",
        flag: "img/rus-flag.svg",
        header: "Программы для работы с датами",
        aside: "Выберите нужную программу",
        colontitle: "Выбранная программа:",
        subtitle: "<p>Выберите программу в меню слева.</p>",
        plus: {head: "Прибавить дни",
            subtitle: "<h2>Прибавить к дате число дней</h2>",
            content: ["дата", "дни", "(допустимы отрицательные числа)"],
            result: "Результат"},
        diff: {head: "Вычесть даты",
            subtitle: `<h2>Разница дат</h2>
                <p>Вычисляет разницу в днях между последней и первой датами.</p>`,
            content: ["Первая дата","Последняя дата"],
            difference: ["Разница между датами составит ", " дней."],
            years: "лет",
            months: "месяцев"
        },
        bank: {head: "Банковский процент",
            subtitle: `<h2>Банковский процент</h2>
<p>Вычисляет банковский процент за указанные период и годовую процентную ставку.</p>`,
            content: ["Первая дата","Последняя дата","Деньги","Проценты"],
            later: "Последняя дата должна быть позже.",
            result: "Сумма процентов составит: "},
        button: "Рассчитать",
        twoDates: "Необходимо ввести две даты.",
        footer: "Эта программа сделана в Москве (Россия)<span class=copy>&copy; demtr 2024</span>"
    },
    [ENGLISH]: {
        title: "Some date programs",
        flag: "img/uk-flag.svg",
        header: "Here are some date oriented programs",
        aside: "Choose program you need",
        colontitle: "Chosen program:",
        subtitle: "<p>Choose program in left side menu.</p>",
        plus: {
            head: "Date plus days",
            subtitle: "<h2>Add some days to date</h2>",
            content: ["date", "days", "(negative number accepted)"],
            result: "Result"
        },
        diff: {
            head: "Date difference",
            subtitle: "<h2>Calculate difference between two dates</h2>",
            content: ["First date", "Last date"],
            difference: ["Difference between two dates is ", " days."],
            years: "years",
            months: "months"
        },
        bank: {
            head: "Bank interest in date interval",
            subtitle: "<h2>Calculate bank interest</h2>",
            content: ["First date", "Last date", "Money", "Percents"],
            later: "Second date must be later",
            result: "The interest is: "
        },
        button: "Count",
        twoDates: "Two dates must be entered",
        footer: "This program was handmade in Moscow, Russia<span class=copy>&copy; demtr 2024</span>"
    }
}
