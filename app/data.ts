type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Trucker Tools React Native App',
    description:
      'Led complete rewrite of React Native app with 370k+ MAUs, achieving 99.98% crash-free rate and reducing app size from 48MB to 28MB.',
    link: 'https://apps.apple.com/us/app/trucker-tools/id1031251106',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Walmart Receiving App',
    description: 'Architected scalable React Native app for Walmart and Sam\'s Club inventory management, saving millions in compliance costs.',
    link: 'https://corporate.walmart.com/about/technology',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Trucker Tools / DAT Freight Analytics',
    title: 'React Native Mobile Engineer - Tech Lead',
    start: 'Apr 2023',
    end: 'Present',
    link: 'https://truckertools.com',
    id: 'work1',
  },
  {
    company: 'Walmart Global Tech',
    title: 'Software Engineer III - Tech Lead',
    start: 'Apr 2020',
    end: 'Apr 2023',
    link: 'https://walmart.com',
    id: 'work2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Optimizing React Native App Performance at Scale',
    description: 'How I reduced app size by 42% and achieved 99.98% crash-free rate with 370k+ MAUs',
    link: '/blog/optimizing-react-native-performance',
    uid: 'blog-1',
  },
  {
    title: 'Building Cost-Effective Mobile Solutions',
    description: 'Strategies that saved $104k in yearly API costs in just two weeks',
    link: '/blog/cost-effective-mobile-solutions',
    uid: 'blog-2',
  },
  {
    title: 'Leading Remote Engineering Teams',
    description: 'Lessons learned from managing distributed React Native development teams',
    link: '/blog/leading-remote-engineering-teams',
    uid: 'blog-3',
  },
  {
    title: 'From 41s to 21s: App Download Optimization',
    description: 'Technical deep dive into reducing React Native app bundle size and download times',
    link: '/blog/app-download-optimization',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/alexkev',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/alexkev',
  },
]

export const EMAIL = 'alex.kmatheson@gmail.com'
