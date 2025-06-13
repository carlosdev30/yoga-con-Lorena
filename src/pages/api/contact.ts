import type { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@/lib/db"; // Asegúrate de tener este archivo en /lib/db.ts

type ResponseData = {
  success: boolean;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    // Log non-POST attempts
    console.log(`Attempted non-POST request to /api/contact. Method: ${req.method}`);
    return res
      .status(405)
      .json({ success: false, message: "Método no permitido" });
  }

  const { name, lastName, email, message } = req.body;
  // Log the received request body for debugging.
  console.log("Received /api/contact POST request with body:", { name, lastName, email, message });

  if (!name || !email) {
    // Log warning for missing critical fields.
    console.warn("/api/contact: Name or email missing from request body. Name:", name, "Email:", email);
    return res.status(400).json({
      success: false,
      message: "Nombre y correo electrónico son obligatorios",
    });
  }

  const fullName = lastName ? `${name} ${lastName}` : name;

  try {
    // Log the exact values being used in the SQL query.
    console.log(`Attempting to insert into 'usuarios' table: nombre='${fullName}', email='${email}', telefono='${message}'`);

    // Insertar en tabla "usuarios"
    // 'message' field from form is stored in 'telefono' column.
    const dbResult = await sql`
      INSERT INTO usuarios (nombre, email, telefono)
      VALUES (${fullName}, ${email}, ${message});
    `;

    // Log the successful insertion and the result from the database operation.
    console.log("Successfully inserted data into 'usuarios' table. Database Result:", dbResult);

    return res.status(200).json({ success: true });
  } catch (error) {
    // Enhanced error logging to provide more context.
    console.error("Error during database operation in /api/contact:", {
      errorMessage: error instanceof Error ? error.message : "Unknown error",
      errorStack: error instanceof Error ? error.stack : "No stack available",
      errorName: error instanceof Error ? error.name : "Unknown error type",
      queryParameters: { fullName, email, message } // Log parameters that led to the error
    });
    return res.status(500).json({
      success: false,
      message: "Error al guardar los datos en la base de datos",
    });
  }
}
