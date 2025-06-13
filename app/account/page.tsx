import AccountForm from '@/app/account/account-form'
import { createSupabaseServerClient } from '@/lib/supabase/server'

export default async function Account() {
  const supabase = await createSupabaseServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return <AccountForm user={user} />
}
