export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  const { password } = req.body;
  
  // Password temporanea di esempio (puoi modificarla qui)
  const teacherPassword = "admin123";

  if (password === teacherPassword) {
    return res.status(200).json({ success: true, message: "Accesso autorizzato" });
  } else {
    return res.status(401).json({ success: false, error: "Password non errata" });
  }
}
