import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Pablo Jakubowicz',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Pablo_Headshot.jpg',
  paragraphOne:
    'Beginning with a formation in the IT department of a development company, I have a deep love for the complex systems that bring life to the modern applications that power our lives. With a B.S. in Information Technology (expected May 2020) and previous experience with enterprise SaaS, I will work on the infrastructures of tomorrow.',
  paragraphTwo:
    'I logically dissect platforms from end to end, following each hop the packet makes and understanding what data is generated to formulate the response. I design, stage, and deploy the new systems, such as a NoSQLs database or a reverse-proxy load balancer, that a SaaS needs to grow and mature.',
  paragraphThree:
    'Always ready to learn new technology, I am a fast & hands-on learner who enjoys finding potential improvements in any project by methodically assessing and integrating innovative platforms in a seamless manner. I will apply an analytical mindset to make independent yet prudent decisions on live applications. I believe that a strong work ethic and team synergy creates powerful solutions.',
  resume: 'https://drive.google.com/open?id=1Y9ws05kP22N7y4ADLKo5MHwdjpRyKiCM', // if no resume, the button will not show up
};

// Work DATA
export const worksData = [
  {
    id: 1,
    img: 'DealerOnONLogo.png',
    title: 'DealerOn',
    role: 'Linux Administrator',
    workDate: 'September 2016 – July 2018',
    info:
      'As the Linux Administrator of the DevOps team responsible for a 300+ websites platform, I leverage a 150+ VMs VMWare production environment to materialize an enterprise-grade SaaS. Working in a hybrid environment, I was responsible for: NoSQLs databases, routing, monitoring, and overall health of the platform:',
    info2: 'I architect, deployed, and administered NoSQLs:',
    list11:
      '- a 5 node ElasticSearch Cluster and a 2 node ElesticSearch cluster with a Logstash and Kibana instance on top',
    list12: '- a 9 node Riak cluster',
    list13: '- 2 2 nodes of Redis clusters',
    info3: 'Routing:',
    list21: '- a 3 node NGINX reverse-proxy load-balancing cluster',
    list22:
      '- reworked QA + staging routing to allow any production website to be tested in QA / Staging',
    list23:
      '- used Ansible to deploy configuration changes in production serves without interruptions',
    list24:
      '- managed the configuration of our CDN service, Fastly, utilizing their Varnish Custom Language',
    info4: 'Monitoring:',
    list31: '- deployed Zabbix monitoring solution over the full SaaS platform',
    list32:
      '- configure and administered a 3 node Graylog system to ingest and process millions of logs in multiple formats from multiple sources daily',
    list33:
      '- deploy and configure Grafana instance for improved performance analysis and insights',
    info5:
      'With all these tools, I ensured optimal enterprise SaaS performance 24/7/365. I also participated in maturing the platform to SOC 2 standard, as well as the transfer of the leads application from on-prem to Azure without service interruption.',
    url: 'https://www.dealeron.com/',
  },
  {
    id: 2,
    img: 'DigBangLogo.png',
    title: 'DigBang',
    role: 'Junior Systems Administrator',
    workDate: 'February 2013 – January 2016',
    info:
      'Working in the IT department of an SW Development company, my roots were forged in the world of technology creation. Starting as a helpdesk, my role matured to all the facets of the IT department. I built and maintained all of the physical hardware on-site (developers CPUs and the machines allocated in the server rack).',
    info2: 'I was responsible for the administration and upkeep of:',
    list11: "- the developer's machines",
    list12: '- the Active Directory',
    list13: '- the Exchange Server',
    list14: '- the Linux DEV and QA servers',
    info4: 'To keep up with the ever-evolving world of technology development, I:',
    list31: '- led the implementation, testing, and roll-out of Atlassian JIRA',
    list32: '- co-led the integration of the Laravel framework and Deployer deployment tool',
    list33:
      '- seamlessly migrated from Xen hypervisor to Proxmox virtualization without interruption to production',
    url: 'https://www.digbang.com/?lg=en',
  },
];

// Research Data
export const researchData = {
  img: 'GallaudetLogoBlack.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
};

// Education Data
export const educationData = {
  img: 'GallaudetLogoNormal.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
};

// Technology Data
export const technologyData = {
  img: 'GallaudetLogoBlack.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
};

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'pablojaku@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/pablojakubowicz/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/pablojaku',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
