document.addEventListener('DOMContentLoaded', function () {
    const boxOne = document.querySelector('.box-one');
    const boxTwo = document.querySelector('.box-two');
    isDropped = false;
    isDroppedTwo = false;

    boxOne.addEventListener('dragleave', (e) => {
        isDropped = false;
        e.target.style.backgroundColor = 'white';
    })

    boxOne.addEventListener('dragend', (e) => {
        e.preventDefault();
        if (!isDropped) {
            e.target.style.backgroundColor = '#b90404';
            return;
        }
        e.target.style.cursor = 'default';
        e.target.draggable = false;
    })

    boxTwo.addEventListener('dragenter', (e) => {
        e.preventDefault()
        e.target.style.border = '2px solid red';
    })

    boxTwo.addEventListener('dragleave', (e) => {
        isDroppedTwo = false;
        e.target.style.border = 'none';
    })

    boxTwo.addEventListener('dragover', (e) => {
        e.preventDefault()
    })

    boxTwo.addEventListener('drop', (e) => {
        e.target.style.backgroundColor = '#b90404';
        e.target.style.border = 'none';
        isDropped = true;
        e.target.style.cursor = 'move';
        e.target.draggable = true;
    });

    boxTwo.addEventListener('dragleave', (e) => {
        e.target.style.backgroundColor = 'white';
    });

    boxTwo.addEventListener('dragend', (e) => {
        e.preventDefault();
        if (!isDroppedTwo) {
            e.target.style.backgroundColor = '#b90404';
            return;
        }
        e.target.style.cursor = 'default';
        e.target.draggable = false;
    })

    boxOne.addEventListener('dragenter', (e) => {
        e.preventDefault();
        if (isDropped) {
            e.target.style.border = '2px solid red';
        }
    })

    boxOne.addEventListener('dragleave', (e) => {
        e.target.style.border = 'none';
    })

    boxOne.addEventListener('dragover', (e) => {
        e.preventDefault()
    });

    boxOne.addEventListener('drop', (e) => {
        e.target.style.backgroundColor = '#b90404';
        e.target.style.border = 'none';
        isDroppedTwo = true;
        e.target.style.cursor = 'move';
        e.target.draggable = true;
    });
});