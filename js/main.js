// JS
function formatTitleDate(date = new Date()) {
    let { day, month, year, weekday } = new Intl.DateTimeFormat('en', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        weekday: 'long',
    }).formatToParts(date).reduce((acc, part) => {
        if (part.type != 'literal') {
            acc[part.type] = part.value;
        }
        return acc;
    }, Object.create(null));
    return `${day} ${month} ${year}, ${weekday}`;
}

document.getElementsByClassName('date')[0].textContent = formatTitleDate();