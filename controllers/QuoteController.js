import axios from "axios"

const getQuote = async (req, res) => {
  try {
    const response = await axios.get("https://stoic.tekloon.net/stoic-quote")

    let quote = response.data.data.quote?.endsWith("@")
      ? response.data.data.quote.slice(0, -1)
      : response.data.data.quote

    let author = response.data.data.author

    switch (author) {
      case "TheStoicEmperor":
        author = "Marcus Aurelius"
        break
      case "TheAncientSage":
        author = "Socrates"
        break
      case "Life Math Money":
        author = "Harsh Strongman"
        break
      case "":
        author = "Unknown"
        break
      default:
        author = response.data.data.author
    }

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
