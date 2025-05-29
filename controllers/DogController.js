const getBreeds = async (req, res) => {
  try {
    
  } catch (error) {
    console.error(error)
    res.status(400).send({ status: 'Error', msg: 'Error getting dog breeds!' })
  }
}

const getImageByBreedName = async (req, res) => {
  try {
    
  } catch (error) {
    console.error(error)
    res.status(400).send({ status: 'Error', msg: 'Error getting dog image!' })
  }
}

export { getBreeds, getImageByBreedName }
