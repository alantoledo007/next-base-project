import Head from 'next/head';
import Cover from '../components/Cover';
import Image from 'next/image';
import MainLayout from '../layouts/MainLayout';
import BrandsCarousel from '../components/BrandsCarousel';
import Features from '../components/Features';
import TestiminialsCarousel from '../components/TestimonialsCarousel';

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
        title="Some our clients"
        subtitle="We can add your brand in this carousel"
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
      <Features
        title="Why choose us?"
        subtitle="Read the next reasons"
        items={[
          {
            title: 'The standard Lorem Ipsum passage',
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            img: {
              src: '/assets/feature.svg',
            },
          },
          {
            title: 'The standard Lorem Ipsum passage',
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            img: {
              src: '/assets/feature.svg',
            },
          },
          {
            title: 'The standard Lorem Ipsum passage',
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            img: {
              src: '/assets/feature.svg',
            },
          },
          {
            title: 'The standard Lorem Ipsum passage',
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            img: {
              src: '/assets/feature.svg',
            },
          },
          {
            title: 'The standard Lorem Ipsum passage',
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            img: {
              src: '/assets/feature.svg',
            },
          },
          {
            title: 'The standard Lorem Ipsum passage',
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            img: {
              src: '/assets/feature.svg',
            },
          },
        ]}
      />

      <TestiminialsCarousel
        items={[
          {
            avatar: {src: '/testimonials/brown.jpeg'},
            name: 'Emmet Brown',
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          },
          {
            avatar: {src: '/testimonials/mcfly.jpeg'},
            name: 'Marty Mcfly',
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          },
          {
            avatar: {src: '/testimonials/face1.jpeg'},
            name: 'Lorem Name',
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          },
          {
            avatar: {src: '/testimonials/face2.jpeg'},
            name: 'Lorem Name',
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          },
          {
            avatar: {src: '/testimonials/face3.jpeg'},
            name: 'Lorem Name',
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
          },
        ]}
      />
    </MainLayout>
  );
}
