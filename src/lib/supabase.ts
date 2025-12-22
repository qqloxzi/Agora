import { createClient } from '@supabase/supabase-js'

// Sadece çalışan bilgileri içeren tek bir tanım bırakıyoruz
export const supabase = createClient(
  'https://gncxqiarmnyspvrlsutp.supabase.co', 
  'sb_publishable_sWU29ifFK2XJIbx7GoLD5g_lMaWWo2f'
)

export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  })
  
  if (error) {
    console.error("Hata:", error.message)
    return { error }
  } else {
    console.log("Kullanıcı oluşturuldu:", data)
    return { data }
  }
}