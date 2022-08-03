const RSS_URL = "https://dev.to/feed/ksckaan1"
import DP from "dom-parser";

export const fetchBlogArticles = async ()=>{

    let articles = []

    await fetch(RSS_URL).then(data => data.text()).then(data => {
        let domParser = new DP()
        let elems = domParser.parseFromString(data)
        let articlesDOM = elems.getElementsByTagName("item")
        articlesDOM.forEach(articleDOM => {

            let cats = []

            articleDOM.getElementsByTagName("category").forEach(cat => cats.push(cat.innerHTML))

            let article = {
                title: articleDOM.getElementsByTagName("title")[0].innerHTML,
                link: articleDOM.getElementsByTagName("guid")[0].innerHTML,
                pubDate: articleDOM.getElementsByTagName("pubDate")[0].innerHTML,
                categories: cats
            }

            articles.push(article)
        })
    })

    return articles

}