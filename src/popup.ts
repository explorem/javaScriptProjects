export default function () {
    const button = document.querySelector('button');
    const span = document.querySelector('span');
    const div = document.querySelector('.popup');

    button?.addEventListener('click', () => {
        if (div?.classList.contains('hidden')) {
            div?.classList.toggle('hidden');
            button?.classList.toggle('hidden');
        }
    })

    span?.addEventListener('click', () => {
        if (!div?.classList.contains('hidden')) {
            div?.classList.toggle('hidden');
            button?.classList.toggle('hidden');

        }
    })

}