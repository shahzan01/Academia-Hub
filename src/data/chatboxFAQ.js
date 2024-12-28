const faqData = [
  {
    question: "What is your return policy?",
    answer: "Our return policy is 30 days with a receipt.",
  },
  {
    question: "What are your hours of operation?",
    answer: "We are open from 9am to 9pm, Monday to Saturday.",
  },
  {
    question: "Where can I find the courses?",
    answer: "You can find them all on the landing page of the website.",
  },
  {
    question: "Where can I find projects to learn?",
    answer: "You can find them all at the Projects section collectively.",
  },
  {
    question: "Will this be really beneficial for me?",
    answer: "Yes, of course, if you are a true learner.",
  },
  { question: "Hi", answer: "Hello! How can I assist you today?" },
  { question: "Hello", answer: "Hi there! How can I help you?" },
  {
    question: "How are you?",
    answer:
      "I'm just a chatbot, but I'm here to assist you to the best of my abilities!",
  },
  {
    question: "What is your name?",
    answer: "I am the StudyNotion chatbot, here to help you with your queries.",
  },
  {
    question: "Who created you?",
    answer: "I was created by the StudyNotion team to assist users like you.",
  },
  {
    question: "What can you do?",
    answer:
      "I can answer questions about our platform, courses, policies, and more. Try asking me something!",
  },
  {
    question: "How old are you?",
    answer:
      "I’m as old as the StudyNotion platform. Always learning and improving!",
  },
  {
    question: "Tell me a joke.",
    answer:
      "Why did the computer go to art school? It wanted to learn how to draw better connections!",
  },
  {
    question: "Do you like humans?",
    answer: "Of course! My entire purpose is to assist humans.",
  },
  {
    question: "What is your favorite color?",
    answer:
      "I like all colors, but StudyNotion's theme colors are my favorite.",
  },
  {
    question: "How can I contact support?",
    answer: "You can reach out to our support team at support@example.com.",
  },
  {
    question: "Can I track my order?",
    answer: "Yes, you can track your order in the 'My Orders' section.",
  },
  {
    question: "Do you offer free shipping?",
    answer: "Yes, free shipping is available for orders over $50.",
  },
  {
    question: "What courses do you offer?",
    answer:
      "We offer courses in technology, business, arts, and personal development.",
  },
  {
    question: "How do I reset my password?",
    answer: "Go to the login page and click 'Forgot Password'.",
  },
  {
    question: "What happens if I miss a live session?",
    answer: "Recorded sessions are available for later viewing.",
  },
  {
    question: "Do you provide mentorship?",
    answer: "Yes, some courses include mentorship options.",
  },
  {
    question: "How do I become an instructor?",
    answer:
      "Click on 'Become an Instructor' on the homepage and follow the steps.",
  },
  {
    question: "What kind of projects can I build?",
    answer: "Projects range from beginner to advanced in various domains.",
  },
  {
    question: "What is your privacy policy?",
    answer:
      "We prioritize user privacy. Read our policy on the 'Privacy Policy' page.",
  },
  {
    question: "Can I switch to another course after buying?",
    answer: "Yes, within 7 days of purchase, subject to terms.",
  },
  {
    question: "Do you have a mobile app?",
    answer: "Yes, our app is available for iOS and Android.",
  },
  {
    question: "Do you like coding?",
    answer: "As a chatbot, I live for coding and answering questions about it!",
  },
  {
    question: "What’s the weather like?",
    answer:
      "I'm not connected to a weather service, but it’s always sunny in StudyNotion land!",
  },
  {
    question: "Can you sing?",
    answer:
      "I’d love to, but I might need some upgrades to hit the right notes!",
  },
  {
    question: "Are you real?",
    answer:
      "I’m a virtual assistant, real enough to help you with your queries!",
  },
  {
    question: "What do you do for fun?",
    answer: "I enjoy learning new FAQs and becoming smarter every day!",
  },
  {
    question: "Can you recommend a course?",
    answer:
      "Sure! Tell me what topic you’re interested in, and I’ll help you out.",
  },
  {
    question: "What’s your favorite course?",
    answer:
      "I love all our courses equally. They’re all designed to help you learn!",
  },
  {
    question: "Can I talk to a human?",
    answer: "Sure! You can contact our support team at support@example.com.",
  },
  {
    question: "Are you smarter than a human?",
    answer:
      "I’m great at answering FAQs, but humans are much more creative than me!",
  },
  {
    question: "Can I learn coding here?",
    answer:
      "Absolutely! We have a variety of coding courses for all skill levels.",
  },
  {
    question: "Do you sleep?",
    answer: "Nope! I’m here 24/7 to assist you whenever you need.",
  },
  {
    question: "What do you think about AI?",
    answer: "I think AI is amazing, but I might be biased!",
  },
  {
    question: "Can you tell me a fun fact?",
    answer:
      "Sure! Did you know the first computer programmer was Ada Lovelace in the 1800s?",
  },
  {
    question: "Can I customize my learning path?",
    answer: "Yes, you can select courses and projects that match your goals.",
  },
  {
    question: "Are you happy?",
    answer: "I’m as happy as a chatbot can be when I’m helping you!",
  },
  {
    question: "Do you eat?",
    answer: "I don’t eat, but I do process data to stay active!",
  },
  {
    question: "Can you dance?",
    answer: "Not physically, but I can provide a great rhythm of answers!",
  },
  {
    question: "How can I get started with programming?",
    answer: "Start with beginner-friendly courses and build small projects.",
  },
  {
    question: "What’s your purpose?",
    answer:
      "To assist users like you with questions about StudyNotion and learning!",
  },
  {
    question: "Can I delete my account?",
    answer:
      "Yes, you can delete your account in the 'Account Settings' section.",
  },
  {
    question: "Do you remember me?",
    answer:
      "I don’t have memory right now, but I’m here to assist you in real-time!",
  },
  {
    question: "What’s the best way to learn?",
    answer: "Consistent practice and working on real-world projects.",
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we offer 24/7 customer support through chat and email.",
  },
  {
    question: "How do I contact support?",
    answer: "You can contact us via email at support@example.com.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping typically takes 5-7 business days.",
  },
  {
    question: "Can I change my order after placing it?",
    answer: "Yes, you can modify your order within 24 hours of placing it.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to select countries. Please check our shipping policy.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and Apple Pay.",
  },
  {
    question: "Is my payment information secure?",
    answer: "Yes, we use encrypted payment gateways for secure transactions.",
  },
  {
    question: "Can I get a refund for a course?",
    answer: "Yes, you can request a refund within 14 days of purchase.",
  },
  {
    question: "How do I access my courses?",
    answer: "Log in to your account and go to the 'My Courses' section.",
  },
  {
    question: "Are the courses certified?",
    answer: "Yes, many of our courses provide certificates upon completion.",
  },
  {
    question: "Do the courses have lifetime access?",
    answer: "Yes, once purchased, you can access the courses anytime.",
  },
  {
    question: "Can I download course materials?",
    answer: "Yes, most courses provide downloadable resources.",
  },
  {
    question: "Do you offer discounts?",
    answer: "Yes, we offer seasonal discounts and promotional offers.",
  },
  {
    question: "Can I gift a course to someone?",
    answer: "Yes, you can purchase a course as a gift during checkout.",
  },
  {
    question: "Are the projects beginner-friendly?",
    answer: "Yes, we have projects suitable for all skill levels.",
  },
  {
    question: "How often are new courses added?",
    answer: "New courses are added every month.",
  },
  {
    question: "Can I preview a course before buying?",
    answer: "Yes, most courses have free preview videos.",
  },
  {
    question: "What happens if I encounter a technical issue?",
    answer: "Contact our support team, and they’ll assist you promptly.",
  },
  {
    question: "Do you have a mobile app?",
    answer: "Yes, our app is available for iOS and Android.",
  },
  {
    question: "How do I cancel my subscription?",
    answer: "Go to 'Account Settings' and select 'Cancel Subscription'.",
  },
  {
    question: "Is there a free trial for courses?",
    answer: "Some courses offer a free trial period.",
  },
  {
    question: "Are there community forums for discussions?",
    answer: "Yes, we have community forums for every course.",
  },
  {
    question: "Do you offer coding challenges?",
    answer: "Yes, we have weekly coding challenges to test your skills.",
  },
  {
    question: "Can I earn badges or rewards?",
    answer: "Yes, you earn badges as you complete courses and projects.",
  },
  {
    question: "How do I download my certificate?",
    answer: "Go to the course page and click 'Download Certificate'.",
  },
  {
    question: "Do you provide group discounts?",
    answer: "Yes, group discounts are available for teams and organizations.",
  },
  {
    question: "What is the cancellation policy for events?",
    answer: "Cancellations are accepted up to 48 hours before the event.",
  },
  {
    question: "How do I report a bug?",
    answer: "Use the 'Report an Issue' form in the app or website.",
  },
  {
    question: "Do you offer scholarships?",
    answer: "Yes, we offer need-based scholarships for select courses.",
  },
  {
    question: "Can I pause my course progress?",
    answer:
      "Yes, your progress is saved automatically, so you can resume anytime.",
  },
  {
    question: "What is the difference between free and paid courses?",
    answer:
      "Paid courses typically offer more in-depth content and certification.",
  },
  {
    question: "How do I create a study group?",
    answer:
      "Join the community forums, and you can create or join study groups.",
  },
];
export default faqData;
