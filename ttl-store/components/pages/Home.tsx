
import { ServiceCard } from '@/components/UI';
import { SERVICES_INFO } from '@/constants';
import { exclusiveAdvantagesIcons, howItWorksIcons, icons, subscriptionIcons } from '@/assets/icons';
import Image from 'next/image';
import { Button } from '@/components/UI';
import { howitwork_bg_img, youtube_logo } from '@/assets';
import clsx from 'clsx';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from 'react-icons/fa';

const services = {
  "service": "500 Services",
  "description": "for cor-subscription"
}

function Home() {
  return (
    <main id="main" className="w-full px-8 mx-auto flex flex-col *:min-h-[70vh]  *:my-20" >
      <HeroHomePage />

      <SubScriptionSharing />
      <HowItWorks />
      <ExclusiveAdvantages />
      <FrequentlyAskedQuestions />
    </main>
  )
}

const HeroHomePage = () => {
  return (
    <section className="w-full text-center flex-1 flex flex-col gap-y-8">
      {/* --- Title --- */}
      <h1 className="mb-2 text-[4.5rem] font-bold">
        <span className="text-primary relative">
          <Image src={icons.ilus01} alt="ilus01" className="icon-hightlight" />
          {services.service}
        </span> available

      </h1>
      <span className="h1-normal-big">
        {services.description}
      </span>
      {/* --- Search Bar --- */}
      <SearchBar />
      {/* --- Services --- */}

      <ServiceCards />
    </section>
  )
}

const SectionHeader = ({ className, children }: { className: string, children: React.ReactNode }) => {
  return (
    <h2 className={clsx("text-[3.5rem] leading-[4rem] font-bold text-center", className)}>{children}</h2>
  )
}

const SearchBar = () => {
  return (
    <div className='w-full my-8'>
      <div className="relative flex items-center w-2/4 mx-auto h-16 rounded-full outline outline-gray-200 overflow-hidden bg-slate-100">
        <div className="grid place-items-center h-full w-12 text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <input
          className="peer h-full w-full outline-none text-sm  bg-slate-100 text-gray-300 pr-2"
          type="text"
          id="search"
          placeholder="Search..." />
      </div>
      <p className="w-full text-center text-lg font-normal mt-8">
        *We never use any email for sale, it&lsquo;s private
      </p>
    </div>
  )
}

const ServiceCards = () => {
  return (
    <div>
      <div className="grid grid-cols-12 px-4 gap-x-20">
        {
          SERVICES_INFO.map((service, index) => (
            <div key={index} className='col-span-4'>
              <ServiceCard
                key={index}
                cardBackgroundImage={service.cardBackgroundImage}
                serviceName={service.name}
                serviceDescription={service.description}
                imageUrl={service.imageUrl}
              />
            </div>
          ))
        }
      </div>
      <div className="w-full text-center my-8">
        <Button className="bg-black text-white">See all subscriptions</Button>
      </div>
    </div>
  )
}

type SubScriptionCardProps = {
  imageUrl: string,
  serviceName: string,
  serviceDescription: string
  customStyle: {
    cardClassName: string | ""
    btnClassName: string | ""
    bodyClassName: string | ""
  }
}

const SubScriptionCard = ({ imageUrl, serviceName, serviceDescription, customStyle }: SubScriptionCardProps) => {
  return (
    <div className={clsx("flex flex-col p-12 rounded-2xl shadow-md w-[max(20rem,40%)] group hover:scale-[1.05] hover:-translate-y-[5%] duration-300", customStyle.cardClassName)}>
      <Image src={imageUrl}
        className="mb-4 group-hover:scale-110 duration-300"
        alt="share"
        width={128} height={128}
      />

      <h3 className="text-4xl font-bold mb-2">{serviceName}</h3>
      <p className={clsx("flex-1 mb-4 text-lg", customStyle.bodyClassName)}>
        {serviceDescription}
      </p>

      <Button className={clsx("bg-black text-white w-full", customStyle.btnClassName)}>Share</Button>
    </div>
  )
}

const SubScriptionSharing = () => {
  return (
    <section className="flex flex-col items-center">
      <p className="font-light mb-2">A solution at the service of users</p>
      <SectionHeader className="relative">Subscription Sharing
        <Image src={subscriptionIcons.dec} className="absolute -right-12 -top-5" alt="dec" />
      </SectionHeader>
      <div className='grid grid-cols-12 mt-20'>

        <div className="col-start-1 col-span-8 flex space-x-4 ">
          <SubScriptionCard
            imageUrl={subscriptionIcons.share}
            serviceName="Share"
            serviceDescription="I have a subscription and would like to offer available slots to save money"
            customStyle={{
              cardClassName: "bg-[#DFE1E8]",
              btnClassName: "bg-black text-white",
              bodyClassName: "text-[#262626]"
            }}
          />
          <SubScriptionCard
            imageUrl={subscriptionIcons.subscribe}
            serviceName="Subscribe"
            serviceDescription="I would like to join a subscription to save money"
            customStyle={{
              cardClassName: "bg-primary text-white",
              btnClassName: "bg-white text-black",
              bodyClassName: ""
            }}
          />
        </div>
        <aside className="col-start-9 col-span-4 text-gray-700 max-w-lg [&>:not(:first-child)]:mt-8">
          <p >
            <b>ShareHub</b> is the best solution to <b> share the cost of your subscriptions</b> and
            monthly expenses.
          </p>
          <p>
            No more chasing your friends for refunds, or hesitating to take out a Netflix or Spotify
            subscription.
          </p>
          <p>
            Get started and share it to save money. We&lsquo;ll take care of the rest.
          </p>
        </aside>
      </div>
    </section>
  )
}


type DetailedStepCardProps = {
  iconUrl: string,
  iconAlt: string,
  title: string,
  description: string
}
const DetailedStepCard = ({ iconUrl, iconAlt, title, description }: DetailedStepCardProps) => {
  return (
    <li className="flex cursor-pointer group">
      <details className="rounded-2xl open:shadow-xl desktop:px-12 px-4 py-8 duration-500
     [&_p]:open:subpixel-antialiased [&_p]:open:duration-500 desktop:-translate-x-12
      ">
        <summary className="list-none flex justify-start group-hover:underline duration-300">
          <Image src={iconUrl} alt={iconAlt} width={24} height={24} />
          <p className="ms-4 text-2xl font-bold">{title}</p>
        </summary>
        <p className="text-neutral-800 mt-4 text-balance">{description}</p>
      </details>
    </li>
  )
}

const ExampleCard = () => {
  return (
    <div style={{
      backgroundImage: `url(${howitwork_bg_img.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }} className="relative flex items-center justify-center  shadow-md rounded-2xl desktop:min-w-[613px] tablet:min-w-[313px] mobile:min-w-[113px] p-6  transition-transform">
      <Image src={howItWorksIcons.make_money_icon} alt="make_money_icon" width={256} height={256} className='absolute left-0 top-0' />
      <Image src={howItWorksIcons.isolation_mode} alt="isolation_mode" width={256} height={256} className='absolute right-0 bottom-0' />
      <div className=" bg-white rounded-2xl shadow-md p-6 z-20">
        <div className="flex flex-col items-center border-b-2 border-black px-8">
          <Image src={youtube_logo} className='w-28 h-16' alt="YouTube Premium" />
          <h4 className="text-xl font-semibold my-4">YouTube Premium</h4>
        </div>
        <div className='text-center'>
          <p className="text-4xl font-bold  my-8">35k</p>
          <div className="text-xl flex items-center justify-center">
            <Image src={howItWorksIcons.people} width={32} height={32} alt='people icon' className=' inline' />
            6 Members
          </div>
          <p className="mt-2 font-light">Expire date: 28/11/2024</p>
        </div>
      </div>
    </div>
  )
}

const HowItWorks = () => {
  const HowItWorkSteps: DetailedStepCardProps[] = [
    {
      iconUrl: howItWorksIcons.plus_sign,
      iconAlt: "share",
      title: "Create Your subscription",
      description: "Describe what it offers, indicate the number of slots available and the price per slot. You will then get an invite link."
    },
    {
      iconUrl: howItWorksIcons.flight,
      iconAlt: "share",
      title: "Share it online or with your friends",
      description: "Share your subscription with your friends or on social media. You can also share it with your family."
    },
    {
      iconUrl: howItWorksIcons.card,
      iconAlt: "share",
      title: "Collect their payments",
      description: "Your friends can now subscribe to your subscription. You will receive a notification when someone subscribes."
    },
    {
      iconUrl: howItWorksIcons.wallet,
      iconAlt: "share",
      title: "Receive your money",
      description: "You will receive your money directly in your bank account. You can then use it to pay for your subscription."
    }
  ] as const;

  return (
    <section className="flex flex-col text-center">
      <p className="font-light mb-2 ">4 simple steps</p>
      <SectionHeader className="mb-8">How does it work?</SectionHeader>
      <div className="flex flex-row  justify-between mobile:flex-col mt-20">
        <div className="flex flex-col text-left text-primary mobile:w-full">
          <h3 className="text-4xl font-[650]">Offer a subscription:</h3>
          <ul className="py-8 *:w-[90%] mobile:w-full mobile:*:w-full">
            {
              HowItWorkSteps.map((step, index) => (
                <DetailedStepCard key={index} {...step} />
              ))
            }
          </ul>
        </div>
        <div className="my-auto pe-14 relative">
          <Image src={howItWorksIcons.howitwork_ilus01} alt="howitwork_ilus01"
            className="absolute -top-10 -right-0 rotate-[100deg]" width={64} height={64} />
          <ExampleCard />
          <Image src={howItWorksIcons.howitwork_ilus02} alt="howitwork_ilus02" className="absolute -bottom-16 -left-28" />
        </div>
      </div>
    </section >
  )
}

type ExclusiveCardProps = {
  title: string,
  description: string,
  imageUrl: string
}
const ExclusiveCard = ({ title, description, imageUrl }: ExclusiveCardProps) => {
  return (
    <div className="flex flex-col items-center group text-center text-balance h-full *:duration-300 *:hover:translate-y-5">
      <Image src={imageUrl} alt="icon" width={180} height={180} className='group-hover:scale-[1.2] mb-4 min-h-56' />
      <div className="flex-1 flex flex-col">
        <h3 className="text-4xl font-bold min-h-28 ">{title}</h3>
        <p className="text-base text-neutral-800 px-4 flex-1">{description}</p>
      </div>
    </div>
  )
}

const ExclusiveAdvantages = () => {
  const ExclusiveAdvantages: ExclusiveCardProps[] = [
    {
      title: "Legal Service",
      description: "Yes, it is legal to share a subscription. The content or service providers themselves allow you to share. ShareHub offers you a simple and more secure payment and refund management service.",
      imageUrl: exclusiveAdvantagesIcons.legalIcon
    },
    {
      title: "Buyer Protection Program",
      description: "All your purchases are protected: we guarantee the functioning of the subscriptions, or refund you free of charge. After payment, you get access to the shared subscription. If you have a problem, our team will check and refund you free of charge if necessary.",
      imageUrl: exclusiveAdvantagesIcons.buyerIcon
    },
    {
      title: "No Fees when you share",
      description: "There are no fees for collecting money: transfers to your bank account are free and are processed automatically as soon as you reach a small minimum.",
      imageUrl: exclusiveAdvantagesIcons.noFeeIcon
    },
    {
      title: "Secure data",
      description: "If you need to share confidential data such as IDs, passwords, license numbers or other information, Sharesub is the right solution to protect this data. Your exchanges are transmitted and stored with strong encryption (AES 256) to ensure your privacy.",
      imageUrl: exclusiveAdvantagesIcons.secureIcon
    }
  ] as const;

  return (
    <section>
      <SectionHeader className="mb-40">Enjoy Exclusive Advantages</SectionHeader>
      <div className="desktop:grid desktop:grid-cols-12 gap-y-20 flex flex-col gap-">
        {
          ExclusiveAdvantages.map((advantage, index) => (
            <div key={index} className="col-span-3">
              <ExclusiveCard  {...advantage} />
            </div>
          ))
        }
      </div>
    </section>
  )
}

type AccordianProps = {
  title: string,
  description: string
}
const Accordion = ({ title, description }: AccordianProps) => {
  return (
    <details className="w-full peer transition-transform duration-500 border-b border-primary pb-8 group
      ">
      <summary className="cursor-pointer list-none flex duration-300 justify-between">
        <p className="text-3xl font-bold">{title}</p>
        <div>
          <FaPlus className="text-2xl text-primary group-open:hidden" size={32} />
          <FaMinus className="text-2xl text-primary group-open:block hidden" size={32} />
        </div>
      </summary>
      <p className="text-neutral-800 mt-4 text-balance text-base font-light delay-200">{description}</p>
    </details>
  )
}

const FrequentlyAskedQuestions = () => {
  const FAQ = [
    {
      title: "How much does it cost to share a subscription?",
      description: "It is free to share a subscription. You can share your subscription with your friends and family without any fees."
    },
    {
      title: "Is it legal to share a subscription?",
      description: "Yes, it is legal to share a subscription. The content or service providers themselves allow you to share. ShareHub offers you a simple and more secure payment and refund management service."
    },
    {
      title: "How do I share a subscription?",
      description: "To share a subscription, you need to create a subscription on ShareHub. You can then share the subscription with your friends and family by sharing the link to the subscription"
    },
    {
      title: "What if I change my mind? Can I cancel and get a refund?",
      description: "Yes, you can cancel your subscription and get a refund. If you change your mind, you can cancel your subscription and get a refund. The refund will be processed automatically and you will receive the money in your bank account."
    },
    {
      title: "Can I contact my co-subscribers?",
      description: "Yes, you can contact your co-subscribers. You can chat with your co-subscribers and share information about the subscription. You can also ask questions and get help from your co-subscribers."
    },
    {
      title: "Is the functionning of the subscription guaranteed?",
      description: "Yes, the functioning of the subscription is guaranteed. We guarantee the functioning of the subscriptions, or refund you free of charge. After payment, you get access to the shared subscription. If you have a problem, our team will check and refund you free of charge if necessary."
    }
  ] as const;
  return (
    <section>
      <SectionHeader className="mb-40">Frequently Asked Questions</SectionHeader>
      <div className="">
        {
          FAQ.map((faq, index) => (
            <div key={index} className="my-16">
              <Accordion  {...faq} />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Home