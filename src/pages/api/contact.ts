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
    return res
      .status(405)
      .json({ success: false, message: "Método no permitido" });
  }

  const { name, lastName, email, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "Nombre y correo electrónico son obligatorios",
    });
  }

  try {
    // Insertar en tabla "usuarios"
    await sql`
      INSERT INTO usuarios (nombre, email, telefono)
      VALUES (${name + " " + lastName}, ${email}, ${message});
    `;

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error al insertar en Neon:", error);
    return res.status(500).json({
      success: false,
      message: "Error al guardar los datos en la base de datos",
    });
  }
}
