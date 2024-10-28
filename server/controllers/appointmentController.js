import AppointmentModel from "../models/appointmentModel.js";
import sendEmail from "../utils/sendEmail.js";

export const createAppointment = async (req, res) => {
  const { name, gender, email, phone, appointmentDate, time, department, doctor, message } = req.body;

  try {
    if (!name || !gender || !email || !phone || !appointmentDate || !time || !department || !doctor) {
      return res.status(400).json({
        success: false,
        message: 'All Fields are Required'
      })
    }

    const newAppointment = new AppointmentModel({
      name,
      gender,
      email,
      phone,
      appointmentDate,
      time,
      department,
      doctor,
      message,
    });

    await newAppointment.save();

    const emailContent = `
     <html>
        <body style="font-family: Arial, sans-serif; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h2 style="color: #4CAF50; text-transform: capitalize;">Dear ${name},</h2>
            <p>Thank you for booking an appointment. Here are the details:</p>
            <ul style="list-style: none;">
            <li>- Department : <span>${department}</span></li>
            <li>- Doctor : <span></span>${doctor}</li>
            <li>- Date : <span></span>${appointmentDate}</li>
            <li>- Time : <span></span>${time}</li>
            </ul>
            
            <p>We look forward to seeing you!</p>
            <br>
            <p style="font-weight: bold; color: #4CAF50;">Best regards,</p>
            <p style="color: #4CAF50; text-transform: uppercase;">Meddical</p>
          </div>
        </body>
      </html>
    `;

    await sendEmail(email, 'Appointment Confirmation', emailContent)

    return res.status(201).json({
      success: true,
      message: 'Appointment Booked. A confirmation email has been sent.'
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error creating appointment",
      error: error.message,
    });
  }
}

export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await AppointmentModel.find();

    res.status(200).json({
      success: true,
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
