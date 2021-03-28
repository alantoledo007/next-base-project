import Head from 'next/head';
import Cover from '../components/Cover';
import Image from 'next/image';
import MainLayout from '../layouts/MainLayout';
import BrandsCarousel from '../components/BrandsCarousel';

const myLoader = ({src, width, quality}) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cover
        title="it is a long established fact that a reader will be"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
        primary_button_text="Primary action"
        secondary_button_text="Secondary action"
        MediaArea={
          <Image
            loader={myLoader}
            alt="Picture of the author"
            width={720}
            height={480}
            src="/assets/undraw_online_media_62jb.svg"
          />
        }
      />
      <BrandsCarousel
        items={[
          {alt: '', title: '', src: '/carousel/google.png'},
          {alt: '', title: '', src: '/carousel/laravel.png'},
          {alt: '', title: '', src: '/carousel/bbva.png'},
          {alt: '', title: '', src: '/carousel/aerolineasargentinas.png'},
          {alt: '', title: '', src: '/carousel/santanderrio.png'},
          {alt: '', title: '', src: '/carousel/stackoverflow.png'},
          {alt: '', title: '', src: '/carousel/pedidosya.png'},
        ]}
      />
    </MainLayout>
  );
}
