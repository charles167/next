import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Events = () => {
  const handleAction = (action, item = '') => {
    toast({
      title: `🎫 ${action}`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const upcomingEvents = [
    {
      title: 'Worship Night & Album Preview',
      date: '2025-08-15',
      time: '7:30 PM',
      venue: 'The Gathering Place',
      location: 'Nashville, TN',
      price: '$15',
      type: 'Worship',
      description: 'An intimate evening of worship and a first listen to songs from the upcoming album.',
    },
    {
      title: 'Creative Faith Workshop',
      date: '2025-09-20',
      time: '10:00 AM - 4:00 PM',
      venue: 'Artisan Hub',
      location: 'Franklin, TN',
      price: '$75',
      type: 'Workshop',
      description: 'A full-day workshop on unlocking your God-given creativity in writing, music, and art.',
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <>
      <Helmet>
        <title>Events - Mayoher</title>
        <meta name="description" content="Join Mayoher at upcoming concerts, workshops, and live events." />
      </Helmet>

      <div className="pt-20 bg-background">
        <section className="py-20 lg:py-32 text-center">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 text-heading-royal">Experience It Live</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Workshops, worship nights, speaking engagements — created to refresh your spirit, awaken your dreams, and connect you with community.
                    </p>
                </motion.div>
            </div>
        </section>

        <section className="py-20 lg:py-32 bg-secondary">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="font-display text-4xl text-center font-bold mb-12 text-heading-indigo">Upcoming Events</h2>
            <div className="space-y-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row card-hover"
                >
                  <div className="md:w-1/3 p-6 flex flex-col justify-center items-center text-center bg-accent/50 border-b md:border-b-0 md:border-r border-border">
                    <p className="text-4xl font-bold font-display text-primary">{new Date(event.date).getDate()}</p>
                    <p className="text-lg font-semibold">{new Date(event.date).toLocaleString('default', { month: 'short' })}</p>
                    <p className="text-sm text-muted-foreground">{new Date(event.date).getFullYear()}</p>
                  </div>
                  <div className="md:w-2/3 p-6 flex flex-col justify-between">
                    <div>
                        <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mb-2 font-semibold">{event.type}</span>
                        <h3 className="font-display text-2xl font-bold mb-2 text-heading-indigo">{event.title}</h3>
                        <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-4 gap-x-4 gap-y-1">
                            <div className="flex items-center"><Clock className="h-4 w-4 mr-1.5" />{event.time}</div>
                            <div className="flex items-center"><MapPin className="h-4 w-4 mr-1.5" />{event.venue}, {event.location}</div>
                        </div>
                        <p className="text-muted-foreground mb-6">{event.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold font-display text-primary">{event.price}</span>
                        <Button onClick={() => handleAction('Get Tickets', event.title)}>
                            <Ticket className="mr-2 h-4 w-4" />
                            Get Tickets
                        </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {upcomingEvents.length === 0 && (
                <div className="text-center py-12 border-2 border-dashed border-border rounded-2xl">
                    <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4"/>
                    <h3 className="font-display text-2xl font-bold text-heading-indigo">No Upcoming Events</h3>
                    <p className="text-muted-foreground mt-2">Check back soon or sign up for the newsletter to be notified!</p>
                </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Events;