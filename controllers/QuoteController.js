import axios from "axios"

const getQuote = async (req, res) => {
  try {
    const response = await axios.get("https://stoic-quotes.com/api/quote")
    console.log(response)
    res.status(200).send({
      status: 200,
      message: "Successfully retrieved a random quote!",
      quote: response.data.text,
      author: response.data.author
    })
  } catch (error) {
    console.error(error)

    res.status(400).send({ status: 400, msg: "Error getting a random quote!" })
  }
}

export { getQuote }
