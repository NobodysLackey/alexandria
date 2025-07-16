import axios from "axios"

const getDuck = async (req, res) => {
  try {
    const response = await axios.get("https://random-d.uk/api/random")

    const duck = response.data.url

    res.status(200).send({
      status: 200,
      message: "Successfully retrieved a random duck!",
      duck: duck,
    })
  } catch (error) {
    console.error(error)

    res.status(400).send({ status: 400, msg: "Error getting a random duck!" })
  }
}

export { getDuck }
