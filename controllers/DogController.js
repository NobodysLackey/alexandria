import axios from "axios"

const getBreeds = async (req, res) => {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/list/all")

    const breeds = Object.keys(response.data.message)

    res.status(200).send({
      status: 200,
      message: "Successfully retrieved dog breed list!",
      breeds: breeds,
    })
  } catch (error) {
    console.error(error)

    res.status(400).send({ status: 400, msg: "Error getting dog breed list!" })
  }
}

const getImageByBreedName = async (req, res) => {
  try {
    const response = await axios.get(
      `https://dog.ceo/api/breed/${req.params.breed.toLowerCase()}/images/random`
    )

    res.status(200).send({
      status: 200,
      message: "Successfully retrieved random dog picture!",
      picture: response.data.message,
    })
  } catch (error) {
    if (
      error?.response?.data?.message ===
      "Breed not found (master breed does not exist)"
    ) {
      res.status(404).send({
        status: 404,
        message:
          "Breed not found. Breed param must match a breed name from the breeds list exactly.",
      })
    } else {
      console.error(error)

      res
        .status(400)
        .send({ status: 400, msg: "Error getting random dog picture!" })
    }
  }
}

export { getBreeds, getImageByBreedName }
