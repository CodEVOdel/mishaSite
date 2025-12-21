class PopupMessager {
    constructor(link) {
        this.link = link;
        this.linkParent = link.parentNode;
        this.ul_listMassagers = document.createElement("ul");
        this.ul_listMassagers.innerHTML = `
            <li><a href="#" ><img src="assets/icons/ic_call_24px.png" data-image-name="" height="16"></a></li>
            <li><a href="#"><img src="assets/icons/Max.png" height="16"></a></li>
            <li><a href="#"><img src="assets/icons/whatsapp.png" height="16"></a></li>
            <li><a href="#"><img src="assets/icons/viber2.png" height="16"></a></li>
            <li><a href="#"><img src="assets/icons/telegram.png" height="16"></a></li>
        `;
        this.linkParent.appendChild(this.ul_listMassagers);
        this.ul_listMassagers.classList.add("suggestions-social--messengers-hide");
        this.init();
    }

    init() {
        console.log('передаем в клик', this.link)
        this.link.addEventListener('click', (e) => this.onClick(e));

        document.addEventListener('click', (e) => {
            if (!this.ul_listMassagers.contains(e.target) && e.target !== this.link) {
                this.ul_listMassagers.classList.remove("suggestions-social--messengers");
                this.ul_listMassagers.classList.add("suggestions-social--messengers-hide")
            }
        });
    }

    onClick(e) {
        console.log(e);
        e.preventDefault();
        this.ul_listMassagers.classList.remove("suggestions-social--messengers-hide");
        this.ul_listMassagers.classList.add("suggestions-social--messengers")
        this.li_a = this.ul_listMassagers.querySelectorAll("a");
        this.li_a.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                const img_path = e.currentTarget.querySelector('img');
                console.log(img_path.getAttribute("src"));
                const img_link = this.link.querySelector("img").setAttribute("src", img_path.getAttribute("src"))
                this.ul_listMassagers.classList.remove("suggestions-social--messengers");
                this.ul_listMassagers.classList.add("suggestions-social--messengers-hide")
            })
        })
    }
}
