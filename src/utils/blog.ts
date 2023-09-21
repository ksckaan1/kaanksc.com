export const fetchBlogArticles = async () => {
    const RSS_URL = "https://dev.to/feed/ksckaan1"
    await fetch(RSS_URL)
        .then((response: Response) => response.text())
        .then((text: string) => {
            let dp = new DOMParser();
            let doc: Document = dp.parseFromString(text, "text/xml");

            console.log(doc)
        })
}