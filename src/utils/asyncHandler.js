// const asyncHandler = (fn) => async (req,res,next) =>{  //this is a higher order function(accepts other function as a variable) here next is middleware
//    try {
//     await fn(req,res,next)
//    } catch (error) {
//       res.status(error.code || 500).json({ //his line sets the HTTP response status code based on the error's code property if it exists, or defaults to 500 (Internal Server Error) if there is no code property. res.status() is an Express.js method used to set the HTTP response status.
//         success:false,  //This part sends a JSON response back to the client with a success indicator set to false and the error message extracted from error.message. The error.message property contains a descriptive error message explaining what went wrong during the execution of the code in the try block.
//         message:err.message
//       })
//    }
// }

//there is also another way promises way


const asyncHandler = (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((error)=>next(error))
    }
}
export default asyncHandler