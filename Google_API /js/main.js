var startingBook =0;
const app = Vue.createApp({
    data() {
        return {
            keyword: '',
            result: null
        }
    },
    methods: {
        searchGoogleBooks() {
            fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.keyword + '&startIndex=' + startingBook + '&maxResults=20')
                .then(response => response.json())
                .then(json => this.result = json )
                document.querySelector("#pagination").classList.remove("invisible");
        }
    }
    
})

function nextP() {
    startingBook += 30;
    this.app.searchGoogleBooks;
    this.app.template
}

function previousP() {
    startingBook -= 30;
}