
import { ServiceCard } from '@/components/UI';
import { SERVICES_INFO } from '@/constants';
import { howItWorksIcons, icons, subscriptionIcons } from '@/assets/icons';
import Image from 'next/image';
import { Button } from '@/components/UI';
import { howitwork_bg_img, youtube_logo } from '@/assets';

const services = {
  "service": "500 Services",
  "description": "for cor-subscription"
}

function Home() {
  return (
    <main id="main" className="w-full px-8 mx-auto flex flex-col *:min-h-[50vh]  *:my-20" >
      <HeroHomePage />

      <SubScriptionSharing />
      <HowItWorks />
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

const SearchBar = () => {
  return (
    <div className='w-full my-8'>
      <div className="relative flex items-center w-2/4 mx-auto h-16 rounded-full outline outline-gray-200 overflow-hidden bg-slate-100">
        <div className="grid place-items-center h-full w-12 text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <input
          className="peer h-full w-full outline-none text-sm  bg-slate-100 text-gray-300 pr-2"
          type="text"
          id="search"
          placeholder="Search..." />
      </div>
      <p className="w-full text-center text-lg font-normal mt-8">
        *We never use any email for sale, it's private
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
            <div className='col-span-4'>
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

const SubScriptionSharing = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="font-light mb-2">A solution at the service of users</h2>
      <p className="text-4xl font-bold mb-6 relative">Subscription Sharing
        <Image src={subscriptionIcons.dec} className="absolute -right-12 -top-5" alt="dec" />
      </p>
      <div className='grid grid-cols-12 mt-20'>

        <div className="col-start-1 col-span-8 flex space-x-4">
          <div className="flex flex-col  bg-[#D8D8D8] p-12 rounded-2xl shadow-md w-[max(20rem,40%)]">
            <Image src={subscriptionIcons.share} className="mb-4" alt="share" width={128} height={128} />
            <h3 className="text-3xl font-semibold mb-2">Share</h3>
            <p className="flex-1 text-gray-700 mb-4">
              I have a subscription and would like to offer available slots to save money
            </p>
            <Button className="bg-black text-white w-full">Share</Button>
          </div>
          <div className="flex flex-col bg-primary text-white p-12 rounded-2xl shadow-md w-[max(20rem,40%)]">
            <Image src={subscriptionIcons.subscribe} className="mb-4" alt="subscribe" width={128} height={128} />
            <h3 className="text-3xl font-semibold mb-2">Subscribe</h3>
            <p className="flex-1 mb-4 text-base font-normal">
              I want to subscribe for a fraction of the price by joining a cost-sharing group
            </p>
            <Button className="bg-white text-black w-full">Share</Button>
          </div>
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
            Get started and share it to save money. We'll take care of the rest.
          </p>
        </aside>
      </div>
    </section>
  )
}

const HowItWorks = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="font-light mb-2">4 simple steps</h2>
      <p className="text-4xl font-bold mb-8">How does it work?</p>
      <div className="flex justify-between tablet:w-full desktop:w-[1024px] mt-20">
        <div className="col-start-1 col-span-6 flex flex-col space-y-4 text-left text-primary">
          <h3 className="text-2xl font-[650]">Offer a subscription:</h3>
          <ul className="*:my-8">
            <li className="flex items-center space-x-2">
              <Image src={howItWorksIcons.plus_sign} alt="plus_sign" width={24} height={24} />
              <p className=" text-base">Create Your subscription</p>
            </li>
            <li className="flex items-center space-x-2">
              <Image src={howItWorksIcons.flight} alt="flight" width={24} height={24} />
              <p className=" text-base">Share it online or with your friends</p>
            </li>
            <li className="flex items-center space-x-2">
              <Image src={howItWorksIcons.card} alt="card" width={24} height={24} />
              <p className=" text-base">Collect their payments</p>
            </li>
            <li className="flex items-center space-x-2">
              <Image src={howItWorksIcons.wallet} alt="wallet" width={24} height={24} />
              <p className=" text-base">Receive your money</p>
            </li>
          </ul>
        </div>
        <div style={{
          backgroundImage: `url(${howitwork_bg_img.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }} className="col-span-6 relative flex items-center justify-center  shadow-md rounded-2xl desktop:min-w-[613px] tablet:min-w-[313px] mobile:min-w-[113px] p-6 overflow-hidden transition-transform">
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
      </div>
    </section >
  )
}

export default Home