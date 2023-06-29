function openPage(page, target) {
    let url = './../content/' + page + '.html'
    
    let xml = new XMLHttpRequest();
    xml.onreadystatechange = () => {
        let ready = xml.readyState == 4
        let status = xml.status == 200
        if (ready && status) {
            document.getElementById(target).innerHTML = xml.responseText
        }
    }

    xml.open('GET', url, true)
    xml.send()
}