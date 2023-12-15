// import { blogdata } from "../../assets/data/dummydata";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import Banner from "../../components/Banner";
import { Title, TitleSm } from "../../components/common/Title";

// const SinglePost = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const post = blogdata.find((post) => post.id === parseInt(id));

//   if (!post) {
//     return <div>Loading...</div>; // Or an error message for the user
//   }
const dummydata = require("../../assets/data/dummydata");

const SinglePost = () => {
  const router = useRouter();
  const { id } = router.query;
  const blogdata = dummydata.blogdata;

  // Find the post based on the id
  const post = blogdata.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Loading...</div>; // Or an error message for the user
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="TIPS & TRICKS / December 9th, 2023" /> <br />
            <br />
            <Title title={post.title} className="title-bg" />
            <div className="img py">
              <Image
                src={post.cover}
                alt={post.title}
                width="100%"
                height="100%"
                className="round"
              />
            </div>
            <div className="desc">
              <TitleSm title="The open internet — comprising news and general websites, over-the-top (OTT) and connected TV (CTV), music streaming and online gaming — reaches almost 600 million consumers, which equates to nearly every internet user in India" />
              <p className="desc-p">
                {" "}
                Contrary to what many believe, of the 307 hours that an average consumer spends online per month, less than half of that is spent on social media, User Generated Content (UGC) platforms and live game streaming. Media habits in India have changed. In the latest report by The Trade Desk, consumers in India are spending 52 per cent of their time on the open internet, beyond the traditional search, social media and UGC platforms that marketers are so familiar with. Meet the Open Internet Even though social media and UGC platforms have gained large numbers of users over the past decade, the open internet has flourished equally with the advent of new media channels, such as over-the-top (OTT) and CTV (connected TV) video streaming and music streaming. 
                
              </p>

              <p>
              The open internet maximises user engagements.

              <p>
              Consumers are 
              </p>
              <li>
              19 per cent more likely to find ads on news/websites less intrusive
                </li>
                <li>
                compared to social media Consumers are 22 per cent more likely to recall ads on OTT/CTV
                </li>
                <li>
                compared to YouTube Premium content on the open internet offers greater brand impact Consumers are 33 per cent more likely to view ads on OTT/CTV as more premium
                </li> 
                <li>
                  compared to YouTube Consumers are 17 per cent more likely to purchase products advertisers on news/websites, compared to social media</li>
                  <p><a href="https://government.economictimes.indiatimes.com/news/digital-india/indian-consumers-are-spending-52-of-their-time-on-open-internet-report/101378454">Read More..</a></p>
              </p>

            
              {/* ... rest of your code */}
            </div>
          </div>
          <Banner />
          <div className="heading-title">
            <div className="desc">
              <TitleSm title="" />
              {/* ... rest of your code */}
            </div>
          </div>
        </div>
      </section>
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="TIPS & TRICKS / JANUARY 12, 2022" /> <br />
            <br />
            <Title title={post.title} className="title-bg" />
            <div className="img py">
              <Image
                src={post.cover}
                alt={post.title}
                width="100%"
                height="100%"
                className="round"
              />
            </div>
            <div className="desc">
              <TitleSm title="Unlocking Creativity through Web Design & Marketing Training" />
              <p className="desc-p">
                {" "}
                TGC offers a unique course called WEB PRO that guarantees a job upon enrollment. The course covers web design, web development, and internet marketing. The training is facilitated by experts and includes practical platforms, virtual workshops, group activities, and live projects. The Web Design & Marketing course from Netcom Training teaches essential skills to improve a company's online presence and create user-friendly websites. The course covers web design concepts, HTML and CSS, CMS,responsive websites, and digital marketing. After completing the course, students can pursue careers in web design, digital marketing, and related fields. 
              </p>

              <p>
              Web Design & Digital Marketing Course Overview:
Have you ever wondered how effective a website can be for a company's marketing plan? Do your long-term objectives entail participating in the creative teams responsible for its creation? The Web Design & Marketing course from Netcom Training will teach you the essential skills that are in great demand around the country in order to master the art of web design and improve a company's online presence.


              <p>
              Course Outcome
              </p>
              <li>
              Making templates that are appealing and have a global vibe 
                </li>
                <li>
                A fully functional online store that incorporates a payment gateway 
                </li>
                <li>
                Hosting a domain, uploading content, and upkeep 
                </li>
                <li>
                Complete knowledge of current web user interface standards. 
                </li>
                <li>
               Making mobile-friendly responsive websites.
                </li> 
                <li>
                Complete knowledge of current web user interface standards. 

</li>
                  <p><a href="https://economictimes.indiatimes.com/jobs/c-suite/empowering-futures-unlocking-creativity-through-web-design-marketing-training/articleshow/102936437.cms">Read More..</a></p>
              </p>

            
              {/* ... rest of your code */}
            </div>
          </div>
          <Banner />
          <div className="heading-title">
            <div className="desc">
              <TitleSm title="" />
              {/* ... rest of your code */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePost;
