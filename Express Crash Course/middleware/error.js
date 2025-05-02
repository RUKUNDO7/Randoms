// const errorHandler = (err, req, res, next) => {
//     //res.status(404).json({message: 'Error'});
//     res.status(404).json({message: err.message});
// }

const errorHandler = (err, req, res, next) => {
    if(err.status) {
        res.status(err.status).json({message: err.message});
    } else {
        res.status(500).json({message: err.message});
    }
    
}
export default errorHandler;