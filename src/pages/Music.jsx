import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Music = () => {
  const spotifyTracks = [
    { id: '5FqjAN4BAdJu94QAkJMONx', url: 'https://open.spotify.com/track/5FqjAN4BAdJu94QAkJMONx' },
    { id: '5fUC6jwBW6Hza4Q6o2Vwwy', url: 'https://open.spotify.com/track/5fUC6jwBW6Hza4Q6o2Vwwy' },
    { id: '3I75F8x3qwolUOUoSBE1aG', url: 'https://open.spotify.com/track/3I75F8x3qwolUOUoSBE1aG' },
    { id: '0Eg5kaSG5A9b89sLBjC48d', url: 'https://open.spotify.com/track/0Eg5kaSG5A9b89sLBjC48d' },
    { id: '5yG3vWrpcKety8zXPH4vCG', url: 'https://open.spotify.com/track/5yG3vWrpcKety8zXPH4vCG' },
    { id: '1PPCwVC8cMcjYiYkHzQ34g', url: 'https://open.spotify.com/track/1PPCwVC8cMcjYiYkHzQ34g' },
    { id: '5D6f0gy2ngrYVBvSFZPK9r', url: 'https://open.spotify.com/track/5D6f0gy2ngrYVBvSFZPK9r' },
    { id: '63ul6fjnM9dW99k8IrvnxJ', url: 'https://open.spotify.com/track/63ul6fjnM9dW99k8IrvnxJ' },
    { id: '0vryjiDCfEJ8nrnTsNsnWQ', url: 'https://open.spotify.com/track/0vryjiDCfEJ8nrnTsNsnWQ' },
    { id: '2xpTqrmH8kE2KjlndSE5Oq', url: 'https://open.spotify.com/track/2xpTqrmH8kE2KjlndSE5Oq' },
  ];

  const spotifyArtistUrl = 'https://open.spotify.com/artist/2xpTqrmH8kE2KjlndSE5Oq';

  return (
    <>
      <Helmet>
        <title>Music - Mayoher</title>
        <meta
          name="description"
          content="Listen to music by Mayoher. Explore the full discography on Spotify."
        />
      </Helmet>

      <div className="bg-background">
        <section className="py-20 lg:py-32 pt-40 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4">
            {/* Grid of Spotify Tracks */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {spotifyTracks.map((track, index) => (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-2xl overflow-hidden shadow-lg card-hover flex flex-col"
                >
                  <iframe
                    src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0`}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title={`Spotify track ${track.id}`}
                    className="block"
                  ></iframe>

                  <div className="p-4 flex-grow flex items-center justify-center bg-white">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href={track.url} target="_blank" rel="noopener noreferrer">
                        Play on Spotify
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA to full Spotify profile */}
            <div className="text-center mt-16">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-6 text-base font-bold"
              >
                <a href={spotifyArtistUrl} target="_blank" rel="noopener noreferrer">
                  Listen to More on Spotify
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Music;
