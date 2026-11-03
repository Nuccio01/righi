import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('cyber_state')
      .select('*')
      .eq('id', 1)
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(200).json({ success: true, data });
  }

  if (req.method === 'POST') {
    const { current_question, is_paused } = req.body;

    const { data, error } = await supabase
      .from('cyber_state')
      .update({ current_question, is_paused, updated_at: new Date() })
      .eq('id', 1);

    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(200).json({ success: true, data });
  }

  return res.status(405).json({ error: 'Metodo non consentito' });
}
