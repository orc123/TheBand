var index = {
    init: function () {
        index.onloadBtnBuyBtn();
        index.onloadBtnCloseModal();
        index.onCloseModal();
    },

    onloadBtnBuyBtn: function () {
        var buyBtns = document.querySelectorAll(".js-buy-ticket");
        for (var i = 0; i < buyBtns.length; i++) {
            buyBtns[i].addEventListener('click', this.showByTickets)
        };
    },
    onloadBtnCloseModal: function () {
        var modal = document.querySelector(".js-modal-close");
        modal.addEventListener('click', this.closeByTickets);
    },
    onCloseModal() {
        var modal = document.querySelector(".js-modal");
        var modalContainer = document.querySelector(".js-modal-container");
        modalContainer.addEventListener('click', function (e) {
            e.stopPropagation();
        });
        modal.addEventListener('click', this.closeByTickets);
    },
    showByTickets: function () {
        var modal = document.querySelector('.js-modal');
        modal.classList.add('open');
    },
    closeByTickets: function () { 
        var modal = document.querySelector('.js-modal');
        modal.classList.remove('open');
    }

};

index.init();