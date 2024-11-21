class Quote {
    constructor(string) {
        this.frase = string;
    }

    getFrase() {
        return this.frase;
    }

    toString() {
        return this.getFrase();
    }
}

class motivationalQuotes {
    quotes = [];

    addQuote(string) {
        const tempQuote = new Quote(string);
        this.quotes.push(tempQuote);
    }

    displayAllQuotes() {
        this.quotes.forEach(function (quotesItem) {
            console.log(quotesItem.toString());
        }
        )
    }

    displayRandomQuote() {
        let lenghtofArray = this.quotes.length;
        let randomPosition = Math.floor(Math.random() * lenghtofArray);
        console.log("The random quote for today is: " + this.quotes[randomPosition].toString());
    }

    deleteSpecificQuote(stringtoComparison) {
            for (let i = 0; i < this.quotes.length - 1; i++) {
            let quoteComparison = this.quotes[i].toString();
            if (quoteComparison === stringtoComparison) {
                this.quotes.splice(i, 1);
            }
        }
    }

    replaceSpecificQuote(stringtoComparison,stringToReplace){
        for (let i = 0; i < this.quotes.length - 1; i++) {
            let quoteComparison = this.quotes[i].toString();
            if (quoteComparison === stringtoComparison) {
                this.quotes.splice(i, i,stringToReplace);
            }
        }
    }

}
const teste = new motivationalQuotes;

teste.addQuote("It takes courage to grow up and become who you really are.");
teste.addQuote("Nothing is impossible. The word itself says 'I'm possible!");
teste.addQuote("Attitude is a little thing that makes a big difference.");
teste.addQuote("Champions keep playing until they get it right");
teste.addQuote("Believe you can and you're halfway there.");

teste.displayAllQuotes();

teste.displayRandomQuote();

teste.replaceSpecificQuote("Attitude is a little thing that makes a big difference.","bye bye");

teste.displayAllQuotes();