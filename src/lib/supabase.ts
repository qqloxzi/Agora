import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY
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