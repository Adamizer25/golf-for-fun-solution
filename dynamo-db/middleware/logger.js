export default (req, res, next) => {
    console.log('ip:', req.ip)
    console.log(req.originalUrl)
    console.log(req.body)
    next()
}
