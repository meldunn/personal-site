import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta property="og:image" content={"/images/site_screenshot.PNG"} />
      </Head>
      {/* <section className={utilStyles.center}>
        <body>
          <div className={utilStyles.center}>
             <Link href="./Melissa_Dunn_CV.pdf">
              <a>CV</a>
            </Link> 
     
          </div>
        </body>
      </section> */}

      <section className={utilStyles.headingMd}>
        <p>
          I am a final year Computer Science, Psychology and Mathematics student
          at McGill University, particularly interested in Distributed Systems,
          Concurrency, and Databases.{" "}
        </p>
        <p>
          {" "}
          Currently a Software Developer Intern at{" "}
          <a href="https://www.morganstanley.com/"> Morgan Stanley</a>, Full
          Stack Developer at <a href="https://mchacks.ca/">HackMcGill</a>,
          President of the
          <a href="https://mcgill-csus.ca/">
            {" "}
            McGill Computer Science Undergraduate Society
          </a>
          , and CS Tutor at the{" "}
          <a href="https://mcgill-csus.ca/helpdesk"> McGill CSUS Helpdesk</a>.
        </p>
      </section>
      <section className={utilStyles.center}>
        <body>
          <div className={utilStyles.center}>
            {/* <Link href="./Melissa_Dunn_CV.pdf">
              <a>CV</a>
            </Link> */}
            <Link href="https://github.com/meldunn">
              <a>
                <Image
                  priority
                  src="/images/github_icon.png"
                  height={30}
                  width={30}
                  alt="github"
                />
              </a>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="https://www.linkedin.com/in/melissa-dunn-ba33281a4/">
              <a>
                <Image
                  priority
                  src="/images/linkedin_icon.png"
                  height={30}
                  width={30}
                  alt="linkedin"
                />
              </a>
            </Link>
          </div>
        </body>
      </section>
    </Layout>
  );
}
