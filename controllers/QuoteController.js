import axios from "axios"

const getQuote = async (req, res) => {
  try {
    const response = await axios.get("https://stoic-quotes.com/api/quote")

    let quote = response.data.quote

    let author = response.data.author

    res.status(200).send({
      status: 200,
      message: "Successfully retrieved a random quote!",
      quote: quote.trimEnd(),
      author: author.trimEnd(),
    })
  } catch (error) {
    console.error(error)

    res.status(400).send({ status: 400, msg: "Error getting a random quote!" })
  }
}

export { getQuote }
