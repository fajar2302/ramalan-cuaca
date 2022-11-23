class Card extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<div class="card-body">
        <div class="card-text">
            <h3 class="text">Ramalan cuaca</h3>
        </div>
        <div class="card-content">
            <form action="" id="form-action">
                <input type="text" id="InputKeyword" placeholder="Silahkan masukkan Kota/Negara" />
                <button type="submit" class="submit" id="form-toggle">Search</button>
            </form>
        </div>
    </div>`;
    }
}

customElements.define('article-card', Card);