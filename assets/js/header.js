var headerControler = {
    init: function () {
        this.loadMenuForMobile();
        this.selectMenuEvent();
    },

    // Đóng/ mở menu
    loadMenuForMobile: function () {
        var header = document.getElementById('header');
        var mobileMenu = document.getElementById('mobile-menu');
        var headerHeight = header.clientHeight
        mobileMenu.onclick = function () {
            if (header.clientHeight === headerHeight) {
                header.style.height = 'auto';
            }
            else {
                header.style.height = null;
            }
        }
    },

    // Tự động đóng khi chọn menu
    selectMenuEvent() {
        var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
        var header = document.getElementById('header');
        for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].onclick = function (e) {
                var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
                if (!isParentMenu) {
                    header.style.height = null;
                } else {
                    e.preventDefault();
                }
            }
        }
    }
}

headerControler.init();