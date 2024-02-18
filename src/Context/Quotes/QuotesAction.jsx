export const fetchQuotes = async() => {
    const response = await fetch("https://quotable.io/random")
    const data = response.json()
    return data
}