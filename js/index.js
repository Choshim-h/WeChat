let timeout = null;

const vm = new Vue({
    el: "#wrapper",
    data: {
        src: "img/Choshim.jpg",
        todos: [
            { text: "微信" },
            { text: "通讯录" },
            { text: "收藏" },
            { text: "聊天文件" },
        ],
        lot: "更多",
        tit: "发起群聊",
        alist,
        list,
        search: '',
        wIndex: 0
    },
    mounted() {
        this.handleSearch();
    },
    methods: {
        handleSearch() {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                const search = this.search.trim();
                this.alist = (search ? alist.filter(item => item.name.indexOf(search) != -1) : alist);
            }, 100)
        }
    }
})


