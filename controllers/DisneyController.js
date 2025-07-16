import axios from "axios"

const getAllCharacters = async (req, res) => {
  try {
    const response = await axios.get("https://api.disneyapi.dev/character")

    const characters = response.data.data

    res.status(200).send({
      status: 200,
      message: "Successfully retrieved Disney characters!",
      characters: characters,
      next: response.data.info.nextPage
    })
  } catch (error) {
    res.status(400).send({ status: 400, msg: "Error getting Disney characters!" })
  }
}

const getCharacter = async (req, res) => {
  try {
    const response = await axios.get(`https://api.disneyapi.dev/character?name=${req.params.name}`)

    const character = response.data.data[0]

    res.status(200).send({
      status: 200,
      message: "Successfully retrieved a Disney character!",
      character: character,
    })
  } catch (error) {
    console.error(error)

    res.status(400).send({ status: 400, msg: "Error getting a Disney character!" })
  }
}

export { getAllCharacters, getCharacter }
