// multilingual support
const RUSSIAN = 'rus';
const ENGLISH = 'eng';
let currentLanguage = RUSSIAN;
let ml = {
    [RUSSIAN]: {
        title: "��������� � ������",
        flag: "img/rus-flag.svg",
        header: "��������� ��� ������ � ������",
        aside: "�������� ������ ���������",
        colontitle: "��������� ���������:",
        subtitle: "<p>�������� ��������� � ���� �����.</p>",
        plus: {head: "��������� ���",
            subtitle: "<h2>��������� � ���� ����� ����</h2>",
            content: ["����", "���", "(��������� ������������� �����)"],
            result: "���������"},
        diff: {head: "������� ����",
            subtitle: `<h2>������� ���</h2>
                <p>��������� ������� � ���� ����� ��������� � ������ ������.</p>`,
            content: ["������ ����","��������� ����"],
            difference: ["������� ����� ������ �������� ", " ����."],
            years: "���",
            months: "�������"
        },
        bank: {head: "���������� �������",
            subtitle: `<h2>���������� �������</h2>
<p>��������� ���������� ������� �� ��������� ������ � ������� ���������� ������.</p>`,
            content: ["������ ����","��������� ����","������","��������"],
            later: "��������� ���� ������ ���� �����.",
            result: "����� ��������� ��������: "},
        button: "����������",
        twoDates: "���������� ������ ��� ����.",
        footer: "��� ��������� ������� � ������ (������)<span class=copy>&copy; demtr 2024</span>"
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
