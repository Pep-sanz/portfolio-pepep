'use client';

import React, { useEffect } from 'react';
import Introduction from './components/Introduction';
import ServicesList from './components/ServicesList';
import { supabase } from '@/lib/supabase/client';
import { HomeDataTypes } from '../admin/home/HomeContainer';

export default function HomeSection() {
  const [data, setData] = React.useState<HomeDataTypes>({} as HomeDataTypes);

  const getData = async () => {
    const data = await supabase
      .from('home')
      .select('*')
      .eq('id', '36c24273-7dda-44a6-a141-efbd7c01943a')
      .single();

    setData(data.data || {});
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="space-y-12 container md:max-w-[80vw] grid items-center justify-items-center">
      <Introduction data={data} />
      <ServicesList />
    </section>
  );
}
