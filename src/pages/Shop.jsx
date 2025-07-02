import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music, BookOpen, Calendar, Video, Play, ExternalLink } from 'lucide-react';

const Shop = () => {
  const handleLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const musicLinks = [
    { name: "Angels (Psalm 91)", url: "https://open.spotify.com/track/5FqjAN4BAdJu94QAkJMONx" },
    { name: "Found The One", url: "https://open.spotify.com/track/5fUC6jwBW6Hza4Q6o2Vwwy" },
    { name: "Angels Lyric Video", url: "https://open.spotify.com/track/3I75F8x3qwolUOUoSBE1aG" },
    { name: "Meaning Instrumental", url: "https://open.spotify.com/track/0Eg5kaSG5A9b89sLBjC48d" },
  ];

  return (
    <>
      <Helmet>
        <title>Shop - Mayoher</title>
        <meta name="description" content="Shop for music, books, devotionals, event tickets, and more from Mayoher." />
      </Helmet>
      <div className="pt-20 bg-background">
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 text-heading-royal">Shop</h1>
              <p className="text-xl text-muted-foreground">Browse all creative works from Mayoher.</p>
            </motion.div>
            <Tabs defaultValue="music" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-transparent p-0 mb-12 gap-4">
                <TabsTrigger value="music" className="text-lg py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">Music</TabsTrigger>
                <TabsTrigger value="books" className="text-lg py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">Books</TabsTrigger>
                <TabsTrigger value="events" className="text-lg py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">Events</TabsTrigger>
                <TabsTrigger value="videos" className="text-lg py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">Videos</TabsTrigger>
              </TabsList>

              <TabsContent value="music">
                <div className="text-center p-8 rounded-lg">
                  <Music className="mx-auto h-12 w-12 text-primary mb-4" />
                  <h3 className="font-display text-3xl font-bold mb-2 text-heading-indigo">Songs that Speak to the Spirit.</h3>
                  <p className="max-w-2xl mx-auto text-muted-foreground mb-6">
                    Faith-infused sounds to encourage, uplift, and inspire.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-6">
                    {musicLinks.map(link => (
                      <Button
                        key={link.name}
                        variant="secondary"
                        onClick={() => handleLink(link.url)}
                        className="w-full justify-start text-left"
                      >
                        <Play className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="truncate">{link.name}</span>
                        <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground flex-shrink-0" />
                      </Button>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="books">
                <div className="text-center p-8 rounded-lg">
                  <BookOpen className="mx-auto h-12 w-12 text-primary mb-4" />
                  <h3 className="font-display text-3xl font-bold mb-2 text-heading-indigo">Words That Water the Soul.</h3>
                  <p className="max-w-2xl mx-auto text-muted-foreground mb-6">
                    Explore books and devotionals crafted to deepen your faith, renew your mind, and ignite your calling. Short reads, deep truths — timeless encouragement for every season.
                  </p>
                  <Button onClick={() => toast({ title: "Coming Soon!" })}>
                    Browse Books & Devotionals
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="events">
                <div className="text-center p-8 rounded-lg">
                  <Calendar className="mx-auto h-12 w-12 text-primary mb-4" />
                  <h3 className="font-display text-3xl font-bold mb-2 text-heading-indigo">Experience It Live.</h3>
                  <p className="max-w-2xl mx-auto text-muted-foreground mb-6">
                    Workshops, worship nights, speaking engagements — created to refresh your spirit, awaken your dreams, and connect you with community.
                  </p>
                  <Link to="/events">
                    <Button>See Upcoming Events</Button>
                  </Link>
                </div>
              </TabsContent>

             <TabsContent value="videos">
  <div className="py-12">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { id: 'K1Xg8b1I2OU', title: 'How To Walk In The Spirit' },
        { id: 'WneegcRK89w', title: 'The Purpose of Prayer' },
        { id: 'F3M8phaFKzc', title: 'Faith in the Wilderness' },
        { id: 'K1Xg8b1I2OU', title: 'How To Walk In The Spirit' },
        { id: '9G9NjU5ByAI', title: 'Overcoming Fear with Faith' },
      ].map((video, index) => (
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
          <div className="p-4 text-center">
            <h3 className="font-display text-lg font-bold text-heading-indigo">{video.title}</h3>
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
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          See More on YouTube
        </a>
      </Button>
    </div>
  </div>
</TabsContent>

            </Tabs>
          </div>
        </section>
      </div>
    </>
  );
};

export default Shop;
