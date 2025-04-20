import { CiYoutube } from "react-icons/ci";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const CARDS = [
    {
        id: 1,
        title: 'Expert Guidance',
        desc: 'Our apps are crafted with therapists, coaches, and scientists to ensure every tool is effective and backed by real expertise.',
        src: 'src/assets/badge.svg'
    },
    {
        id: 2,
        title: 'Personalization & Adaptability',
        desc: 'Humans are different, and we make our apps with that in mind. We embrace diversity in all shapes and forms, working hard to bring you personalized wellness programs for various goals, lifestyles, and conditions.',
        src: 'src/assets/edit-user.svg'
    },
    {
        id: 3,
        title: 'Easy-to-Follow Plans',
        desc: 'Life is busy—wellness shouldn’t add stress. Our programs provide simple steps you can stick to, so progress feels natural.',
        src: 'src/assets/memo.svg'
    },
    {
        id: 4,
        title: 'Real Insights from Real People',
        desc: 'Diversity is central to who we are. With team members who experience neurodiversity firsthand, we understand the challenges and triumphs of real-life wellness. That’s why our apps are thoughtfully designed to meet genuine needs and support personal journeys.',
        src: 'src/assets/social-media.svg'
    },
    {
        id: 5,
        title: 'Continuous Improvement',
        desc: 'We don’t settle, and neither should you. From user feedback to the latest research, we’re constantly updating and improving our apps to give you the best support, every step of the way.',
        src: 'src/assets/stars.svg'
    },
];

export const JOURNEYS = [
    {
        id: 1,
        title: "Assess your starting point",
        desc: "Take a brief quiz to define your mind and body goals.",
    },
    {
        id: 2,
        title: "Get your personalized plan",
        desc: "We’ll tailor your program to meet your specific goals and support you along the way.",
    },
    {
        id: 3,
        title: "Enjoy your progress!",
        desc: "Start forming habits to create a lasting change in your life and well-being.",
    }, 
]

export const sliderItems = [
    {
        id: 1,
        name: 'Kseniia Laba',
        job: 'Mental Health Coach | Neurodiversity Advocate',
        desc: 'Kseniia Laba, CEO of HeyWellness and a mental health coach, created the platform after her 2015 ADHD diagnosis, determined to replace ineffective apps with science-backed mental health strategies.',
        icons: [<FaLinkedinIn />],
        src: 'src/assets/kseniia-laba.webp',
    },
    {
        id: 2,
        name: ' Dr. Jonathan Rosenthal',
        job: ' Neurologist and Medical Doctor, New York',
        desc: ' Jonathan Rosenthal, a New York neurologist, founded the Neuroscience and Yoga Online Conference, uniting experts to explore yoga’s impact on health and brain function.',
        icons: [<FaLinkedinIn />, <FaInstagram />, <CiYoutube />],
        src: 'src/assets/rosenthal.webp',
    },
    {
        id: 3,
        name: 'Christine VanDoren',
        job: 'Certified Personal Trainer & Nutritionist',
        desc: 'A certified personal trainer and nutritionist dedicated to helping individuals unlock their full potential through sustainable fitness and healthy lifestyle changes.',
        icons: [<FaLinkedinIn />],
        src: 'src/assets/Christine-VanDoren.png',
    },
    {
        id: 4,
        name: 'Domenic Angelino',
        job: 'Expert Personal Trainer',
        desc: ' Domenic Angelino, MPH, MS, CSCS is a fitness expert and personal trainer with a background in exercise science, kinesiology, and public health.',
        icons: [<FaLinkedinIn />],
        src: 'src/assets/Domenic-Angelino.png',
    },
    {
        id: 5,
        name: 'Asteria Uzo Limai',
        job: 'Elite Performance Coach & Olympic Athlete',
        desc: 'An Olympic athlete and national record-holder who provides proven training techniques to help you build strength, speed, and endurance.',
        icons: [],
        src: 'src/assets/photo-20.webp',
    },
    {
        id: 6,
        name: 'Kristy Gerasimova',
        job: 'Weight Loss Coach',
        desc: 'A fitness coach who creates effective, results-driven workouts to help you stay consistent, motivated, and achieve real progress.',
        icons: [<FaInstagram />],
        src: 'src/assets/kristy-g.webp',
    },
    {
        id: 7,
        name: 'Destini Moody',
        job: 'Certified Dietitian',
        desc: 'Destini Moody, RD, CSSD, is a sports nutritionist who has worked with elite athletes and contributed to top men’s health publications like Sports Illustrated and Forbes Health.',
        icons: [<FaLinkedinIn />],
        src: 'src/assets/Destiny-Moody.png',
    },
    {
        id: 8,
        name: 'Biser Angelov',
        job: 'Mental Health Expert',
        desc: 'Biser Angelov, an ADHD researcher, helps the neurodivergent community navigate daily challenges through education and advocacy.',
        icons: [<FaLinkedinIn />],
        src: 'src/assets/biser-angelov.webp',
    }
]


export const TestimonialsInfo = [
    {
        id: 1,
        img: 'src/assets/review-1.webp',
        title: 'Perfect for busy moms',
        rating: 4.5,
        desc: "As a mom of two, I barely have time to sit down, let alone do long workouts. 😅 But these quick 15-minute sessions are just perfect! I can squeeze them in between nap times or while dinner's in the oven, and I've already noticed my core getting stronger. Plus, I have way more energy to keep up with my little ones! 🏋️‍♀️",
        profile: 'src/assets/profile-1.png',
        name: 'Sarah',
        type: 'HeyFit',
    },
    {
        id: 2,
        img: '',
        title: 'Keeps me sane!!',
        rating: 5,
        desc: "As a mom of three, my life is pure chaos..sticky fingers, loud toys, and never-ending to-do lists. HeyZen is my little escape. Just a few minutes of meditation, and I feel like me again. Thank you for this peace in my pocket! 💖",
        profile: 'src/assets/profile-2.png',
        name: 'Taylor',
        type: 'HeyZen',
    },
    {
        id: 3,
        img: '',
        title: 'Inner peace, finally!!!!',
        rating: 5,
        desc: "Endless work emails and nonstop calls are all so overwhelming. 😩 But with HeyZen, I can pause, breathe, and reset. It's like hitting refresh for my mind. Recommended!",
        profile: 'src/assets/profile-3.png',
        name: 'Lisa',
        type: 'HeyZen',
    },
    {
        id: 4,
        img: 'src/assets/review-2.webp',
        title: 'Fitness that works 🔥 🔥 🔥',
        rating: 5,
        desc: "No equipment, no excuses! I love how simple and effective these workouts are. I don't need a gym membership anymore – I'm stronger, healthier, and saving money. Hurray!🎉",
        profile: 'src/assets/profile-4.png',
        name: 'Daniel',
        type: 'HeyFit',
    },
    {
        id: 5,
        img: '',
        title: 'Lazy but sweaty! 😂',
        rating: 4.5,
        desc: "I love that HeyFit lets me stay on my couch for some workouts (yes, really!) but still gets me sweating like crazy. These “lazy” workouts are sneaky—fun, simple, and shockingly effective. I’m burning calories and toning up without even realizing it!",
        profile: 'src/assets/profile-5.png',
        name: 'Masha',
        type: 'HeyFit',
    },
    {
        id: 6,
        img: '',
        title: 'Life-changing for my back pain',
        rating: 5,
        desc: "I used to wake up stiff and sore every day. 😣 After starting HeyFit, my back pain is completely gone. I feel lighter, more flexible, and my body doesn't ache anymore. I didn't think wall pilates could do this much!",
        profile: 'src/assets/profile-6.png',
        name: 'Mark',
        type: 'HeyFit',
    },
    {
        id: 7,
        img: 'src/assets/review-3.webp',
        title: 'Finally seeing progress XD',
        rating: 5,
        desc: "I've tried so many programs that didn't work, but HeyFit was different. I finally started losing weight, my body feels stronger, and in just 9 classes, I’ve noticed visible changes in my posture and muscle tone.",
        profile: 'src/assets/profile-7.png',
        name: 'Daniel',
        type: 'HeyFit',
    },
    {
        id: 8,
        img: '',
        title: 'Said bye to text neck',
        rating: 5,
        desc: "I love that HeyFit lets me stay on my couch for some workouts (yes, really!) but still gets me sweating like crazy. These “lazy” workouts are sneaky—fun, simple, and shockingly effective. I’m burning calories and toning up without even realizing it!",
        profile: 'src/assets/profile-8.png',
        name: 'Jason',
        type: 'HeyZen',
    },
    {
        id: 9,
        img: '',
        title: 'OMG 🔥🔥🔥',
        rating: 5,
        desc: "I love that HeyFit lets me stay on my couch for some workouts (yes, really!) but still gets me sweating like crazy. These “lazy” workouts are sneaky—fun, simple, and shockingly effective. I’m burning calories and toning up without even realizing it!",
        profile: 'src/assets/profile-9.png',
        name: 'Emma',
        type: 'HeyZen',
    },

];

export const MAGAZINE = [
    {
        id: 1,
        src: 'src/assets/maga-1.jpeg',
        title: 'ADHD Planner Guide: Top Features, Types & Tips for Better Organization in 2025',
        date: 'April 3, 2025 |',
        time: '11 mins read',
    },
    {
        id: 2,
        src: 'src/assets/maga-2.jpeg',
        title: 'Chicken and Broccoli Diet: A Complete Guide to Fast Weight Loss and Muscle Gains',
        date: 'April 3, 2025 |',
        time: '10 mins read',
    },
    {
        id: 3,
        src: 'src/assets/maga-3.jpeg',
        title: 'Somatic Exercises for Weight Loss: A Mindful Path to Sustainable Results',
        date: 'April 3, 2025 |',
        time: '12 mins read',
    },
]


export const QUESTIONS = [
    {
        id: 1,
        qst: '1. What makes HeyWellness products different from other wellness apps?',
        desc: 'HeyWellness features wellness programs for both physical and mental well-being. Our apps combine expert-driven programs with a focus on personalization, making it easier for you to achieve your mental and physical wellness goals at your own pace.',
    },
    {
        id: 2,
        qst: '2. Who creates the wellness programs and content?',
        desc: 'All our products are developed in collaboration with experts, including therapists, coaches, scientists, and fitness professionals. This ensures our tools are grounded in research and proven practices.',
    },
    {
        id: 3,
        qst: '3. Are the programs personalized to my needs?',
        desc: 'Yes! We tailor our programs based on your goals, lifestyle, and feedback. From mental health support to fitness plans, we make sure each program is tailored to your unique needs, lifestyle, and objectives for a more effective journey.',
    },
    {
        id: 4,
        qst: '4. How do you ensure the apps stay effective and relevant?',
        desc: 'Yes! We tailor our programs based on your goals, lifestyle, and feedback. From mental health support to fitness plans, we make sure each program is tailored to your unique needs, lifestyle, and objectives for a more effective journey.',
    },
    {
        id: 5,
        qst: '5. How does HeyWellness support mental and physical balance?',
        desc: 'At HeyWellness, we believe true wellness begins with harmony between mind and body. Drawing from the diverse experiences within our team, our apps offer a unique blend of workouts, mental exercises, affirmations, and mindfulness practices—designed to nurture holistic health and help you thrive.',
    }
]

export const STEPS = [
    {
        id: 1,
        title: 'Assess your starting point',
        desc: 'Define your current health and goals with our interactive quiz.',
        show: true,
    },
    {
        id: 2,
        title: 'Get your personalized program',
        desc: 'We create a unique program just for you. Everyone’s path to wellness is unique, and we’re here to guide you through it.',
        show: false,
    },
    {
        id: 3,
        title: 'Build lasting habits',
        desc: 'Start forming habits to create lasting changes in your well-being journey.',
        show: false,
    },
]