
import supabase from "@/supabase/supabase";

export async function getAvatarUrl(userId:string):Promise<string|null>{

  const { data:files, error:listError } = await supabase.storage
    .from('avatars')
    .list("",{
      limit: 10
    })

  console.log(userId, files, listError);

  return null;

}
