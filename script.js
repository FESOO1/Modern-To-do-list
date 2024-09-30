const todoTextInput = document.getElementById('todoTextInput');
const addButton = document.getElementById('addButton');
const outputContainer = document.querySelector('.output-container');
const anArray = []

addButton.addEventListener('click', e => {
    e.preventDefault();

    const taskText = todoTextInput.value;

    outputContainer.innerHTML += `
        <div class="output">
        <span class="output-text-itself">${taskText}</span>
        <button class="output-delete-button">
            <svg class="output-delete-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M9 11.7349H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M10.5 15.6543H13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M3 5.5H21M16.0555 5.5L15.3729 4.09173C14.9194 3.15626 14.6926 2.68852 14.3015 2.39681C14.2148 2.3321 14.1229 2.27454 14.0268 2.2247C13.5937 2 13.0739 2 12.0343 2C10.9686 2 10.4358 2 9.99549 2.23412C9.89791 2.28601 9.80479 2.3459 9.7171 2.41317C9.32145 2.7167 9.10044 3.20155 8.65842 4.17126L8.05273 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
        </button>
    </div>
    `;

    anArray.push(taskText);

    localStorage.setItem('task', anArray);

    todoTextInput.value = '';


    // DELETE BUTTON


    const output = document.querySelectorAll('.output');
    const outputDeleteButton = document.querySelectorAll('.output-delete-button');

    for (let i = 0; i < output.length; i++) {
        outputDeleteButton[i].addEventListener('click', () => {
            const taskItself = localStorage.getItem(`task[${i}]`);
            output[i].style.display = 'none';
            if (taskItself) {
            } else {
                alert('Already deleted')
            }
        });
    };

});


function displayData() {
    const taskItself = JSON.stringify(localStorage.getItem('task'));
    if (taskItself) {
        for (let i = 0; i < anArray.length; i++) {
            outputContainer.innerHTML += `
            <div class="output">
                <p class="output-text-itself">${taskItself[i]}</p>
                <button class="output-delete-button">
                    <svg class="output-delete-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                        <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M9 11.7349H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M10.5 15.6543H13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M3 5.5H21M16.0555 5.5L15.3729 4.09173C14.9194 3.15626 14.6926 2.68852 14.3015 2.39681C14.2148 2.3321 14.1229 2.27454 14.0268 2.2247C13.5937 2 13.0739 2 12.0343 2C10.9686 2 10.4358 2 9.99549 2.23412C9.89791 2.28601 9.80479 2.3459 9.7171 2.41317C9.32145 2.7167 9.10044 3.20155 8.65842 4.17126L8.05273 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </button>
            </div>
            `;
        };
    } else {
        console.log('Not found');
    };
};

displayData();