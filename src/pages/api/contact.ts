import type { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@/lib/db';

type Data = { success: boolean; message?: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { nombre, apellidos, email, comentarios } = req.body;

  if (!nombre || !email) {
    return res.status(400).json({ success: false, message: 'Faltan campos obligatorios' });
  }

  try {
    await sql`
      INSERT INTO usuarios (nombre, email, telefono)
      VALUES (${nombre}, ${email}, ${apellidos || ''});
    `;

    await sql`
      INSERT INTO reservas (usuario_id, clase_id)
      VALUES (
        (SELECT id FROM usuarios WHERE email = ${email}),
        NULL
      );
    `;

    res.status(200).json({ success: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: 'Error en la base de datos' });
  }
}
