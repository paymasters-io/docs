import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HeroSection from '../components/Hero/Herosection';
import ContactSection from '../components/contact-us/Contact';
import FeaturesSection from '../components/features/Features';
import DashboardSection from '../components/dashboardsection/Dashboard';
import StackSection from '../components/tech-stack/StackSection';
import PluginSection from '../components/plugins/Plugins';
import CreatePaymastersSection from '../components/create-paymasters/CreatePaymasters';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero  hero--primary', styles.heroBanner)}>
//       <div className="container ">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle ">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Zk ${siteConfig.title}`}
      description="Simplifying transactions with paymasters <head />">
       <main>
       <HeroSection />
      
       <StackSection />
       <CreatePaymastersSection />
       <PluginSection />
       <DashboardSection />
       <FeaturesSection />
       <ContactSection />
       </main>      
    </Layout>
  );
}
