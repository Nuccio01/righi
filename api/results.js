import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  const { data, error } = await supabase
    .from('cyber_answers')
    .select('*');

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ success: true, data });
}
