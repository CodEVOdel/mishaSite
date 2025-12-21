class PopupMenu {
    constructor(inputElement, datalist) {
        this.input = inputElement;
        this.data = datalist;
        this.ul = document.createElement('ul');
        this.ul.classList.add('suggestions');
        this.inputParent = this.input.parentNode;
        this.inputParent.style.position = "relative"
        this.inputParent.appendChild(this.ul);
        this.init();
    }

    init() {
        this.input.addEventListener('input', () => this.onInput());
        document.addEventListener('click', (e) => {
            if (!this.input.contains(e.target) && !this.ul.contains(e.target)) {
                this.ul.innerHTML = '';
                this.ul.style.border = 'none';
            }
        });
    }

    onInput() {
        const text = this.input.value.trim().toLowerCase();
        this.ul.innerHTML = '';

        if (text.length < 2) {
            this.ul.style.border = 'none';
            return;
        }

        this.data.forEach(item => {
            if (item.toLowerCase().includes(text)) {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.style.fontSize ="1.2rem";
                li.append(a);
                a.textContent = item;
                a.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.input.value = item;
                    this.ul.innerHTML = '';
                });
                if (li.textContent != "") this.ul.appendChild(li);
                if (this.ul.childElementCount > 0)
                    this.ul.style.border = "solid var(--accentColor)"
                else this.ul.style.border = "none";
            }
        });
    }
}