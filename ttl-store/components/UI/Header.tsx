
import Button from './Button'
import LogoUser from './LogoUser'
import Link from 'next/link';
import Image from 'next/image';
import { icons } from '@/assets/icons';
import { getUser } from '@/libs/auth/getUserName';

async function Header() {

  return (
    <header className="">
      <div className="wrapper flex items-center">
        <Link href="/" className='w-1/2'>
          <Image width={150} height={150} src="/images/sharehub-logo.svg" alt="logo" />
        </Link>

        <nav className="desktop:w-1/2 tablet:w-2/3 mobile:hidden flex justify-between items-center space-x-4 text-primary">
          <Link href="/services" className=" rounded-3xl bg-primary text-white px-4 py-2">Subscription</Link>
          <Link href="/about">
            <Button
              label="About"
              size="small"
            />
          </Link>
          <Link href="/help-center">
            <Button
              label="Help Center"
              size="small"
            />
          </Link>
          <span> | </span>
          <UserLogin />
          <Button size='small'>
            <div className="flex justify-center items-center gap-2">
              <Image className='text-primary' width={24} height={24} src={icons.globe} alt="globe" />
              VN
            </div>
          </Button>
        </nav>

      </div>
    </header>
  )
}

async function UserLogin() {
  const user = await getUser();

  if (user) {
    return (
      <LogoUser user={user} />
    )
  }

  return (
    <Link href="/auth/signin">
      <Button
        label="Login"
        size="small"
      />
    </Link>
  )
}

export default Header