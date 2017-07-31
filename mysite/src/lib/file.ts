export function readFile(url: string, callback: (text: string) => void) {
        const file = new XMLHttpRequest();
        file.open("GET", url, true);
        file.onreadystatechange = () => {
            if (file.readyState === 4) {
                if (file.status === 200 || file.status === 0) {
                    callback(file.responseText);
                }
            }
        };
        file.send(null);
    }
