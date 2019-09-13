(function(win, doc) {

let form = doc.forms.edit,
    result = form.querySelector('img[alt="Result"]');

form.addEventListener("submit", function(e) {
    e.preventDefault();
}, false);

let url = form['url'],
    w = form['w'],
    h = form['h'],
    cropX = form['crop[x]'],
    cropY = form['crop[y]'],
    cropW = form['crop[w]'],
    cropH = form['crop[h]'],
    quality = form['quality'];

function onLoad() {
    this.alt = 'Result';
    this.width = this.offsetWidth;
    this.height = this.offsetHeight;
    // TODO: Show file size, etc.
    this.removeEventListener("load", onLoad);
}

function update() {
    // Automatically update width and height value
    this.name === 'crop[w]' && (w.value = this.value);
    this.name === 'crop[h]' && (h.value = this.value);
    // Detect image type for quality parameter
    let jpg = /\.jpe?g$/.test(url.value),
        // Collect parameter data
        data = {
            'w': +w.value,
            'h': +h.value,
            'crop': cropX.value + ',' + cropY.value + ',' + cropW.value + ',' + cropH.value,
            'quality': jpg ? quality.value : false
        },
    q = "";
    // Build URL query
    for (let i in data) {
        if (data[i]) {
            q += '&' + encodeURIComponent(i) + '=' + encodeURIComponent(data[i]);
        }
    }
    result.src = 'https://cdn.statically.io/img/' + url.value.replace(/^https?:\/\//, "") + (q ? '?' + q.slice(1) : "");
    quality.disabled = !jpg;
    result.addEventListener("load", onLoad, false);
}

let bounce; // Debounce
function bounceUpdate() {
    result.src = "";
    result.alt = 'Loading...';
    result.removeAttribute('width');
    result.removeAttribute('height');
    bounce && clearTimeout(bounce);
    let $ = this;
    setTimeout(function() {
        update.apply($);
        bounce = null;
    }, 10);
}

result.addEventListener("load", onLoad, false);

url.addEventListener("input", bounceUpdate, false);
url.addEventListener("keyup", bounceUpdate, false);

w.addEventListener("input", bounceUpdate, false);
w.addEventListener("keyup", bounceUpdate, false);

h.addEventListener("input", bounceUpdate, false);
h.addEventListener("keyup", bounceUpdate, false);

cropX.addEventListener("input", bounceUpdate, false);
cropX.addEventListener("keyup", bounceUpdate, false);

cropY.addEventListener("input", bounceUpdate, false);
cropY.addEventListener("keyup", bounceUpdate, false);

cropW.addEventListener("input", bounceUpdate, false);
cropW.addEventListener("keyup", bounceUpdate, false);

cropH.addEventListener("input", bounceUpdate, false);
cropH.addEventListener("keyup", bounceUpdate, false);

quality.addEventListener("input", bounceUpdate, false);
quality.addEventListener("change", bounceUpdate, false);

update(); // Fire!

})(window, document);