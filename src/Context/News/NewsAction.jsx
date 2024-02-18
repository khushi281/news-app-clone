export const fetchNews = async(topic) => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=YYYYMMDDThhmms&sortBy=publishedAt&apiKey=38139c01ff09478a94bb6f65d589128c`)
    const data = await response.json()
   return data.articles;

}