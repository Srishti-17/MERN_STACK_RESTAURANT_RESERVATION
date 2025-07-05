// import ErrorHandler from "../error/error.js";
// import { Reservation } from"../models/reservationSchema.js";

// export const sendReservation =async (req,resizeBy,next)=>{
//     const{firstName,lastName,email,phone,date,time}=req.body;
// if(firstName || lastName || email ||phone ||date || time){
//     return next(new ErrorHandler("please fill full reseravtion from!",400))
// }
// try{
//     await Reservation.create(firstName,lastName,email,phone,date,time);
// res.status(200).json({
//     success:true,
//     message:"REservation sent succesfully!",
// });
// }catch(error){
// if(error.name === "ValidationError"){
//     const ValidationError =Object.values(error.errors).map(
//         (err)=>err.message
//     );

// return next(new ErrorHandler(ValidationErrors.join(',')),400);

// }
// return next(error)
// }
// };


import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;

  // ✅ Check if any field is missing
  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new ErrorHandler("Please fill the full reservation form!", 400));
  }

  try {
    // ✅ Create reservation with all fields
    await Reservation.create({ firstName, lastName, email, phone, date, time });

    return res.status(200).json({
      success: true,
      message: "Reservation sent successfully!",
    });

  } catch (error) {
    // ✅ Handle Mongoose validation errors
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }

    // ✅ Handle all other errors
    return next(error);
  }
};



