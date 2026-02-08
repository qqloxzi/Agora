import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://gncxqiarmnyspvrlsutp.supabase.co",
  "sb_publishable_sWU29ifFK2XJIbx7GoLD5g_lMaWWo2f"
);

export { supabase as s };
