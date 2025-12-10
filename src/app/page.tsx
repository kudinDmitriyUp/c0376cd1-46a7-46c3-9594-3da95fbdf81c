"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroGlobe from '@/components/sections/hero/HeroGlobe';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardTwenty from '@/components/sections/feature/FeatureCardTwenty';
import TeamCardSeven from '@/components/sections/team/TeamCardSeven';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactMedia from '@/components/sections/contact/ContactMedia';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Sparkles, CheckCircle, Star, Crown, Gift } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="large"
      sizing="largeSizeExtraLargeSpacing"
      background="grid"
      cardStyle="accent-corner-border"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Serenity Pilates"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765399796981-lw9smjiv.jpg"
          button={{
            text: "Book Class",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroGlobe
          title="Find Your Inner Balance"
          description="Transform your body and mind through personalized pilates classes. Experience the perfect blend of strength, flexibility, and mindfulness in our serene studio."
          tag="Welcome to Wellness"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Start Your Journey",
              href: "contact"
            },
            {
              text: "View Classes",
              href: "pricing"
            }
          ]}
          className="py-20"
          containerClassName="text-center"
          titleClassName="text-5xl md:text-6xl font-bold tracking-tight"
          descriptionClassName="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            {
              type: "text",
              content: "Our Philosophy: "
            },
            {
              type: "image",
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765399796981-lw9smjiv.jpg",
              alt: "Pilates concept"
            },
            {
              type: "text",
              content: " mindful movement for every body"
            }
          ]}
          useInvertedBackground="noInvert"
          buttons={[
            {
              text: "Learn Our Story",
              href: "#"
            }
          ]}
          headingClassName="text-4xl md:text-5xl font-bold"
          containerClassName="py-20"
        />
      </div>

      <div id="classes" data-section="classes">
        <FeatureCardTwenty
          images={[
            {
              id: 1,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765399798641-y0kgbx82.jpg",
              imageAlt: "Mat Pilates Class"
            },
            {
              id: 2,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765399799459-ndz3u1n8.jpg",
              imageAlt: "Reformer Machine"
            },
            {
              id: 3,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765399800254-q8ygyyhb.jpg",
              imageAlt: "Group Class Experience"
            },
            {
              id: 4,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765399797842-8nggj7e1.jpg",
              imageAlt: "Studio Ambiance"
            }
          ]}
          title="Classes for Every Level"
          description="From beginner foundations to advanced techniques, our diverse class offerings are designed to meet you where you are. Each session combines strength building, flexibility enhancement, and mindfulness practice."
          tag="Expert Guidance"
          tagIcon={CheckCircle}
          buttons={[
            {
              text: "Browse All Classes",
              href: "pricing"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          titleClassName="text-4xl font-bold"
          descriptionClassName="text-lg leading-relaxed text-foreground/80"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardSeven
          team={[
            {
              id: "1",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765399801030-jy0rtgcp.jpg",
              imageAlt: "Sarah - Certified Pilates Instructor"
            },
            {
              id: "2",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765399801935-p73oai73.jpg",
              imageAlt: "Mike - Advanced Pilates Specialist"
            },
            {
              id: "3",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765399802846-ma071dyn.jpg",
              imageAlt: "Elena - Pilates Master Trainer"
            },
            {
              id: "4",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765399803516-d0einyvj.jpg",
              imageAlt: "James - Reformer Specialist"
            },
            {
              id: "5",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765399801030-jy0rtgcp.jpg",
              imageAlt: "Ana - Wellness Coach"
            }
          ]}
          title="Meet Our Expert Instructors"
          useInvertedBackground="noInvert"
          containerClassName="py-20"
          titleClassName="text-4xl font-bold text-center"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          testimonials={[
            {
              id: "1",
              name: "Jessica Martinez",
              role: "Pilates Enthusiast",
              company: "Corporate Professional",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765399804482-bxn1amv7.jpg",
              imageAlt: "Jessica Martinez"
            },
            {
              id: "2",
              name: "Amanda Chen",
              role: "Regular Member",
              company: "Fitness Journey",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765399805297-k5467tpe.jpg",
              imageAlt: "Amanda Chen"
            },
            {
              id: "3",
              name: "Rebecca Thompson",
              role: "Class Attendee",
              company: "Wellness Advocate",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765399806266-ocu3ochr.jpg",
              imageAlt: "Rebecca Thompson"
            },
            {
              id: "4",
              name: "Michelle Davis",
              role: "Member Since 2023",
              company: "Health First",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765399807216-kob1msu9.jpg",
              imageAlt: "Michelle Davis"
            },
            {
              id: "5",
              name: "Sarah Wilson",
              role: "Dedicated Member",
              company: "Transformation Story",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765399804482-bxn1amv7.jpg",
              imageAlt: "Sarah Wilson"
            },
            {
              id: "6",
              name: "Emily Rodriguez",
              role: "Pilates Advocate",
              company: "Community Member",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765399805297-k5467tpe.jpg",
              imageAlt: "Emily Rodriguez"
            }
          ]}
          title="What Our Members Say"
          description="Join hundreds of satisfied clients who have transformed their lives through our pilates programs"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          titleClassName="text-4xl font-bold"
          descriptionClassName="text-lg text-foreground/70"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Choose Your Perfect Plan"
          description="Flexible membership options designed to fit your lifestyle and goals"
          tag="Membership Plans"
          tagIcon={Sparkles}
          plans={[
            {
              id: "1",
              badge: "Starter",
              price: "$79/month",
              subtitle: "Perfect for beginners",
              features: [
                "4 classes per month",
                "Access to mat pilates",
                "Member community",
                "Basic progress tracking"
              ],
              badgeIcon: Sparkles
            },
            {
              id: "2",
              badge: "Most Popular",
              price: "$129/month",
              subtitle: "Best for regular practice",
              features: [
                "Unlimited classes",
                "All equipment access",
                "Personal form check-ins",
                "Monthly progress assessments",
                "Exclusive workshops"
              ],
              badgeIcon: Star
            },
            {
              id: "3",
              badge: "Premium",
              price: "$179/month",
              subtitle: "Complete transformation",
              features: [
                "Unlimited classes",
                "Private sessions included",
                "Personalized training plans",
                "Nutrition guidance",
                "Priority scheduling",
                "VIP community access"
              ],
              badgeIcon: Crown
            },
            {
              id: "4",
              badge: "Class Pack",
              price: "$199",
              subtitle: "10 classes in 3 months",
              features: [
                "10 class sessions",
                "All studio facilities",
                "Flexible scheduling",
                "No expiration pressure",
                "Perfect for trying us out"
              ],
              badgeIcon: Gift
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          descriptionClassName="text-lg text-foreground/70"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our studio, classes, and membership"
          tag="Help & Support"
          animationType="smooth"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          faqs={[
            {
              id: "1",
              title: "Do I need to be fit to start pilates?",
              content: "Absolutely not! Pilates is for everyone, regardless of fitness level. Our instructors provide modifications for all abilities. Beginners are welcome and encouraged to start at their own pace."
            },
            {
              id: "2",
              title: "What should I wear to class?",
              content: "Wear comfortable, breathable clothing that allows free movement. Most members wear yoga pants, leggings, or shorts paired with a t-shirt or tank top. Socks are optional on the mat."
            },
            {
              id: "3",
              title: "How often should I take classes?",
              content: "For best results, we recommend 2-3 classes per week. However, even one class weekly will provide benefits. Consistency matters more than frequency when building pilates practice."
            },
            {
              id: "4",
              title: "What is the difference between mat and reformer pilates?",
              content: "Mat pilates uses body weight as resistance, while reformer pilates uses specialized equipment with springs for added resistance. Both are excellent and offer different benefits. We recommend trying both."
            },
            {
              id: "5",
              title: "Do you offer trial classes?",
              content: "Yes! We offer a complimentary trial class for new members. This allows you to experience our studio, meet our instructors, and see if pilates is right for you."
            },
            {
              id: "6",
              title: "Can I cancel my membership anytime?",
              content: "We offer flexible monthly memberships with no long-term contracts. You can pause or cancel anytime with 30 days notice. Your wellness journey should be on your terms."
            }
          ]}
          titleClassName="text-4xl font-bold"
          descriptionClassName="text-lg text-foreground/70"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765399808133-wm6v5de4.jpg"
          imageAlt="Serenity Pilates Studio"
          buttons={[
            {
              text: "Book Your First Class",
              href: "#"
            },
            {
              text: "Contact Us",
              href: "#"
            }
          ]}
          useInvertedBackground="noInvert"
          mediaWrapperClassName="w-full max-w-4xl mx-auto"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Serenity Pilates"
          columns={[
            {
              title: "Classes",
              items: [
                {
                  label: "Mat Pilates",
                  href: "#"
                },
                {
                  label: "Reformer Classes",
                  href: "#"
                },
                {
                  label: "Group Sessions",
                  href: "#"
                },
                {
                  label: "Private Training",
                  href: "#"
                }
              ]
            },
            {
              title: "Studio",
              items: [
                {
                  label: "About Us",
                  href: "#"
                },
                {
                  label: "Our Instructors",
                  href: "#"
                },
                {
                  label: "Schedule",
                  href: "#"
                },
                {
                  label: "Memberships",
                  href: "#"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Contact",
                  href: "#"
                },
                {
                  label: "FAQ",
                  href: "#"
                },
                {
                  label: "Blog",
                  href: "#"
                },
                {
                  label: "Community",
                  href: "#"
                }
              ]
            },
            {
              title: "Connect",
              items: [
                {
                  label: "Instagram",
                  href: "#"
                },
                {
                  label: "Facebook",
                  href: "#"
                },
                {
                  label: "Newsletter",
                  href: "#"
                },
                {
                  label: "Events",
                  href: "#"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Serenity Pilates Studio. All rights reserved."
          logoTextClassName="text-4xl font-bold"
          containerClassName="py-16"
        />
      </div>
    </ThemeProvider>
  );
}