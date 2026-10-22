import { Skill, Service, Project, CaseStudy, TimelineItem, Testimonial, BlogPost, FAQItem } from './types';

export const skillsData: Skill[] = [
  // Programming
  { name: 'Python', category: 'Programming', level: 92 },
  { name: 'SQL (PostgreSQL, T-SQL)', category: 'Programming', level: 95 },
  { name: 'R', category: 'Programming', level: 75 },
  
  // Visualization
  { name: 'Power BI', category: 'Visualization', level: 95 },
  { name: 'Tableau', category: 'Visualization', level: 90 },
  { name: 'Looker Studio', category: 'Visualization', level: 85 },
  
  // Databases
  { name: 'PostgreSQL', category: 'Databases', level: 90 },
  { name: 'MySQL', category: 'Databases', level: 88 },
  { name: 'SQL Server', category: 'Databases', level: 85 },
  
  // Spreadsheet
  { name: 'Advanced Excel', category: 'Spreadsheet', level: 95 },
  { name: 'Google Sheets', category: 'Spreadsheet', level: 90 },
  
  // Cloud
  { name: 'Azure Data Factory', category: 'Cloud', level: 80 },
  { name: 'AWS (S3, Redshift)', category: 'Cloud', level: 78 },
  
  // Libraries
  { name: 'Pandas & NumPy', category: 'Libraries', level: 94 },
  { name: 'Matplotlib & Seaborn', category: 'Libraries', level: 90 },
  { name: 'Plotly', category: 'Libraries', level: 85 },
  
  // Soft Skills
  { name: 'Data Storytelling', category: 'Soft Skills', level: 95 },
  { name: 'Business Analysis', category: 'Soft Skills', level: 92 },
  { name: 'Stakeholder Communication', category: 'Soft Skills', level: 90 },
  { name: 'Problem Solving', category: 'Soft Skills', level: 95 }
];

export const servicesData: Service[] = [
  {
    id: 'bi',
    title: 'Business Intelligence',
    description: 'Transforming complex data structures into high-impact visual systems that empower decision-makers to act with clarity.',
    iconName: 'BarChart3',
    features: ['Custom BI Architectures', 'Automated Data Pipelines', 'Role-Based Dashboard Portals', 'Data Governance Frameworks']
  },
  {
    id: 'dashboards',
    title: 'Dashboard Development',
    description: 'Creating executive-ready, interactive, and high-performance dashboards in Power BI, Tableau, and Looker Studio.',
    iconName: 'LayoutDashboard',
    features: ['DAX & LOD Calculation Modeling', 'Interactive Drills & Tooltips', 'Live Connection & DirectQuery', 'Mobile-Responsive Views']
  },
  {
    id: 'cleaning',
    title: 'Data Cleaning & ETL',
    description: 'Building robust pipelines to ingest, clean, and enrich messy raw data from disparate sources into unified tables.',
    iconName: 'Database',
    features: ['Python Pandas Wrangling', 'SQL Schema Normalization', 'Automated Duplication Removal', 'Anomaly & Outlier Flagging']
  },
  {
    id: 'automation',
    title: 'Reporting Automation',
    description: 'Replacing manual spreadsheet tasks with cron-scheduled ETL jobs, saving hundreds of engineering hours.',
    iconName: 'Cpu',
    features: ['Python Automation Scripts', 'Excel Macro Migration', 'SQL Agent Job Scheduling', 'Real-time Alert Triggers']
  },
  {
    id: 'customer',
    title: 'Customer Analytics',
    description: 'Slicing customer behavior to reveal lifetime value (CLV), churn tendencies, and core acquisition channels.',
    iconName: 'Users',
    features: ['RFM Cohort Segmentation', 'Predictive Churn Modeling', 'Conversion Funnel Diagnostics', 'Retention Trend Isolation']
  },
  {
    id: 'sales',
    title: 'Sales & Revenue Analytics',
    description: 'Diagnosing revenue leakage, identifying product affinity pairs, and forecasting seasonal demand spikes.',
    iconName: 'TrendingUp',
    features: ['Market Basket Affinity analysis', 'Pricing Elasticity Mapping', 'Sales Pipeline Bottleneck discovery', 'Quarterly Revenue Projection']
  }
];

export const projectsData: Project[] = [
  {
    id: 'sales-dash',
    title: 'Executive Sales Performance Portal',
    category: 'Business Intelligence',
    problem: 'An international e-commerce retailer with $12M ARR was tracking sales across 4 disparate software systems. Executives had zero real-time visibility, leading to delayed pricing responses and over-stocking of low-demand items.',
    solution: 'Engineered an automated end-to-end Power BI system. Ingested raw transactions via Python scripts from PostgreSQL databases, flattened schemas, and built dynamic cross-filtering dashboard dashboards.',
    impact: 'Consolidated reporting lag from 5 days to 2 minutes, enabling reactive promotional pricing that boosted net revenue by 14% ($1.6M) and reduced over-stocking inventory by 22% in 3 months.',
    tools: ['Power BI', 'SQL Server', 'Python', 'PowerQuery', 'DAX'],
    imageUrl: 'sales_dashboard'
  },
  {
    id: 'churn-predict',
    title: 'SaaS Customer Retention Engine',
    category: 'Predictive Analytics',
    problem: 'A subscription-based SaaS provider experienced a sudden, unexplained spike in monthly churn from 3.2% to 6.8%, putting upcoming Series B funding rounds at severe risk.',
    solution: 'Designed and deployed a Python Pandas/Seaborn and Scikit-Learn churn predictive model. Analyzed feature correlations across login frequencies, API usage metrics, support ticket volume, and contract length parameters.',
    impact: 'Identified the critical threshold of customer health degradation. Deployed proactive warning triggers for customer success reps, reducing monthly churn down to an all-time low of 2.4%.',
    tools: ['Python', 'Pandas', 'Scikit-Learn', 'SQL', 'Seaborn'],
    imageUrl: 'churn_prediction'
  },
  {
    id: 'fin-analytics',
    title: 'Financial Health & Runway Analytics',
    category: 'Financial Analytics',
    problem: 'A rapidly expanding logistics enterprise struggled with manual cash flow forecasts, taking up 40+ hours of finance team labor every month with high margin-of-error rates.',
    solution: 'Engineered a real-time Financial Runway & Budget Tracking dashboard inside Tableau. Connected directly to ERP and cloud accounting APIs, modeling dynamic variables for variable shipping costs and currency fluctuations.',
    impact: 'Automated 100% of cash flow forecasting reporting, liberating 10 engineering hours weekly, and reduced cash flow forecasting variance error from 18% down to 2.5%.',
    tools: ['Tableau', 'Excel', 'PostgreSQL', 'SQL Server', 'Alteryx'],
    imageUrl: 'financial_dashboard'
  },
  {
    id: 'retail-kpi',
    title: 'Omnichannel Retail Inventory Diagnostic',
    category: 'Data Visualization',
    problem: 'A retail chain with 45 physical locations struggled with stock-outs of high-margin items while low-margin clearance inventory clogged prime shelf space.',
    solution: 'Created an interactive inventory diagnostic matrix using Looker Studio. Modeled product velocity index (PVI) and localized sales coefficients to calculate automated inventory replenishment thresholds.',
    impact: 'Reduced physical store stock-outs by 34% and improved general shelf-space gross margin return on investment (GMROI) by 18.5% across all 45 locations.',
    tools: ['Looker Studio', 'BigQuery', 'SQL', 'Google Sheets'],
    imageUrl: 'retail_kpi'
  },
  {
    id: 'hr-analytics',
    title: 'Talent Acquisition & Attrition Advisor',
    category: 'HR Analytics',
    problem: 'A corporate conglomerate faced a 28% voluntary attrition rate in engineering roles, costing an estimated $2.1M annually in recruitment overhead and lost productivity.',
    solution: 'Curated an internal HR Analytics platform mapping employee feedback sentiment, compensation peer indices, time-to-promotion rates, and direct manager feedback.',
    impact: 'Discovered that engineers with stagnant salaries relative to market averages left exactly at the 18-month mark. Armed HR with preventive retention budgets, lowering attrition by 40% in key teams.',
    tools: ['Power BI', 'MySQL', 'Excel', 'DAX', 'Python'],
    imageUrl: 'hr_analytics'
  },
  {
    id: 'marketing-perf',
    title: 'Multi-Channel Marketing Attribution System',
    category: 'Marketing Analytics',
    problem: 'A direct-to-consumer lifestyle brand was spending $400k/month across Facebook, Google, and TikTok Ads, but could not accurately determine which channel drove high-LTV purchases.',
    solution: 'Coded a Python-based custom Markov Chain attribution script, replacing inaccurate last-click defaults. Visualized findings in an interactive dashboard for marketing leads.',
    impact: 'Revealed TikTok was heavily undervalued as an initial touchpoint. Reallocated 30% of marketing budget, reducing overall Customer Acquisition Cost (CAC) by 21% while increasing purchase volume.',
    tools: ['Python', 'SQL', 'Pandas', 'Plotly', 'Google Analytics'],
    imageUrl: 'marketing_dashboard'
  }
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'retail-diagnostic',
    title: 'Re-engineering Retail Profitability',
    subtitle: 'Omnichannel inventory velocity diagnostics for a 45-store retailer',
    businessProblem: 'Our retail client had $35M in annual sales across 45 stores, but overall profitability was shrinking due to a mismatch between regional customer demand and stock allocation. Stores in cooler regions were receiving summer wear, while southern stores faced critical out-of-stock events on seasonal merchandise.',
    dataSource: 'Historical point-of-sale (POS) transactional data (22M rows), regional weather API history, product inventory ledgers, and demographic census profiles.',
    methodology: [
      'Engineered a localized seasonal demand coefficient for each product category.',
      'Constructed a dynamic pricing model based on localized stock levels.',
      'Developed automated inventory re-routing logic utilizing nearest-neighbor store nodes.'
    ],
    cleaningProcess: [
      'Removed 124,000 duplicated transaction logs using SQL CTEs.',
      'Imputed missing zip codes using closest store coordinates.',
      'Parsed inconsistent ISO date-time entries from legacy registers.'
    ],
    analysisDetails: [
      'Performed Market Basket analysis identifying purchase associations.',
      'Run K-means clustering to segment store behaviors based on velocity.',
      'Applied seasonal ARIMA time-series forecasting for upcoming stock needs.'
    ],
    insights: [
      'High-margin outerwear products were staying on shelves 40% longer in southern stores than projected.',
      'A 5% discount on products with declining velocity (PVI < 0.2) boosted cash liquidity faster than a 20% flat clearance sale at the end of the season.'
    ],
    businessImpact: 'Optimized stock allocation lowered general inventory holding costs by $1.8M (24%), reduced out-of-stock events during peak hours by 34%, and lifted net profitability margin across the chain from 4.1% to 6.8%.',
    metricLabel: 'Inventory Holding Costs Saved',
    metricValue: '$1.8M',
    metricImprovement: '-24%',
    chartData: [
      { label: 'Month 1', before: 520, after: 510 },
      { label: 'Month 2', before: 580, after: 490 },
      { label: 'Month 3', before: 610, after: 440 },
      { label: 'Month 4', before: 650, after: 380 },
      { label: 'Month 5', before: 720, after: 320 }
    ]
  },
  {
    id: 'saas-retention',
    title: 'Plugging the SaaS Churn Leak',
    subtitle: 'Data-driven churn diagnostics and proactive action engine',
    businessProblem: 'A B2B SaaS platform serving 8,500 active teams was losing $180k in monthly recurring revenue (MRR) due to a dramatic increase in account cancellations. Voluntary churn had climbed to an alarming 6.8% monthly, risking their growth valuation metrics.',
    dataSource: 'User session telemetry logs, Stripe transaction billing history, Zendesk support tickets, and HubSpot account parameters.',
    methodology: [
      'Engineered active user engagement indices based on feature usage profiles.',
      'Conducted cohort survival analysis using Python Lifelines package.',
      'Integrated live health scores into Customer Success CRM pipelines.'
    ],
    cleaningProcess: [
      'Aggregated billions of raw clickstream logs into team-level daily summaries.',
      'Mapped and merged billing events to account IDs across active/inactive states.',
      'Standardized Support Ticket resolution durations across timezones.'
    ],
    analysisDetails: [
      'Fitted Cox Proportional Hazards regression model to identify risk weightings.',
      'Discovered that teams who failed to invite a 3rd user within 14 days had an 82% churn probability.',
      'Isolated a correlation between delayed ticket resolution (over 8 hours) and immediate cancellation.'
    ],
    insights: [
      'The biggest predictor of churn was a sudden 50% drop-off in core-feature page loads over a 7-day rolling window.',
      'Accounts that completed the workspace setup wizard had a 3.5x higher lifetime value than self-guided teams.'
    ],
    businessImpact: 'The predictive model correctly flagged 89% of churn-risk teams before they cancelled. CS outreach to targeted accounts recovered $110k/month in revenue, dropping churn from 6.8% to 2.4%.',
    metricLabel: 'Monthly Churn Rate',
    metricValue: '2.4%',
    metricImprovement: '-64.7%',
    chartData: [
      { label: 'Initial', before: 6.8, after: 6.8 },
      { label: 'Week 2', before: 6.9, after: 5.5 },
      { label: 'Week 4', before: 7.1, after: 4.2 },
      { label: 'Week 6', before: 7.0, after: 3.1 },
      { label: 'Week 8', before: 7.2, after: 2.4 }
    ]
  }
];

export const timelineData: TimelineItem[] = [
  {
    id: 'exp-1',
    role: 'Senior Data Analyst',
    company: 'Apex Retail Solutions',
    location: 'Houston, TX (Remote)',
    duration: '2023 - Present',
    type: 'experience',
    achievements: [
      'Architected comprehensive Power BI dashboards tracking omnichannel sales, reducing reporting latency from 48 hours to near-instantaneous live metrics.',
      'Created custom python-based data pipeline extracting, scraping, and standardizing competitor pricing data, boosting market capture share by 8.5%.',
      'Presented deep-dive quarterly data stories to C-suite, guiding a successful $4.5M inventory reallocation strategy.'
    ]
  },
  {
    id: 'exp-2',
    role: 'Data Analyst',
    company: 'Fintech Spark Group',
    location: 'Chicago, IL',
    duration: '2021 - 2023',
    type: 'experience',
    achievements: [
      'Constructed SQL Server automated diagnostic reporting queries across 4M+ consumer transactions, slashing weekly manual audit workloads by 18 hours.',
      'Modeled customer attrition and loan default patterns utilizing Scikit-learn, leading to tighter risk assessments that saved $650k in bad assets.',
      'Coached 14 business product managers on basic SQL and self-serve Tableau queries, promoting a company-wide data literacy culture.'
    ]
  },
  {
    id: 'exp-3',
    role: 'Business Intelligence Analyst',
    company: 'Stellar Tech Corp',
    location: 'New York, NY',
    duration: '2020 - 2021',
    type: 'experience',
    achievements: [
      'Configured and hosted Looker Studio dashboards tracking digital ads spend optimization across Facebook, LinkedIn, and Google Ads accounts.',
      'Isolated and resolved a major tracking script mismatch that was skewing attribution metrics by 15%, aligning operational data with billing systems.',
      'Collaborated with engineering to migrate legacy local databases into central AWS Redshift data warehouses.'
    ]
  },
  {
    id: 'exp-4',
    role: 'Freelance BI Consultant',
    company: 'Independent Practice',
    location: 'Global',
    duration: '2019 - Present (Part-time)',
    type: 'experience',
    achievements: [
      'Consulted for 12 global startups, designing Excel automated models, dashboard reports, and cleaning highly unstructured Google Sheets logs.',
      'Helped a SaaS startup prepare investor reporting slides, leading to a successful $1.2M seed-stage fundraising round.',
      'Structured PostgreSQL schemas and automated cleanups for local shipping operations.'
    ]
  },
  {
    id: 'edu-1',
    role: 'M.Sc. in Business Analytics',
    company: 'University of Texas',
    location: 'Austin, TX',
    duration: '2018 - 2020',
    type: 'education',
    achievements: [
      'Specialized in Predictive modeling, Big Data Architecture, and Advanced Econometrics.',
      'Graduated with Honors, top 5% of class.',
      'Thesis: Predictive churn models inside consumer retail environments using weather regression coefficients.'
    ]
  },
  {
    id: 'edu-2',
    role: 'B.Sc. in Statistics & Computer Science',
    company: 'University of Ibadan',
    location: 'Ibadan, Nigeria',
    duration: '2013 - 2017',
    type: 'education',
    achievements: [
      'Acquired deep foundation in statistical inference, programming logic, data structures, and probability theory.',
      'President of the Student Statistical Association.',
      'Graduated First Class Honors.'
    ]
  }
];

export const certificationsData = [
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google (Coursera)',
    date: '2020',
    id: 'cert-1',
    skills: 'R Programming, Tableau, Data Cleansing, SQL, Spreadsheet analysis'
  },
  {
    title: 'Microsoft Certified: Power BI Data Analyst Associate',
    issuer: 'Microsoft',
    date: '2021',
    id: 'cert-2',
    skills: 'DAX modeling, PowerQuery, Workspace administration, Advanced visualization'
  },
  {
    title: 'IBM Data Science Professional Certificate',
    issuer: 'IBM (Coursera)',
    date: '2021',
    id: 'cert-3',
    skills: 'Python programming, SQL, Jupyter Notebooks, Machine learning, Pandas'
  },
  {
    title: 'Advanced SQL Querying Masterclass',
    issuer: 'Udemy Certificate',
    date: '2020',
    id: 'cert-4',
    skills: 'Window functions, CTEs, Query execution plans, Database indexing'
  },
  {
    title: 'Tableau Desktop Certified Associate',
    issuer: 'Tableau Software',
    date: '2022',
    id: 'cert-5',
    skills: 'Level of Detail (LOD) calculations, Dashboard dashboard parameters, Server publishing'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    name: 'Sarah Jenkins',
    role: 'VP of Marketing',
    company: 'Velo Retail Group',
    rating: 5,
    comment: "Oluwabukunmi is an exceptional analytics partner. He didn't just hand us a database; he told us a story of why we were losing sales and gave us a dynamic dashboard to prevent it. Our campaign efficiency rose by 22% in the very first quarter.",
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't-2',
    name: 'Marcus Vance',
    role: 'Chief Operations Officer',
    company: 'Apex Supply Chain',
    rating: 5,
    comment: 'The inventory automation dashboard has completely revolutionized our daily morning briefs. Instead of arguing about whose spreadsheets are correct, we make decisions based on real-time data. Highly recommended!',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't-3',
    name: 'Evelyn Sterling',
    role: 'Co-Founder & CEO',
    company: 'ScribeSaaS',
    rating: 5,
    comment: 'His cohort churn models pinpointed the exact friction points in our user onboarding experience. Bukunmi is that rare analyst who possesses both extreme technical skill and strong business intuition.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: 'b-1',
    title: 'Beyond Last-Click: Building a Custom Markov Chain Attribution Model in Python',
    category: 'Python Analytics',
    publishedAt: 'May 12, 2026',
    readTime: '8 min read',
    excerpt: 'Last-click attribution models are giving credit to the wrong channels. Learn how to write a multi-touch attribution model in Python using graph nodes and Markov chains.',
    content: `Many marketers are blind to their true customer acquisition channels. They rely on "Last-Click" attribution, which gives 100% of the sale credit to the final link clicked. In this article, I explain how we can model user pathways as a transition probability graph—a Markov chain—and mathematically assign fair weights to initial awareness channels like search engine ads or TikTok views. Discover step-by-step pandas codes to construct the conversion probability matrices.`,
    slug: 'markov-chain-attribution-python'
  },
  {
    id: 'b-2',
    title: 'Power BI DAX Performance Tuning: Optimizing Millions of Rows for Executive Dashboards',
    category: 'Power BI',
    publishedAt: 'April 28, 2026',
    readTime: '10 min read',
    excerpt: 'Is your Power BI dashboard lagging? Discover the exact steps to audit slow measures, refactor expensive CALCULATE statements, and leverage Star Schemas.',
    content: `When a CEO opens a dashboard, they expect a sub-second load speed. If they see the spin-wheel of death, you have failed as an analyst. In this technical deep-dive, we explore how DAX query evaluation engines process rows. We will cover:
1. Moving filters from CALCULATE to variables.
2. The danger of using the 'FILTER' statement over simple column filters.
3. Why VertiPaq compression fails when you include raw DateTime timestamps instead of separating Dates and Times.
Using these rules, I optimized a client's 40M-row dashboard load speed from 12 seconds down to 0.4 seconds.`,
    slug: 'power-bi-dax-performance-tuning'
  },
  {
    id: 'b-3',
    title: 'The SQL Clean-up Playbook: Common Table Expressions (CTEs) vs Temporary Tables',
    category: 'SQL Tips',
    publishedAt: 'March 15, 2026',
    readTime: '6 min read',
    excerpt: 'Cleaning messy client transactions? Learn when to use CTEs for readability, and when temporary tables are necessary to prevent server bottlenecks.',
    content: `Raw business data is muddy. We often deal with duplicated sales logs, orphaned customer accounts, and missing zip codes. SQL is your scalpel. But do you use a CTE or a Temporary Table?
- CTEs: Highly readable, excellent for recursion, but they execute on the fly every time they are referenced.
- Temp Tables: Persisted in TempDB, indexable, ideal for joining 1M+ rows multiple times.
Learn to structure your queries to clean 10M+ transaction logs without causing operational databases to stall.`,
    slug: 'sql-cte-vs-temp-tables'
  },
  {
    id: 'b-4',
    title: 'Standardizing Incomplete Datasets: Taming Messy CRM Records with Pandas',
    category: 'Data Cleaning',
    publishedAt: 'February 10, 2026',
    readTime: '7 min read',
    excerpt: 'Null values, mismatched country codes, and multiple formats. Step-by-step Python code to audit and normalize legacy customer CRM dumps.',
    content: `Nothing wastes a data analyst's time like unstandardized strings. "US", "USA", "United States", and "U.S.A." must all resolve to a single code. Phone numbers come in with country codes, hyphens, or parentheses. In this handbook, I share my Python code snippet that implements fuzzy string matching via 'rapidfuzz', standardized country parsing, and automated imputation of missing numerical indices using localized averages.`,
    slug: 'standardizing-crm-pandas'
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Why should I hire Oluwabukunmi instead of a generalist software engineer?',
    answer: 'Software engineers build infrastructure; Data Analysts extract revenue. I specialize in the bridge between raw code and executive decisions. With 4+ years of focused analytical experience, I know how to design data warehouses, clean messy databases, write statistical models, and build beautiful executive-ready BI dashboards that translate directly into operational growth and cash saved.'
  },
  {
    id: 'faq-2',
    question: 'How do you typically collaborate with clients on a new project?',
    answer: 'Our workflow consists of 4 distinct phases: \n1. DISCOVERY: We define the precise business KPIs you want to move (e.g., reduce churn, boost sales efficiency).\n2. AUDIT & INGESTION: I inspect your raw data streams, databases, and reporting systems to design the technical architecture.\n3. MODELING & VISUALIZATION: I ingest, clean, and model the data into dynamic, beautiful interactive dashboards.\n4. TRANSFER & TRAINING: I deliver the reporting portal and train your key managers to self-serve insights, ensuring long-term adoption.'
  },
  {
    id: 'faq-3',
    question: 'What industries do you have the most experience with?',
    answer: 'I have deep expertise in E-commerce & Omnichannel Retail, Subscription SaaS platforms, Financial Tech, and HR Consulting. My statistical foundation is highly transferable across any sector that tracks transactions, user behavior, or operational costs.'
  },
  {
    id: 'faq-4',
    question: 'What tools and programming languages are in your core daily tech stack?',
    answer: 'My daily driver stack consists of SQL (PostgreSQL, T-SQL) for data querying, Python (Pandas, Numpy, Scikit-Learn) for data cleaning and predictive modeling, and Power BI & Tableau for high-fidelity interactive dashboard development. I also leverage cloud environments like Microsoft Azure and AWS for pipeline orchestrations.'
  },
  {
    id: 'faq-5',
    question: 'Can you work with messy Excel spreadsheets or do I need a database?',
    answer: 'I work with data in whatever state it exists. I frequently take client files consisting of unstructured, multi-sheet Excel files and clean them using Python into standardized data structures, either exporting them into professional BI systems or loading them into secure cloud SQL databases for permanent tracking.'
  }
];
