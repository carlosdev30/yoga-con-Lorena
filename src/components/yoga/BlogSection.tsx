import React from "react";
import { Twitter, Facebook, Share2 } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Claves para practicar yoga en casa",
      excerpt:
        "Además de explicarte las posturas más eficaces sin postureos, te doy consejos prácticos para crear tu espacio de práctica en casa.",
      image: "/placeholder.svg",
      category: "Práctica",
    },
    {
      id: 2,
      title: "Pautas para hacer mi primera clase de yoga",
      excerpt:
        "Los primeros días en una clase son una aventura. Te cuento qué esperar y cómo prepararte para tu primera experiencia.",
      image: "/placeholder.svg",
      category: "Principiantes",
    },
    {
      id: 3,
      title: "Beneficios de la práctica de yoga",
      excerpt:
        "Beneficios del yoga tras 60 días de práctica ininterrumpida. Resultados reales sin exageraciones.",
      image: "/placeholder.svg",
      category: "Bienestar",
    },
  ];

  const handleShare = (platform: string, post: any) => {
    // In a real app, implement actual sharing functionality
    console.log(`Sharing "${post.title}" on ${platform}`);
  };

  return (
    <section id="blog" className="py-20 bg-yoga-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-condensed font-bold text-yoga-dark mb-4">
            ¿Quieres saber un poco más sobre Yoga?
          </h2>
          <div className="w-24 h-1 bg-yoga-primary mx-auto mb-6"></div>
          <p className="text-lg text-yoga-dark/80 font-body max-w-2xl mx-auto">
            Artículos prácticos, consejos y reflexiones sobre yoga sin
            complicaciones ni postureos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-yoga-primary/90 text-white px-3 py-1 rounded-full text-sm font-condensed">
                    {post.category}
                  </span>
                </div>

                {/* Social Share Overlay */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleShare("twitter", post)}
                      className="bg-white/90 hover:bg-white text-yoga-dark rounded-full p-2 shadow-lg transition-all duration-200"
                      aria-label="Share on Twitter"
                    >
                      <Twitter size={16} />
                    </button>
                    <button
                      onClick={() => handleShare("facebook", post)}
                      className="bg-white/90 hover:bg-white text-yoga-dark rounded-full p-2 shadow-lg transition-all duration-200"
                      aria-label="Share on Facebook"
                    >
                      <Facebook size={16} />
                    </button>
                    <button
                      onClick={() => handleShare("share", post)}
                      className="bg-white/90 hover:bg-white text-yoga-dark rounded-full p-2 shadow-lg transition-all duration-200"
                      aria-label="Share"
                    >
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-condensed font-bold text-yoga-dark mb-3 group-hover:text-yoga-primary transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-yoga-dark/70 font-body leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <button className="text-yoga-primary hover:text-yoga-secondary font-condensed font-bold transition-colors duration-200">
                  Leer más →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-yoga-primary hover:bg-yoga-secondary text-white px-8 py-3 rounded-md font-condensed text-lg transition-colors duration-200"
          >
            Ver todos los artículos
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
