import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Mayoher - A Vibrant Creative Force</title>
        <meta name="description" content="Mayo is a vibrant creative force and a powerful voice for her generation. As a gospel artist, writer, entrepreneur, and speaker, she moves hearts with her soulful sound and spirit-led words." />
      </Helmet>

      <div className="bg-background pt-20">
        <section className="py-20 lg:py-32">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/WhatsApp Image 2025-06-30 at 14.48.19_65b878a9.jpg"
                  alt="Portrait of Mayoher singing"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-display text-5xl md:text-6xl font-bold mb-8 text-heading-royal">
                  About Mayoher
                </h1>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                        Mayo is a vibrant creative force and a powerful voice for her generation. As a gospel artist, writer, entrepreneur, and speaker, she moves hearts with her soulful sound and spirit-led words. Her work carries a message of hope, healing, and purpose - calling people to rise above their past and walk boldly in their God-given identity.
                    </p>
                    <p>
                        Through every song, message, and community she creates, Mayo seeks to awaken hearts to the beauty of living a life rooted in faith, guided by purpose, and radiant with joy. Regardless of your journey, the message is clear: with God, you are called to live a life that is fuller, richer, and more abundant than you could ever imagine.
                    </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Rooted in Faith, Guided by Purpose
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Every creation is an invitation to experience the abundant life God has promised.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;