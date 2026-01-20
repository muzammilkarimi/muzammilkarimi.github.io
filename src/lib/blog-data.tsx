
export interface BlogPost {
  id: string; // Changed to string for flexibility
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  content: React.ReactNode; // Using ReactNode for rich text capability
  featured?: boolean;
}

export const BLOG_DATA: BlogPost[] = [
  {
    id: "featured-1",
    title: "The Most Important Things to Do During a CS Degree",
    excerpt: "Grades matter, but they aren't everything. From hackathons to open source, here is the definitive guide to maximizing your 4 years.",
    date: "Jan 20, 2024",
    readTime: "8 Min Read",
    category: "Career",
    slug: "important-things-cs-degree",
    featured: true,
    content: (
      <>
        <p>
          Computer Science is one of the most demanding yet rewarding fields you can pursue. 
          While your GPA is important for getting past the initial resume filters, 
          the industry values skills and practical experience above all else.
        </p>
        <h3>1. Build, Build, Build</h3>
        <p>
          Theory is crucial, but application is king. Don&apos;t just read about data structures; 
          implement them. Don&apos;t just watch a tutorial on React; build a clone of a popular app.
        </p>
        <h3>2. Contribute to Open Source</h3>
        <p>
          Open source contribution is the closest experience you can get to working in a real job 
          without actually having one. It teaches you how to read other people&apos;s code, 
          follow contribution guidelines, and communicate effectively.
        </p>
        <h3>3. Network</h3>
        <p>
          Your peers today are your colleagues tomorrow. Attend hackathons, join tech clubs, 
          and engage with the community on LinkedIn and Twitter.
        </p>
      </>
    )
  },
  {
    id: "1",
    title: "Why Engineers Must Conquer the GATE Exam",
    excerpt: "It's not just about an M.Tech degree. It's about solidifying your fundamentals and opening doors to PSU jobs and research opportunities that few other exams can match.",
    date: "Jan 12, 2024",
    readTime: "5 min read",
    category: "Career",
    slug: "why-gate-exam",
    content: (
      <>
        <p>
          The Graduate Aptitude Test in Engineering (GATE) is often seen merely as a gateway to higher education. 
          However, the preparation process itself is a transformative journey for any engineer.
        </p>
        <p>
          Preparing for GATE forces you to revisit the core subjects of Computer Science: 
          Operating Systems, DBMS, Computer Networks, and Algorithms. This deep dive solidifies 
          your understanding and makes you a better engineer, regardless of the exam result.
        </p>
      </>
    )
  },
  {
    id: "2",
    title: "The Roadmap Trap: Learning vs. Following",
    excerpt: "Are you learning concepts or just memorizing steps? We dive into the pros and cons of strict roadmaps for new developers and why exploration beats rigid paths.",
    date: "Dec 28, 2023",
    readTime: "7 min read",
    category: "Philosophy",
    slug: "roadmap-trap",
    content: (
      <>
        <p>
          In the age of &quot;Zero to Hero&quot; bootcamps and comprehensive developer roadmaps, 
          many beginners fall into the trap of passive following. 
          They tick off boxes without understanding the &apos;why&apos; behind the &apos;how&apos;.
        </p>
        <p>
          True learning happens in the chaos of exploration. It happens when you try to build something, failure, 
          search for a solution, and then understand the underlying concept.
        </p>
      </>
    )
  },
  {
    id: "3",
    title: "Embracing Errors: A Junior Dev's Best Friend",
    excerpt: "Red text in the console isn't a failure—it's a lesson. How shifting your mindset about debugging can accelerate your growth 10x.",
    date: "Dec 15, 2023",
    readTime: "4 min read",
    category: "Development",
    slug: "embracing-errors",
    content: (
      <>
        <p>
          Every developer remembers their first screen full of red error messages. 
          The panic, the confusion, the feeling of &quot;I broke it&quot;.
        </p>
        <p>
          But error messages are not your enemy. They are the compiler or interpreter telling you exactly what went wrong. 
          Learning to read and love error messages is a superpower.
        </p>
      </>
    )
  }
];

export function getPostBySlug(slug: string) {
  return BLOG_DATA.find((post) => post.slug === slug);
}

export function getAllPostSlugs() {
  return BLOG_DATA.map((post) => ({
    slug: post.slug,
  }));
}
