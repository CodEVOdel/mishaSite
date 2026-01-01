

class PopupMessager {
    constructor(link) {
        this.link = link;
        this.linkParent = link.parentNode;
        this.inputMsgSender = document.getElementById("massager");
        this.ul_listMassagers = document.createElement("ul");
        this.ul_listMassagers.innerHTML = `
            <li><a href="#" data-msg="телефон"><img src="assets/icons/ic_call_24px.png"  height="16" style="--i:1;"></a></li>
            <li><a href="#" data-msg="В Макс"><img src="assets/icons/Max.png" height="16" style="--i:1;"></a></li>
            <li><a href="#" data-msg="В Ватсап"><img src="assets/icons/whatsapp.png" height="16" style="--i:1;"></a></li>
            <li><a href="#" data-msg="В Вайбер"><img src="assets/icons/viber2.png" height="16" style="--i:1;"></a></li>
            <li><a href="#" data-msg="В Телеграм"><img src="assets/icons/telegram.png" height="16" style="--i:1;"></a></li>
        `;
        this.linkParent.appendChild(this.ul_listMassagers);
        this.ul_listMassagers.classList.add("suggestions-social--messengers-hide");
        this.init();
    }

    init() {
        // console.log('передаем в клик', this.link)
        this.link.addEventListener('click', (e) => this.onClick(e));

        document.addEventListener('click', (e) => {
            if (!this.ul_listMassagers.contains(e.target) && e.target !== this.link) {
                this.showMenu()
            }
        });


    }

    onClick(e) {
        // console.log(e);
        e.preventDefault();
        this.ul_listMassagers.classList.remove("suggestions-social--messengers-hide");
        this.ul_listMassagers.classList.add("suggestions-social--messengers")
        this.ul_listMassagers.addEventListener('click', (e) => {
            const tegA = e.target;
            if (tegA.tagName != "A") return;
            e.preventDefault();
            const img_path = tegA.querySelector('img');
            this.link.querySelector("img").setAttribute("src", img_path.getAttribute("src"))
            this.hideMenu();
            this.inputMsgSender.dataset.msg = tegA.dataset.msg;
        })

    }
    showMenu() {
        this.ul_listMassagers.classList.remove("suggestions-social--messengers");
        this.ul_listMassagers.classList.add("suggestions-social--messengers-hide")
    }

    hideMenu() {
        this.ul_listMassagers.classList.remove("suggestions-social--messengers");
        this.ul_listMassagers.classList.add("suggestions-social--messengers-hide")
    }
}
