export default function buttonIframe() {

    const buttonCustomizer = document.createElement('button');
    buttonCustomizer.innerHTML = "custom";
    document.body.appendChild(buttonCustomizer);

    buttonCustomizer.addEventListener('click', () => {
        const div = document.createElement('div');
        div.classList.add('custom-iframe');
        div.style.cssText =
            'position: fixed;' +
            'top: 0;' +
            'left: 0;' +
            'width: 100%;' +
            'height: 100%;' +
            'background-color: rgba(0, 0, 0, 0.5);' +
            'z-index: 999;'
        document.body.appendChild(div);

        const iframe: HTMLIFrameElement = document.createElement("iframe");
        iframe.name = "frame";
        iframe.style.cssText =
            'position: fixed;' +
            'top: 50%;' +
            'left: 50%;' +
            'transform: translate(-50%, -50%);' +
            'width: 70%;' +
            'height: 70%;' +
            'z-index: 1000;' +
            'background-color: white;'
        document.body.appendChild(iframe);

        const closeIframe = document.createElement('p');
        closeIframe.innerHTML = 'Close';

        closeIframe.style.cssText =
            'color: black;' +
            'top: 0%;' +
            'right: 100%;' +
            'width: 1.5rem;';
        iframe.contentDocument.body.appendChild(closeIframe);
        closeIframe.addEventListener('click', () => {
            document.body.removeChild(iframe);
            document.body.removeChild(div);
        })
    });
}