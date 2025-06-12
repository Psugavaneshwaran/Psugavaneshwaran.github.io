import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              What I Build & How I Deliver
            </h3>

            <p className="text-muted-foreground">
             With a solid background in Java, Spring Boot, and modern frontend tools like React, I enjoy building web applications that are not
              just scalable and secure, but also practical and user-friendly.
              Whether it’s developing a banking system, an e-commerce platform, or an ML-powered tool, 
              I focus on blending performance, usability, and real-world functionality.
            </p>

            <p className="text-muted-foreground">
             I’m passionate about creating end-to-end solutions—from planning clean 
             architectures to integrating reliable backend systems and designing smooth,
              intuitive user interfaces. For me, it’s all about building tech that works se
              amlessly and makes a difference.


            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Turning Code Into Value
</h4>
                  <p className="text-muted-foreground">
                    I build full-stack solutions that don’t just work smoothly—they 
                    also make a real difference for businesses and the people who use them.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Crafting Impactful Tech</h4>
                  <p className="text-muted-foreground">
                    I build solutions that truly matter—ranging from robust 
                    enterprise software to user-friendly webapp—helping people and businesses work smarter and live better.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Tech Beyond the Screen</h4>
                  <p className="text-muted-foreground">
                    I build practical, innovative solutions that truly help people—from support portals to
                     smart ML tools—bringing ideas to life where technology meets real needs.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
