import Head from 'next/head';
import Cover from '../components/Cover';
import Image from 'next/image';
import MainLayout from '../layouts/MainLayout';
import BrandsCarousel from '../components/BrandsCarousel';
import Features from '../components/Features';
import TestiminialsCarousel from '../components/TestimonialsCarousel';
import FrequentQuestions from '../components/FrequentQuestions';
import {Typography} from '@material-ui/core';

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
        title="Testimonials"
        subtitle="Our clients are happy!"
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

      <FrequentQuestions
        title="Frequest questions"
        subtitle="Don't forget, you can contact us on anytime"
        items={[
          {
            title: 'Lorem ipsum dolor sit amet?',
            content: (
              <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                sagittis felis erat, nec vulputate nibh mattis quis.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Cras pharetra non lectus ut
                bibendum. Etiam suscipit luctus egestas. Nunc vitae placerat
                metus, sed pellentesque risus. Suspendisse potenti. Vestibulum
                volutpat felis eget urna tempus gravida. Nunc dui risus, viverra
                in erat et, fermentum interdum dolor. Ut non lorem ipsum. Donec
                lobortis eu elit et venenatis. Praesent id arcu porta tellus
                feugiat hendrerit. Sed pretium ullamcorper felis, id tincidunt
                nunc suscipit ac.
              </Typography>
            ),
          },
          {
            title: 'Lorem ipsum dolor sit amet?',
            subtitle: 'This is a subtitle',
            content: (
              <>
                <Typography component="p" paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  sagittis felis erat, nec vulputate nibh mattis quis.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Cras pharetra non lectus ut
                  bibendum. Etiam suscipit luctus egestas. Nunc vitae placerat
                  metus, sed pellentesque risus. Suspendisse potenti. Vestibulum
                  volutpat felis eget urna tempus gravida. Nunc dui risus,
                  viverra in erat et, fermentum interdum dolor. Ut non lorem
                  ipsum. Donec lobortis eu elit et venenatis. Praesent id arcu
                  porta tellus feugiat hendrerit. Sed pretium ullamcorper felis,
                  id tincidunt nunc suscipit ac.
                </Typography>
                <Typography component="p">
                  Ut eleifend lacus in ex interdum feugiat. Phasellus lacinia
                  faucibus ex. Integer sit amet accumsan dui. Integer diam
                  tortor, auctor vel maximus eu, faucibus quis sem. Curabitur et
                  purus et nisi tempor interdum eu at velit. Quisque id placerat
                  mi. Interdum et malesuada fames ac ante ipsum primis in
                  faucibus. Fusce et suscipit justo, non porttitor enim. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos.
                </Typography>
              </>
            ),
          },
          {
            title: 'Lorem ipsum dolor sit amet?',
            content: (
              <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                sagittis felis erat, nec vulputate nibh mattis quis.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Cras pharetra non lectus ut
                bibendum. Etiam suscipit luctus egestas. Nunc vitae placerat
                metus, sed pellentesque risus. Suspendisse potenti. Vestibulum
                volutpat felis eget urna tempus gravida. Nunc dui risus, viverra
                in erat et, fermentum interdum dolor. Ut non lorem ipsum. Donec
                lobortis eu elit et venenatis. Praesent id arcu porta tellus
                feugiat hendrerit. Sed pretium ullamcorper felis, id tincidunt
                nunc suscipit ac.
              </Typography>
            ),
          },
          {
            title: 'Lorem ipsum dolor sit amet?',
            content: (
              <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                sagittis felis erat, nec vulputate nibh mattis quis.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Cras pharetra non lectus ut
                bibendum. Etiam suscipit luctus egestas. Nunc vitae placerat
                metus, sed pellentesque risus. Suspendisse potenti. Vestibulum
                volutpat felis eget urna tempus gravida. Nunc dui risus, viverra
                in erat et, fermentum interdum dolor. Ut non lorem ipsum. Donec
                lobortis eu elit et venenatis. Praesent id arcu porta tellus
                feugiat hendrerit. Sed pretium ullamcorper felis, id tincidunt
                nunc suscipit ac.
              </Typography>
            ),
          },
          {
            title: 'Lorem ipsum dolor sit amet?',
            content: (
              <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                sagittis felis erat, nec vulputate nibh mattis quis.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Cras pharetra non lectus ut
                bibendum. Etiam suscipit luctus egestas. Nunc vitae placerat
                metus, sed pellentesque risus. Suspendisse potenti. Vestibulum
                volutpat felis eget urna tempus gravida. Nunc dui risus, viverra
                in erat et, fermentum interdum dolor. Ut non lorem ipsum. Donec
                lobortis eu elit et venenatis. Praesent id arcu porta tellus
                feugiat hendrerit. Sed pretium ullamcorper felis, id tincidunt
                nunc suscipit ac.
              </Typography>
            ),
          },
        ]}
      />
    </MainLayout>
  );
}
