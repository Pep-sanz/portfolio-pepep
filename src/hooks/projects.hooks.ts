import { supabase } from '@/lib/supabase/client';
import { useToast } from './use-toast';

export const useGetProjects = async () => {
  const { toast } = useToast();
  const { data, error } = await supabase.from('projects').select('*');

  if (error && error.code !== 'PGRST116') {
    toast({
      variant: 'destructive',
      title: 'Error',
      description: 'Failed to fetch data',
    });
    return;
  }

  return data;
};
