import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qlsswjzhqdalluvtoogu.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_rmDFP4XmOB0kysFdTRBL6Q_MZnQ_pK4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);