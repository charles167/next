import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, Youtube } from 'lucide-react';

const Videos = () => {
  const videoData = [
    { id: 'K1Xg8b1I2OU', title: 'How To Walk In The Spirit' },
    { id: 'WneegcRK89w', title: 'The Purpose of Prayer' },
    { id: 'F3M8phaFKzc', title: 'Faith in the Wilderness' },
    { id: 'K1Xg8b1I2OU', title: 'How To Walk In The Spirit' },
    { id: '9G9NjU5ByAI', title: 'Overcoming Fear with Faith' },
  ];

  const youtubeChannelUrl = 'https://www.youtube.com';

  return (
    <>
      <Helmet>
        <title>Videos - Encouragement On Demand - Mayoher</title>
        <meta name="description" content="Uplifting videos, honest reflections, and soul-nourishing posts from Mayoher." />
      </Helmet>
      <div className="pt-20 bg-background">
        <section className="py-20 lg:py-32 text-center">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 text-heading-royal">Encouragement On Demand</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Uplifting videos, honest reflections, and soul-nourishing posts.
                    </p>
                </motion.div>
            </div>
        </section>

        <section className="py-20 lg:py-32 bg-secondary">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videoData.map((video, index) => (
                        <motion.div
                            key={`${video.id}-${index}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-background rounded-2xl overflow-hidden flex flex-col card-hover"
                        >
                            <a 
                                href={`https://www.youtube.com/watch?v=${video.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="aspect-video block relative group"
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                    alt={`Thumbnail for ${video.title}`}
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Play className="h-16 w-16 text-white/80" />
                                </div>
                            </a>
                            <div className="p-6 text-center">
                                <h3 className="font-display text-xl font-bold text-heading-indigo">{video.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-16">
                    <Button 
                        asChild
                        size="lg"
                        className="rounded-full px-8 py-6 text-base"
                    >
                        <a href={youtubeChannelUrl} target="_blank" rel="noopener noreferrer">
                             <Youtube className="mr-2 h-5 w-5" />
                            See More on YouTube
                        </a>
                    </Button>
                </div>
            </div>
        </section>

      </div>
    </>
  );
};

export default Videos;