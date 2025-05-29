import axios from 'axios'

const getBreeds = async (req, res) => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all')
    const breeds = Object.keys(response.data.message)
    res.send({
      status: 200,
      message: "Successfully retrieved dog breed list!",
      breeds: breeds
    })
  } catch (error) {
    console.error(error)
    res.status(400).send({ status: 'Error', msg: 'Error getting dog breed list!' })
  }
}

const getImageByBreedName = async (req, res) => {
  try {
    const response = await axios.get(
      `https://dog.ceo/api/breed/${req.params.breed}/images/random`
    )
    res.send({
      status: 200,
      message: "Successfully retrieved random dog picture!",
      picture: response.data.message
    })
  } catch (error) {
    console.error(error)
    res.status(400).send({ status: 'Error', msg: 'Error getting random dog picture!' })
  }
}

export { getBreeds, getImageByBreedName }
