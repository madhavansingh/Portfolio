type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Aspiring Full Stack Developer",
    fullName: "Madhavan Singh Parihar",
    email: "madhavansingh32@gmail.com",
  },
  hero: {
    name: "Madhavan Singh Parihar",
    p: ["I am a college student passionate about software development,",
      "learning full-stack web technologies, and experimenting with AI-driven projects."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm Madhavan Singh Parihar, a college student exploring the world of software development.
      I have hands-on experience with JavaScript, TypeScript, React, Node.js, and Three.js.
      I enjoy learning new technologies, building web applications, experimenting with AI, and creating interactive experiences.
      I aim to collaborate on projects that challenge me and help me grow as a developer.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "Beyond Coding",
      h2: "My Interests & Skills",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Here are some of my favorite projects where I’ve built, experimented, and learned. Each one reflects my journey as a developer and my passion for creating practical, user-friendly solutions`,
    },
  },
};
