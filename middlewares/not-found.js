const notFound = (req, res) =>{
    res.status(404).json({message: "Route Does not Exist"});
}

module.exports = notFound