(function () {
    const field = document.createElement('div');
    document.body.appendChild(field);
    field.classList.add('field');

    const scoreFieldConteiner = document.createElement('div');
    const scoreField = document.createElement('p');
    scoreField.innerText = 0
    scoreFieldConteiner.classList.add('scoreConteiner')
    scoreField.classList.add('score');
    scoreFieldConteiner.appendChild(scoreField);
    document.body.appendChild(scoreFieldConteiner);



    for (let i = 0; i < 100; i++) {
        const excel = document.createElement('div');
        excel.classList.add('excel');
        field.appendChild(excel);
    }
    const excel = document.querySelectorAll('.excel')

    let x = 1;
    let y = 10;

    for (let i = 0; i < 100; i++) {
        if (x < 10) {
            excel[i].setAttribute('posX', x)
            excel[i].setAttribute('posY', y)
            x++
        } else {
            excel[i].setAttribute('posX', x)
            excel[i].setAttribute('posY', y)
            x = 1;
            y--;

        }

    }
})();