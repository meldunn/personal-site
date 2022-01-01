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

        <meta name="description" content="Personal Website" />
        <meta
          name="title"
          property="og:title"
          content="Melissa's Personal Website"
        />
        <meta property="og:type" content="Website" />
        <meta
          name="image"
          property="og:image"
          content="https://live.staticflickr.com/65535/51335501793_28c4ea235b_h.jpg"
        />
        <meta
          name="description"
          property="og:description"
          content="Melissa's Personal Website"
        />
        <meta name="author" content="Melissa Dunn" />
        <meta
          name="google-site-verification"
          content="VKa-xBrsrocGRYDkHSeMEnLldz5WRjkm15dYYSm5DzY"
        />
      </Head>

      <body>
        <div className={utilStyles.headingMd}>
          <p>
            I am a final year Computer Science, Psychology and Mathematics
            student at McGill University, particularly interested in Distributed
            Systems, Concurrency, and Databases.{" "}
          </p>
          <p>
            {" "}
            Currently a Full Stack Developer at{" "}
            <a href="https://mchacks.ca/">HackMcGill</a>, President of the
            <a href="https://mcgill-csus.ca/">
              {" "}
              McGill Computer Science Undergraduate Society
            </a>
            , and Computer Science Tutor at the{" "}
            <a href="https://mcgill-csus.ca/helpdesk"> McGill CSUS Helpdesk</a>.
          </p>
          <p>
            {" "}
            Previously worked as a Software Developer Intern at{" "}
            <a href="https://www.morganstanley.com/"> Morgan Stanley</a> during
            Summer 2021.
          </p>
        </div>
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
    </Layout>
  );
}
