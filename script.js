(function(){
    const coord = [Math.round(Math.random() * (10 - 4) + 4), Math.round(Math.random() * (10 - 1) + 1)];
    let direction = 'rigth'
    let count = 0
    const snakeBody = [document.querySelector('[posX="' + (coord[0] - 1) + '"][posY="' + coord[1] + '"]'),
        document.querySelector('[posX="' + (coord[0] - 2) + '"][posY="' + coord[1] + '"]'),
        document.querySelector('[posX="' + (coord[0] - 3) + '"][posY="' + coord[1] + '"]')
    ];
    const scoreField = document.querySelector('.score');
    let speed = 500;
    
    
    const renderSnake = function () {
        for (let i = 0; i < snakeBody.length; i++) {
            snakeBody[i].classList.add('body')
        }
        snakeBody[0].classList.add('head')
    }
    
    const renderMouse = function () {
        const coord = [Math.round(Math.random() * (10 - 1) + 1), Math.round(Math.random() * (10 - 1) + 1)];
        const mouse = document.querySelector('[PosX="' + coord[0] + '"][posY="' + coord[1] + '"]')
        while (mouse.classList.contains('body')) {
            const coord = [Math.round(Math.random() * (10 - 1) + 1), Math.round(Math.random() * (10 - 1) + 1)];
            const mouse = document.querySelector('[PosX="' + coord[0] + '"][posY="' + coord[1] + '"]')
        }
        mouse.classList.add('mouse');
    }
    
    const scoreCount = function () {
        count++
        scoreField.textContent = count;
    }
    
    const move = function () {
        const body = snakeBody
        const headCoord = [body[0].getAttribute('posX'), body[0].getAttribute('posY')]
        const newBody = function () {
            if (body[0].classList.contains('mouse')) {
                body[0].classList.remove('mouse');
                renderMouse();
                body.push(body[body.length - 1].classList.add('body'));
                scoreCount();
                speed = speed - 30
    
                console.log(speed)
            }
        }
    
        const collisionDetection = function () {
            if (body[0].classList.contains('head') && body[0].classList.contains('body')) {
                clearInterval(interval);
                alert(`Game Over, your score ${count}`);
    
            }
        }
    
        const renderSnake = function (newHead) {
            body[0].classList.remove('head');
            body[body.length - 1].classList.remove('body');
            body.unshift(newHead)
            newBody();
            body.pop();
            body[0].classList.add('head')
            collisionDetection();
            for (let i = 0; i < body.length; i++) {
                body[i].classList.add('body')
            }
    
        }
    
        if (direction == 'rigth') {
            if (headCoord[0] < 10) {
                let newHead = document.querySelector('[PosX="' + (+headCoord[0] + 1) + '"][posY="' + headCoord[1] + '"]')
                renderSnake(newHead)
    
            } else {
                let newHead = document.querySelector('[PosX="' + 1 + '"][posY="' + headCoord[1] + '"]')
                renderSnake(newHead);
            }
        } else if (direction == 'up') {
            if (headCoord[1] < 10) {
                let newHead = document.querySelector('[PosX="' + headCoord[0] + '"][posY="' + (+headCoord[1] + 1) + '"]')
                renderSnake(newHead)
    
            } else {
                let newHead = document.querySelector('[PosX="' + headCoord[0] + '"][posY="' + 1 + '"]')
                renderSnake(newHead);
                console.log('up')
            }
        } else if (direction == 'left') {
            if (headCoord[0] > 1) {
                let newHead = document.querySelector('[PosX="' + (+headCoord[0] - 1) + '"][posY="' + headCoord[1] + '"]')
                renderSnake(newHead)
    
            } else {
                let newHead = document.querySelector('[PosX="' + 10 + '"][posY="' + headCoord[1] + '"]')
                renderSnake(newHead);
            }
        } else if (direction == 'down') {
            if (headCoord[1] > 1) {
                let newHead = document.querySelector('[PosX="' + headCoord[0] + '"][posY="' + (+headCoord[1] - 1) + '"]')
                renderSnake(newHead)
    
            } else {
                let newHead = document.querySelector('[PosX="' + headCoord[0] + '"][posY="' + 10 + '"]')
                renderSnake(newHead);
            }
        }
    
    
    }
    
    const directionChange = function () {
        window.addEventListener('keydown', function (e) {
            if (e.keyCode == 39 && direction != 'left') {
                direction = 'rigth'
            } else if (e.keyCode == 37 && direction != 'right') {
                direction = 'left';
            } else if (e.keyCode == 38 && direction != 'down') {
                direction = 'up';
            } else if (e.keyCode == 40 && direction != 'up') {
                direction = 'down';
            }
        })
    }
    
    renderSnake();
    renderMouse();
    directionChange()
    let interval = setInterval(() => {
        move()
    }, speed);
})();
